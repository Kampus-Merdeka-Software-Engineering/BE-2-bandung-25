const express = require("express");
const newsletterRoutes = express.Router();
const { prisma } = require("../config/prisma");


newsletterRoutes.get("/", async (req, res) => {
	const newsletters = await prisma.newsletter.findMany();
	res.status(200).send(newsletters);
});

// create new message
newsletterRoutes.post("/", async (req, res) => {
	const { name, email, newsletter } = req.body;
	const newnewsletter = await prisma.newsletter.create({
		data: {
			name: name,
			email: email,
		},
	});
	res.status(201).json({
		message: "newsletter created",
		data: newnewsletter,
	});
});

module.exports = { newsletterRoutes };