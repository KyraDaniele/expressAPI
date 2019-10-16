// DECLARED VARIABLES CAN HAVE COMMA SEPARATING INSTEAD OF CONST AND THE BEGINNING EACH TIME. SEMICOLON ENDS THE DECLARATIONS
const express = require('express'),
    router = express.Router();

    router.get('/', (req,res) => {
        const snippet = `<h1>Hello World!!!</h1>`;
        res.status(200)
            .send(snippet)
            .end();
});

module.exports = router;