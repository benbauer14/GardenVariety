const express = require('express');
const pool = require('../modules/pool');
const router = express.Router(); 

router.get('/', (req, res) => {
  // GET all icons
    const queryText = `SELECT * FROM "avatar"`
    pool.query(queryText).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.sendStatus(500)
        console.log(err)
    })
});

module.exports = router;