const express = require("express");
const bodyparser = require("body-parser");
var cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/connectDB");
const product = require("./routes/product_Route");
const user = require("./routes/user_Route");

connectDB();

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(
  cors({
    // origin: "https://bimify-web.netlify.app/",
    origin:"*",
    credentials: true,
  })
);

app.use("/api/product", product);
app.use("/api/user", user);

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running at port: ${port}`);
});
