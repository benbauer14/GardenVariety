const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET chat messages
    const listingid = req.query.listingid

    const queryText = `SELECT usermarketitem.id AS marketid, vegetable, trade, trade_item, for_sale, price, info, when_posted, users.username FROM "usermarketitem" JOIN "users" ON usermarketitem.user_id = users.id WHERE usermarketitem.id=$1;`
    pool.query(queryText, [listingid]).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.sendStatus(500)
        console.log(err)
    })
});

router.delete('/', (req, res) => {
    // GET chat messages
      const listingid = req.query.listingid
      console.log('in delete')
  
      const queryText = `DELETE FROM usermarketitem WHERE "id"=$1`
      pool.query(queryText, [listingid]).then((response) => {
          res.send(response)
      }).catch((err) => {
          res.sendStatus(500)
          console.log(err)
      })
  });



module.exports = router;