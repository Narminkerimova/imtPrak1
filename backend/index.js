import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://narmingkbf206:narmin28311007_@cluster0.etsr5ne.mongodb.net/"
  )
  .then(() => console.log("Connected"))
  .catch(() => console.log("NOT Connected"));

const productsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image:String
});
const Product = mongoose.model("Product", productsSchema);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", async (req, res) => {
  const product = await Product.find();
  res.send(product);
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const product = await Product.findById(id);
  res.send(product);
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  res.send(product);
});

app.post("/products", async (req, res) => {
  const { body } = req;
  const product = await Product.create(body);
  res.send(product);
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const product = await Product.findByIdAndUpdate(id,body);
  res.send(product);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
