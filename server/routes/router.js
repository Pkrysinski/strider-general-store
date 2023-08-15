const express = require('express');
const router = express.Router();

router.get('/receipts', (req, res) => {

    let requestUrl = 'https://doc.strider.tech/content/receipts.json';

    async function getReceipts() {
        const response = await fetch(requestUrl);
        const receipts = await response.json();
        res.send(receipts);
    };

    getReceipts();

})

module.exports = router;