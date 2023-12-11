require("dotenv").config()
const express = require("express");
const cors = require("cors")
const { feedbackRoutes } = require("./routes/feedback.routes");
const { articleRoutes } = require("./routes/article.routes");
const { newsletterRoutes } = require("./routes/newsletter.routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", async (req, res) => {
    res.send("here is the response");
});

app.use("/feedback", feedbackRoutes);
app.use("/article", articleRoutes);
app.use("/newsletter", newsletterRoutes);

app.all("*", async (req, res) => {
    res.json({
        message: "routes you are looking is not found"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`server is already running at ${PORT}`)

})