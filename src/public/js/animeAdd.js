const imagePreview = document.querySelector('.image-preview')
const dropZone = document.querySelector('#dropzone-file')
const textContent = document.querySelector('.text-content')
const listURL = document.querySelector('.list-url')
const submitButton = document.querySelector('button[type="submit"]')

let dropZoneURL
let urlCounts = 1

function convertImageToBase64(file) {
  if (!file) {
    return Promise.reject(new Error('No file provided'))
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = function () {
      resolve(reader.result)
    }
    reader.onerror = function (err) {
      reject(err)
    }
  })
}

dropZone.addEventListener('change', function (e) {
  dropZoneURL = URL.createObjectURL(e.target.files[0])
  imagePreview.style.backgroundImage = 'url(' + dropZoneURL + ')'
  textContent.style.display = 'none'
})

function addUrl() {
  const urlContainer = document.createElement('div')
  urlContainer.classList.add('url', 'my-2')
  urlContainer.innerHTML = /* html */ `
    <label for='url-${urlCounts}-name' class="font-bold">Name:</label>
    <input type='text' class='rounded-md border border-gray-200 shadow mr-2' id='url-${urlCounts}-name' name='url-name' />
    <label for='url-${urlCounts}-link' class="font-bold">Link:</label>
    <input type='text' class='rounded-md border border-gray-200 shadow mr-2' id='url-${urlCounts}-link' name='url-link' />
  `
  listURL.appendChild(urlContainer)
  urlCounts++
}

submitButton.addEventListener('click', function (e) {
  e.preventDefault()

  convertImageToBase64(dropZone.files[0])
    .then((base64Image) => {
      const name = document.getElementById('name').value
      const description = document.getElementById('description').value
      const slug = document.getElementById('slug').value
      const urlNodeList = document.querySelectorAll('.url')

      let urls = []

      Array.from(urlNodeList).map((url) => {
        const name = url.querySelector('input[name="url-name"]').value
        const link = url.querySelector('input[name="url-link"]').value

        urls.push({
          name,
          link,
        })
      })

      const data = {
        name: name,
        description: description,
        image: base64Image,
        slug: slug,
        urls: urls,
      }
      fetch('/anime/store', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async (response) => response.text())
        .then((result) => {
          window.location.href = result
        })
    })
    .catch((error) => {
      console.error(error)
    })
})
