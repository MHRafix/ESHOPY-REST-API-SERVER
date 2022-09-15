// internal imports are here
const wishlistCollection = require('../../models/wishlistModel');

// post api controller here
exports.addWishlist = async (req, res, next) => {
	try {
		const product = req.body;
		const addProduct = new wishlistCollection(product);
		await addProduct.save();
		res
			.status(201)
			.json({ success: 'Product successfully saved to wishlist!' });
	} catch (err) {
		next(err);
	}
};
