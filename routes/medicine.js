const express = require("express");
const { getAllMedicine, createMedicine } = require("../controllers/medicine");
const router = express.Router();

router.get("/", getAllMedicine);
router.post("/", createMedicine);

module.exports = router;
