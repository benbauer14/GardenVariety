const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */ 
router.get('/', (req, res) => {
  // GET chat messages
    const veg = req.query.veg
    const trade = req.query.trade
    const buy = req.query.buy
    const when = req.query.when

    let sanitizedArray = [veg]
    let sanitizedCount = 1
    let queryText = `SELECT * FROM "userMarketItem" WHERE "vegetable"=$1`
    if(trade != "") {
        sanitizedCount += 1
        queryText = queryText + ` AND "trade"=$` + sanitizedCount
        sanitizedArray.push(trade)
    }
    if(buy != "") {
        sanitizedCount += 1
        queryText = queryText + ` AND "for_sale"=$` + sanitizedCount
        sanitizedArray.push(buy)
    }
    if(when != "") {
        sanitizedCount += 1
        queryText = queryText + ` AND "when_posted > CURRENT_DATE - $` + sanitizedCount
        sanitizedArray.push(when)
    }
    console.log(queryText)
    console.log(sanitizedArray)
    pool.query(queryText, sanitizedArray).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.sendStatus(500)
        console.log(err)
    })
});

module.exports = router;