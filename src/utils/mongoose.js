export function mutipleMongooseToObject(mongooseArray) {
  return mongooseArray.map((item) => {
    return item.toObject()
  })
}

export function mongooseToObject(mongooseObject) {
  return mongooseObject ? mongooseObject.toObject() : mongooseObject
}
