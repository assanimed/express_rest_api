import addProduct from "./addProduct.js";
import deleteProduct from "./deleteProduct.js";
import getProduct from "./getProduct.js";
import getProducts from "./getProducts.js";
import updateProduct from "./updateProduct.js";

const products = {
  paths: {
    "/products": {
      ...getProducts,
      ...addProduct,
    },
    "/products/:id": {
      ...getProduct,
      ...updateProduct,
      ...deleteProduct,
    },
  },
};

export default products;
