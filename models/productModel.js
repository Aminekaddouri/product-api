import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have a name"],
    unique: true,
    maxlength: [50, "Product name must be 50 characters or fewer"],
    minlength: [3, "Product name must be at least 3 characters"],
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
    min: [0, "Price cannot be negative"],
  },
  description: {
    type: String,
    required: [true, "A product must have a description"],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "A product must belong to a category"],
    enum: {
      values: ["electronics", "clothing", "books", "home", "sports"],
      message: "Category must be: electronics, clothing, books, home, or sports",
    },
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  quantity: {
    type: Number,
    default: 0,
    min: [0, "Quantity cannot be negative"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;