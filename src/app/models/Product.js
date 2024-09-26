// import mongoose, { Schema } from "mongoose";
import mongoose from "mongoose";
import Product from "@/app/product/[id]/page";

// const productSchema = new Schema({
//   name: { type: String, required: true },
// });

// const Product =
//   mongoose.models.Product || mongoose.model("Product", productSchema);
// export default Product;

// Función para crear un nuevo producto
export const createProduct = async (productData) => {
  const product = new Product(productData);
  try {
    // Guardar el producto en la base de datos
    const savedProduct = await product.save();
    return savedProduct; // Devuelve el producto guardado
  } catch (error) {
    console.error('Error creating product:', error);
    throw error; // Lanza el error para ser manejado externamente
  }
};

// Función para encontrar todos los productos
export const findProducts = async () => {
  try {
    // Buscar todos los productos en la base de datos
    const products = await Product.find();
    return products; // Devuelve la lista de productos
  } catch (error) {
    console.error('Error finding products:', error);
    throw error; // Lanza el error para ser manejado externamente
  }
};

export default Product