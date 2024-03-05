const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
app.use(cors);
 
app.use("body-parser")

app.use("/api/v1", rootRouter);
app.listen(3000);

