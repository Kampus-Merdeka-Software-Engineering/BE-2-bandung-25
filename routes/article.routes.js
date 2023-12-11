const express = require("express");
const articleRoutes = express.Router();
const { prisma } = require("../config/prisma");


articleRoutes.get("/", async (req, res) => {
    const articles = await prisma.article.findMany();
    res.status(200).send(articles);
});


module.exports = { articleRoutes };