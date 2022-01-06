const express = require("express");
const router = express.Router();
const Galaxy = require("../models/Galaxy");

router.get("/galaxies", async (req, res) => {
  try {
    const galaxies = await Galaxy.find({});
    res.send(galaxies);
  } catch (error) {
    res.send(error);
  }
});

router.post("/galaxy", async (req, res) => {
  try {
    const galaxy = new Galaxy(req.body);
    await galaxy.save();
    res.send(galaxy);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/galaxy/:title", async (req, res) => {
  const galaxyTilte = req.params.title;
  const galaxy = await Galaxy.deleteMany({
    title: galaxyTilte,
  });
  res.send(galaxy);
});

module.exports = router;
