import { getProductsFromDB, getProductByIdFromDB, postProductsInDB, updateProductInDB, deleteProductFromDB, searchProductsFromDB, getAllLabelsFromDB, getAllCategoriesFromDB } from "./productsModel.js";
import { paginate } from "../sortUtils/paginationUtil.js";

async function getProducts(req, res) {
  try {
  const category = req.query.category;
  const sort = req.query.sort;
  const label = req.query.label;
  const userEmail = req.user_email;

  const products = await getProductsFromDB(category, sort, label, userEmail);

  const paginationInfo = paginate(products, req)
  res.json(paginationInfo);
} catch (error) {
  console.log(error);
  res.status(500).json({ message: "Failed to get products" });
}
}

async function getAuthenticatedProducts(req, res) {
  try {
  const category = req.query.category;
  const sort = req.query.sort;
  const label = req.query.label;
  const userEmail = req.user_email;

  const products = await getProductsFromDB(category, sort, label, userEmail);

  const paginationInfo = paginate(products, req)
  res.json(paginationInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get products" });
  }
}



async function getProductById(req, res) {
  try {
  const productId = parseInt(req.params.id);
  const product = await getProductByIdFromDB(productId);
  res.json(product);
} catch (error) {
  console.log(error);
  res.status(500).json({ message: "Failed to get product by ID" });
}
}

async function postProducts(req, res) {
  try {
  const productData = req.body;
  // Validate input
  if (!productData.product_name){
    return res.status(400).json({ message: "Product name is required" });
  }
  if (!productData.product_underline){
    return res.status(400).json({ message: "Product underline is required" });
  }
  if (!productData.product_description){
    return res.status(400).json({ message: "Product description is required" });
  }
  if (!productData.images[0].image_url){
    return res.status(400).json({ message: "Product image is required" });
  }
  if (!productData.inventory_stock){
    return res.status(400).json({ message: "Product inventory is required" });
  }
  if (productData.prices[0].price === undefined){
    return res.status(400).json({ message: "Product price is required" });
  }
  if (!productData.prices[0].starting_at){
    return res.status(400).json({ message: "Starting date for price is required " });
  }
  if (productData.prices[0].is_campaign === undefined){
    return res.status(400).json({ message: "Campaign is required" });
  }
  if (!productData.prices[0].ending_at){
    return res.status(400).json({ message: "Ending date for price is required" });
  }
  const newProduct = await postProductsInDB(productData);
  console.log(`Posted product: ${JSON.stringify(newProduct)}`);
  res.json(newProduct);
} catch (error) {
  console.log(error);
  res.status(500).json({ message: "Failed to post product" });
}
}

async function updateProduct(req, res) {
  try {
  const productId = parseInt(req.params.id);
  const productData = req.body;
  const updatedProduct = await updateProductInDB(productId, productData);
  console.log(`Updated product with ${updatedProduct}`);
  res.json({ msg: `Product with id ${productId} updated`});
} catch (error) {
  console.log(error);
  res.status(500).json({ message: "Failed to update product" });
}
}

async function deleteProduct(req, res) {
  try {
  const productId = parseInt(req.params.id);
  await deleteProductFromDB(productId);
  res.json({ msg: `Product with id ${productId} deleted` });
} catch (error) {
  console.log(error);
  res.status(500).json({ message: "Failed to delete product" });
}
}

async function searchProducts(req, res) {
  try {
  const search = req.query.search;
  const category = req.query.category;
  const sort = req.query.sort;
  const label = req.query.label;
  const userEmail = req.user_email;
  const results = await searchProductsFromDB(search, category, sort, label, userEmail);

  const paginatedResults = paginate(results, req)
  res.json(paginatedResults);
} catch (error) {
  console.log(error);
  res.status(500).json({ message: "Failed to get products" });
}
}

async function searchAuthenticatedProducts(req, res){
  try {
    const search = req.query.search;
    const category = req.query.category;
    const sort = req.query.sort;
    const label = req.query.label;
    const userEmail = req.user_email;
    const results = await searchProductsFromDB(search, category, sort, label, userEmail);

    const paginatedResults = paginate(results, req)
    res.json(paginatedResults);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get products" });
  }
}

async function getLabels(req, res){
  try {
    const labels = await getAllLabelsFromDB();
    res.json(labels);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get labels" });
  }
}

async function getCategories(req, res){
  try {
    const categories = await getAllCategoriesFromDB();
    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get categories" });
  }
}


export default { getProducts, getAuthenticatedProducts, getProductById, postProducts, deleteProduct, updateProduct, searchProducts, searchAuthenticatedProducts, getLabels, getCategories };
