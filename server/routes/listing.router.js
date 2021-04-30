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

  router.post('/newlisting', (req, res) => {
      const user_id = req.body.userid
      const vegetable = req.body.veg
      const quantity = req.body.quantity
      const trade = req.body.trade
      const trade_item = req.body.tradeitem
      const for_sale = req.body.forsale
      const price = req.body.price
      const info = req.body.info

      console.log('newListing', req.body)
  
      const queryText = `INSERT INTO usermarketitem (user_id, vegetable, quantity, trade, trade_item, for_sale, price, info) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
      pool.query(queryText, [user_id, vegetable, quantity, trade, trade_item, for_sale, price, info]).then((response) => {
          res.sendStatus(200)
      }).catch((err) => {
          res.sendStatus(500)
          console.log(err)
      })
  });  

  
  router.get('/update', (req, res) => {
    const listing_id = req.query.listingid
    console.log('updateListing'+ req.query.listingid)
    const queryText = `SELECT * FROM usermarketitem WHERE "id"=$1`
    pool.query(queryText, [listing_id]).then((response) => {
        console.log(response.rows)
        res.send(response.rows)
    }).catch((err) => {
        res.sendStatus(500)
        console.log(err)
    })
});

router.put('/update', (req,res) => {
    console.log(req.body)
    const queryText = `UPDATE "usermarketitem" SET "vegetable"=$1, "quantity"=$2, trade=$3, "trade_item"=$4, for_sale=$5, "price"=$6, "info"=$7  WHERE "id"=$8`
    pool.query(queryText, [req.body.veg, req.body.quantity, req.body.trade, req.body.tradeitem, req.body.forsale, req.body.price, req.body.info, req.body.id]).then((response) => {
        res.sendStatus(200)
    }).catch((err) => {
        console.log(err)
        res.sendStatus(500)
    })
})
module.exports = router;