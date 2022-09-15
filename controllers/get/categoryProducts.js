// internal imports are here
const productsCollection = require('../../models/productsModel');

// get products api controller here
exports.catgorizeProducts = async (req, res, next) => {
	try {
		const { category } = req.params;
		const categoryProducts = await productsCollection.find({
			category: category,
		});
		res.status(200).json(categoryProducts);
	} catch (err) {
		next(err);
	}
};
