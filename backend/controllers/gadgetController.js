const Gadget = require("../models/gadgetModel");

exports.getAll = (req, res) => {
  Gadget.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getById = (req, res) => {
  Gadget.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

exports.create = (req, res) => {
  const { name, brand, stock, category_id } = req.body;

  if (!name || !brand || !stock) {
    return res.status(400).json({ message: "Field wajib diisi!" });
  }

  Gadget.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Data berhasil ditambah" });
  });
};

exports.update = (req, res) => {
  Gadget.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Data berhasil diupdate" });
  });
};

exports.delete = (req, res) => {
  Gadget.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Data berhasil dihapus" });
  });
};