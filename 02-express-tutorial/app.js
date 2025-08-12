console.log('Express Tutorial')
const express = require("express");
const app = express();
const { products, people } = require("./data.js");
const peopleRouter = require("./routes/people.js");

// week4
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().toLocaleTimeString()
    console.log(method, url, time)
    next();
}

app.use(express.static("./methods-public"));

// week4
app.use(logger);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/people", peopleRouter);

// app.get("/api/v1/people", (req, res) => {
//     res.status(200).json(people);
// })

// app.post("/api/v1/people", (req, res) => {
//     const data = req.body;
//     if (!data.name) {
//         return res.status(400).json({ success: false, message: "Please provide a name" });
//     }
//     people.push({ id: people.length + 1, name: data.name })
//     res.status(201).json({ success: true, name: data.name })
// })

app.post("/login", (req, res) => {
    const data = req.body;
    if (!data.name) {
        return res.status(400).send("Please Provide Credentials")
    }
    res.status(200).send(`Welcome ${data.name}`)
})

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