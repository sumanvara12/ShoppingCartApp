const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const inventoryRoutes = require('./routes/inventory'); // Placeholder

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/inventory', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use routes
app.use('/api', inventoryRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
