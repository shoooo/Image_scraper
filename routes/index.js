const express = require('express');
const router = express.Router();
const Scraper = require('image-scraper');

router.get('/', (req, res) => {
	res.render('index');
})

router.post('/index', (req, res) => {
	const URL = req.body;
	console.log(URL);
	const scraper = new Scraper(URL);

	const results = scraper.scrape(function (image) {
		if (image.extension === ".jpg" || image.extension === ".png") {
			console.log(image.address);
			res.render('index', {
				results
			})
		}
	});
})

module.exports = router;