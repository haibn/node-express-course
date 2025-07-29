console.log('Express Tutorial')
const express = require("express");
const app = express();
const { products } = require("./data.js");

app.use(express.static("./public"));

app.get("/api/v1/test", (req, res) => {
    res.status(200).json({ message: "It worked!" });
})

app.get("/api/v1/products", (req, res) => {
    res.status(200).json(products);
})

app.get("/api/v1/products/:productID", (req, res) => {
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p) => p.id === idToFind);

    if (!product) {
        return res.status(404).json({ message: "That product was not found."});
    }

    res.status(200).json(product);
})

app.get("/api/v1/query", (req, res) => {
    const { search, limit, price } = req.query;
    let filteredProducts = [...products];
    
    if (search) {
        filteredProducts = filteredProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }

    if (price) {
        filteredProducts = filteredProducts.filter((product) => {
            return product.price <= Number(price);
        })
    }
    
    if (limit) {
        filteredProducts = filteredProducts.slice(0, Number(limit));
    }

    res.status(200).json(filteredProducts)
})

app.all("*", (req, res) => {
    res.status(404).send("<h1>Resource not found</hi>");
})

app.listen(3000, () => {
    console.log("Server is listening in port 3000...");
})