const express = require('express');
const app = express();
const port = 3000;
const budget = require('./budget.json');
const credit = require('./credit.json');

app.use('/', express.static('public'));

// const budget = {
//     myBudget: [
//         {
//             title: 'Eat out',
//             budget: 25
//         },
//         {
//             title: 'Rent',
//             budget: 325
//         },
//         {
//             title: 'Grocery',
//             budget: 110
//         },
//     ]
// };

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.get('/credit', (req, res) => {
    res.json(credit);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
