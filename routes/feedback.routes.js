const express = require("express");
const feedbackRoutes = express.Router();
const { prisma } = require("../config/prisma");


feedbackRoutes.get("/", async (req, res) => {
	const feedbacks = await prisma.feedback.findMany();
	res.status(200).send(feedbacks);
});

// create new message
feedbackRoutes.post("/", async (req, res) => {
	const { name, email, feedback } = req.body;
	const newfeedback = await prisma.feedback.create({
		data: {
			name: name,
			email: email,
			feedback: feedback,
		},
	});
	res.status(201).json({
		message: "feedback created",
		data: newfeedback,
	});
});

module.exports = { feedbackRoutes };