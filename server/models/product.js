import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true,
  },
  size: {
    type: Array,
    required: true,
  },
  comments: {
    type: Array,
    ref: 'Comment',
  },
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  imageUrl: String,
  count: {
    type: Number,
    default: 0
  }
})
export default mongoose.model('Product', productSchema)
