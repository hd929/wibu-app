import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Anime = new Schema(
  {
    name: { type: String, default: '' },
    description: { type: String },
    slug: { type: String },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Anime', Anime)
