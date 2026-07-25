require("dotenv").config(); // 👈 PALING ATAS

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000; // 👈 pakai env

app.use(cors());
app.use(express.json());

const gadgetRoutes = require("./routes/gadgetRoutes");

app.use("/api/gadgets", gadgetRoutes);

app.get("/", (req, res) => {
  res.send("API Gadget Inventory Jalan 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});