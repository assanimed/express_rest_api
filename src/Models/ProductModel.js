import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  Manufacturer: {
    type: String,
    required: true,
  },
  Brand: {
    type: String,
    required: true,
  },
  subBrand: {
    type: String,
  },
  Category: {
    type: String,
    required: true,
  },
  Verification: {
    type: String,
  },
  Country: {
    type: String,
    required: true,
  },
});

const ProductModel = model("product", ProductSchema);

export default ProductModel;
