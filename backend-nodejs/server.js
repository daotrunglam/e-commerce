const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const authRouter = require("./router/authRouter");
const productRouter = require("./router/productRouter");
const blogRouter = require("./router/blogRouter");
const categoryRouter = require("./router/prodCategoryRouter");
const blogCategoryRouter = require("./router/blogCatRouter");
const brandRouter = require("./router/brandRouter");
const colorRouter = require("./router/colorRouter");
const enqRouter = require("./router/enqRouter");
const couponRouter = require("./router/couponRouter");
const uploadRouter = require("./router/uploadRouter");
const { notFound, errorHandler } = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRouter);
app.use("/api/blogCategory", blogCategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/color", colorRouter);
app.use("/api/enquiry", enqRouter);
app.use("/api/upload", uploadRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
