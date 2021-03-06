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

    let sanitizedArray = []
    let sanitizedCount = 1
    //build starting query and append on additional query info if provided
    let queryText = `SELECT usermarketitem.id, vegetable, quantity, trade, trade_item, for_sale, price, info, when_posted, users.username FROM "usermarketitem" JOIN "users" ON usermarketitem.user_id = users.id `
    if(veg != "") {
        if(sanitizedCount == 1){
            queryText = queryText + `WHERE "vegetable" LIKE $` + sanitizedCount
            sanitizedCount += 1
            sanitizedArray.push(veg)
        }
    }
    if(trade != "") {
        if(sanitizedCount == 1){
            queryText = queryText + `WHERE "trade"=$` + sanitizedCount
            sanitizedCount += 1
            sanitizedArray.push(trade)
        }else{
            queryText = queryText + ` AND "trade"=$` + sanitizedCount
            sanitizedCount += 1
            sanitizedArray.push(trade)
        }
    }
    if(buy != "") {
        if(sanitizedCount == 1){
            queryText = queryText + `WHERE "for_sale"=$` + sanitizedCount
            sanitizedCount += 1
            sanitizedArray.push(buy)
        }else{
            queryText = queryText + ` AND "for_sale"=$` + sanitizedCount
            sanitizedCount += 1
            sanitizedArray.push(buy)
        }
    }
    //use material UI to determine date
    if(when != "") {
        if(sanitizedCount == 1){
            queryText = queryText + `WHERE "when_posted" > $` + sanitizedCount
            sanitizedCount += 1
            sanitizedArray.push(when)
        }else{
            sanitizedCount += 1
            queryText = queryText + ` AND "when_posted" > $` + sanitizedCount
            sanitizedArray.push(when)
        }
    }
    pool.query(queryText + `ORDER BY "when_posted" DESC;`, sanitizedArray).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.sendStatus(500)
        console.log(err)
    })
});

module.exports = router;