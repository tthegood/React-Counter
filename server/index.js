const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// In‑memory count
let count = 0;

// Get current count
app.get('/api/count', (req, res) => {
  res.json({ count });
});

// Increment
app.post('/api/count/increment', (req, res) => {
  count += 1;
  res.json({ count });
});

// Decrement
app.post('/api/count/decrement', (req, res) => {
  count -= 1;
  res.json({ count });
});

app.listen(port, () => {
  console.log(`Counter API listening at http://localhost:${port}`);
});
