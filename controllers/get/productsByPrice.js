const createError = require('http-errors');
const productsCollection = require('../../models/productsModel');

exports.priceFilter = async (req, res, next) => {
	try {
		const allProducts = await productsCollection.find();
		const minimum__price = req.params.minPrice;
		const maximum__price = req.params.maxPrice;
		const filteredProducts = allProducts.filter(
			(product) =>
				product.regularPrice >= Number(minimum__price) &&
				product.regularPrice <= Number(maximum__price)
		);
		res.status(200).json(filteredProducts);
	} catch (err) {
		next(err);
	}
};

// post products api controller here
exports.postProducts = async (req, res, next) => {
	try {
		const product__data = req.body;
		await productsCollection.insertOne(product__data);
		res.status(200).json({ success: 'Product added successfully!' });
	} catch (err) {
		next(err);
	}
};
