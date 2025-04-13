const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", indexRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Blog API running on port ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});
