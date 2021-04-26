const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET chat messages

        const user = req.query.user
        const fellow = req.query.fellow

    console.log(user)
    console.log(fellow)

    const queryText = `SELECT * FROM chat WHERE "toUser"=$1 AND "fromUser"=$2 OR "fromUser"=$1 AND "toUser"=$2 ORDER BY "whenSent" DESC`
    pool.query(queryText, [user, fellow]).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.sendStatus(500)
        console.log(err)
    })
});



module.exports = router;