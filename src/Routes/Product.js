import { Router } from "express";
import ProductController from "../Controllers/ProductController.js";

const router = Router();

router.get("/", ProductController.getAllProducts);

router.post("/", ProductController.addProduct);

router.get("/:id", ProductController.getProduct);

router.patch("/:id", ProductController.updateProduct);

router.delete("/:id", ProductController.deleteProduct);

export default router;
