const express = require("express");
const router = express();

router.get("/", (req, res) => {
  res.json("welcome to my express app");
});

router.get("/produk", (req, res) => {
  res.json({
    message: "succes get data",
    data: [
      {
        name: "produk1",
      },
      {
        name: "produk2",
      },
      {
        name: "produk3",
      },
    ],
  });
});

router.get("/kategori", (req, res) => {
  res.json({
    message: "succes get data",
    data: [
      {
        name: "kategori1",
      },
      {
        name: "kategori2",
      },
      {
        name: "kategori3",
      },
    ],
  });
});

module.exports = router;
