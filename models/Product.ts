import mongoose, { model, models, Schema } from 'mongoose'

export interface ProductInterface {
  title: string
  description: string
  price: number | string
  _id: string
  productUrls: string[]
  selectedCategory: string
  productProperties: object
}

const ProductShema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    productUrls: { type: Array, required: false },
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
      required: false
    },
    productProperties: { type: Object }
  },
  {
    timestamps: true
  }
)

export const Product = models.Product || model('Product', ProductShema)
