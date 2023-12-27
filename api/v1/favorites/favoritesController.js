import { getFavoritesFromDB, postFavoriteInDB, deleteFavoriteFromDB, searchFavoritesFromDB } from "./favoritesModel.js";

async function getFavorites(req, res) {
  try {
  const userEmail = req.user_email;
  const sort = req.query.sort;
  const label = req.query.label;
  const category = req.query.category;
  const favorites = await getFavoritesFromDB(userEmail, category, sort, label);

  const response = {
    data: favorites,
    meta: {
      total: favorites.length,
    },
  };
  res.json(response);
} catch (error) {
  console.log(error);
  res.status(500).json({ message: "Failed to get favorites" });
}
}

async function postFavorite(req, res) {
  try {
  const productId = req.body.product_id;
  const userEmail = req.user_email;
    const favorite = await postFavoriteInDB(productId, userEmail);
    console.log(`New favorite: ${JSON.stringify(favorite)}`);
    res.json(favorite);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to post favorite"});
  }
}

async function deleteFavorite(req, res) {
  try {
  const favoriteId = parseInt(req.params.id);
  await deleteFavoriteFromDB(favoriteId);
  console.log(`Deleted favorite with ID: ${favoriteId}`);
  res.json({ msg: `Product removed from favorites` });
}
catch (error) {
  console.log(error);
  res.status(500).json({ message: "Failed to delete favorite" });
}
}

async function searchFavorites(req, res) {
  try {
  const userEmail = req.user_email;
  const search = req.query.search;
  const sort = req.query.sort;
  const label = req.query.label;
  const category = req.query.category;
  const results = await searchFavoritesFromDB(userEmail, search, category, sort, label);
  const response = {
    data: results,
  }
  res.json(response);
} catch (error) {
  console.log(error);
  res.status(500).json({ message: "Failed to search favorites" });
}
}

export default { getFavorites, postFavorite, deleteFavorite, searchFavorites };
