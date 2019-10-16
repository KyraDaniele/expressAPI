const express = require('express'),
    router = express.Router();

    router.get('/:person_name?/:age?', (req,res) => {
        const {person_name, age} = req.params;
        const snippet = `<h1>Hello ${person_name.charAt(0).toUpperCase()+ person_name.slice(1)}! You are ${age} years old!</h1>`;
        res.status(200)
            .send(snippet)
            .end();
});

module.exports = router;