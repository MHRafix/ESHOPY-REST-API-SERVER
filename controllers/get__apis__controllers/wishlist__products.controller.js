// internal imports are here
const wishlist__products__collection = require("../../models/wishlist__products.model");

// get products api controller here
exports.get__wishlist__products = async (req, res, next) => {
  try {
    const query = { userEmail: req.params.email };
    const wishlist__products = await wishlist__products__collection.find(query);
    res.send(wishlist__products);
  } catch (err) {
    next(err);
  }
};
