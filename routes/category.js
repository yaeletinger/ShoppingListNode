const express = require("express");
const sqlCon = require('../db/sqlConnect');
const router = express.Router();


router.get("/", async(req, res) => {
    try {
      const myQuery = `SELECT * FROM categories`;
      const results = await sqlCon.promise().query(myQuery); 
      res.json(results); 
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });

module.exports = router;

