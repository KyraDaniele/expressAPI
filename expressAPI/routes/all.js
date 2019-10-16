const express = require('express'),
    router = express.Router();

    router.get('/', (req,res) => {
        const data = {
            cats: [
                {name: 'Zelda', desc: 'The Good One'},
                {name: 'Stormy', desc: 'The Stinky One'}
            ]
        }
        res.status(200)
            .send(data)
            .end();
});


router.get('/', (req,res) => {
    let json = {
        data
    };
    res.status(200)
        .send(json)
        .end();
});

module.exports = router;