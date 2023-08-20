import mongoose from 'mongoose'

export async function connect() {
  mongoose.connect(process.env.DB_URL)

  try {
    await mongoose.connect(process.env.DB_URL)

    console.log('Database connected')
  } catch (error) {
    console.log(error)
  }
}

export default { connect }
