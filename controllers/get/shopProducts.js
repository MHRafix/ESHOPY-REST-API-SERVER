const productsCollection = require('../../models/productsModel');

// get products api controller here
exports.shopProducts = async (req, res, next) => {
	try {
		const shop_products = await productsCollection.find();
		res.status(200).json(shop_products);
	} catch (err) {
		next(err);
	}
};
