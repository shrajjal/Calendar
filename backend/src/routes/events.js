const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Create
router.post('/', async (req, res) => {
  try {
    const ev = new Event(req.body);
    await ev.save();
    res.status(201).json(ev);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read events in a time range
router.get('/', async (req, res) => {
  try {
    const { start, end } = req.query; // ISO strings expected
    const filter = {};
    if (start && end) {
      const s = new Date(start);
      const e = new Date(end);
      filter.$or = [
        { start: { $gte: s, $lt: e } },
        { end: { $gt: s, $lte: e } },
        { start: { $lte: s }, end: { $gte: e } }
      ];
    }
    const events = await Event.find(filter).sort({ start: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const ev = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(ev);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
