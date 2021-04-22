const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET chat messages
    const user = req.query.user
    const queryText = `SELECT * FROM chat WHERE "toUser"=$1 OR "fromUser"=$1 ORDER BY "whenSent" DESC;`
    pool.query(queryText, [user]).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.sendStatus(500)
        console.log(err)
    })
});

router.post('/newmessage', (req,res) => {
    const message = req.body.message
    const fellow = req.body.fellow
    const queryText = `INSERT INTO chat ("toUser", "fromUser", "message") VALUES ($1, $2, $3)`
    pool.query(queryText, [req.body.fellow, req.body.user, req.body.message]).then((response) =>{
        res.sendStatus(201)
    }).catch((err) =>{
        res.sendStatus(500)
    })
})

module.exports = router;
