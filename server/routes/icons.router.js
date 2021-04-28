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

router.get('/usericon', (req, res) => {
    console.log("usericon" + req.query.user)
    const queryText = `SELECT path FROM "avatar" JOIN personal_info ON avatar.id = personal_info.user_avatar JOIN users ON personal_info.user_id = users.id WHERE users.username=$1`
    pool.query(queryText, [req.query.user]).then((response) => {
        res.send(response.rows)
    }).catch((err) => {
        console.log(err)
        res.sendStatus(500)
    })
})

module.exports = router;