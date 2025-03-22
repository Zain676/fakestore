const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/products", async (req, res) => {
  const response = await axios.get("https://fakestoreapi.com/products");
  res.render("products.ejs", { products: response.data });
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  res.send(`<h2>Thank you, ${name}! Your message has been received.</h2>`);
});


app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});

