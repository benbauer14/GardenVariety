const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // GET unread messages
      const user = req.query.user
      const queryText = `SELECT COUNT(chat) FROM chat WHERE "toUser"=$1 AND "read"=false`
      pool.query(queryText, [user]).then((response) => {
        res.send(response)
      }).catch((err) => {
        res.send(500)
        console.log(err)
      })
  });

module.exports = router;