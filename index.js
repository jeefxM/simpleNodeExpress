const PORT = 8000;
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json("Hello from OSFD! ");
});

app.listen(PORT, () => console.log(`server runing on Port ${PORT}`));
