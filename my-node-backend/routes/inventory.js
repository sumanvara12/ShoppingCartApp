const express = require('express');
const router = express.Router();
const Inventory = require('../models/inventory');

// Create a new inventory item
router.post('/inventory', async (req, res) => {
  try {
    const item = new Inventory(req.body);
    await item.save();
    res.status(201).send(item);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all inventory items
router.get('/inventory', async (req, res) => {
  try {
    const items = await Inventory.find();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update an inventory item
router.patch('/inventory/:id', async (req, res) => {
  try {
    const item = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) {
      return res.status(404).send();
    }
    res.send(item);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete an inventory item
router.delete('/inventory/:id', async (req, res) => {
  try {
    const item = await Inventory.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).send();
    }
    res.send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

