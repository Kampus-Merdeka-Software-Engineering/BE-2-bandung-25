require("dotenv").config()
const express = require("express");
const cors = require("cors")
const { prisma } = require("./config/prisma.js");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.get("/", async (req, res) => {
    res.send("here is the response");
});

app.get ("/feedback", async (req, res) => {
    const feedback = await prisma.feedback.findMany()
    res.status(200).send(feedback);
})
app.all("*", async (req, res) => {
    res.json({
        message: "routes you are looking is not found"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`server is already running at ${PORT}`)

})