
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Simple in-memory database for flowers
const flowers = [
  { id: 1, name: 'Rose', price: 5 },
  { id: 2, name: 'Lily', price: 7 },
  // Add more flowers as needed
];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
  const selectedFlowerIds = req.body.flowers;
  let total = 0;

  selectedFlowerIds.forEach((flowerId) => {
    const selectedFlower = flowers.find((flower) => flower.id == flowerId);
    if (selectedFlower) {
      total += selectedFlower.price;
    }
  });

  res.send(`Total Bill: $${total.toFixed(2)}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

