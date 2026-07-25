const db = require("../config/db");

const Gadget = {
  getAll: (callback) => {
    db.query("SELECT * FROM gadgets", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM gadgets WHERE id = ?", [id], callback);
  },

  create: (data, callback) => {
    db.query("INSERT INTO gadgets SET ?", data, callback);
  },

  update: (id, data, callback) => {
    db.query("UPDATE gadgets SET ? WHERE id = ?", [data, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM gadgets WHERE id = ?", [id], callback);
  }
};

module.exports = Gadget;