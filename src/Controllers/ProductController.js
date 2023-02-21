import { CastError } from "mongoose";
import createError from "http-errors";

import ProductModel from "../Models/ProductModel.js";

class ProductController {
  static async getAllProducts(req, res, next) {
    try {
      const products = await ProductModel.find({}, { __v: 0 });
      res.status(200);
      res.send({
        data: products,
      });
    } catch (e) {
      next(e);
    }
  }

  static async addProduct(req, res, next) {
    const { name, price } = req.body;
    const newProduct = new ProductModel({ name, price });

    try {
      const result = await newProduct.save();
      res.status(200);
      res.send({
        data: result,
      });
    } catch (error) {
      if (error.name === "ValidationError") {
        next(createError(422, error.message));
      } else {
        next(error);
      }
    }
  }

  static async getProduct(req, res, next) {
    const { id } = req.params;
    try {
      const product = await ProductModel.findOne({ _id: id }, { __v: 0 });
      if (!product) throw new createError.NotFound("Product Not Found");
      res.status(200);
      res.send({
        data: product,
      });
    } catch (error) {
      if (error instanceof CastError) {
        next(createError(400, "Invalid Product ID"));
      } else {
        next(error);
      }
    }
  }

  static async deleteProduct(req, res, next) {
    const { id } = req.params;
    try {
      const product = await ProductModel.findByIdAndDelete(id);
      if (!product) throw new createError.NotFound("Product Not Found");
      res.status(200);
      res.send({
        data: product,
      });
    } catch (error) {
      if (error instanceof CastError) {
        next(createError(400, "Invalid Product ID"));
      } else {
        next(error);
      }
    }
  }

  static async updateProduct(req, res, next) {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await ProductModel.findByIdAndUpdate(id, body, {
        new: true,
      });
      if (!product) throw new createError.NotFound("Product Not Found");
      res.send({
        data: product,
      });
    } catch (error) {
      if (error instanceof CastError) {
        next(createError(400, "Invalid Product ID"));
      } else {
        next(error);
      }
    }
  }
}

export default ProductController;
