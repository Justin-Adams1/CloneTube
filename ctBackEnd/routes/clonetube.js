// const { Card, validateCard } = require('../models/card');   // going to add schema here
const express = require("express");
const router = express.Router();

router.get('/', async (req, res) => { // get all collections
    try {
        const collection = await Collection.find();
        return res.send(collection);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.get('/:collectionId/cards', async (req, res) => { // get all cards from specific collection
    try{
        const collection = await Collection.findById(req.params.collectionId);
        if(!collection)
            return res.status(400).send(`The collection with id "${req.params.id}" does not exist.`);
        return res.send(collection.cards);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});  

router.post("/newCollection", async (req, res) => { // post a new collection
  try {
    const { error } = validateCollection(req.body);
    if (error) return res.status(400).send(error);
    const collection = new Collection({
      name: req.body.name,
      cards: [],
    });
    const awaitConst = await collection.save();
    return res.send(awaitConst);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

router.put('/:collectionId/:cardId', async (req, res) => { // amends a card in a given collection
    try {
    const { error } = validateCard(req.body);
    if (error) return res.status(400).send(error);

    const collection = await Collection.findById(req.params.collectionId);
    if (!collection) return res.status(400).send(`The collection with id "${req.params.collectionId}" does not exist.`);

    const card = collection.cards.id(req.params.cardId);
    if (!card) return res.status(400).send(`The card with id "${req.params.cardId}" is not in this collection.`);
        card.title = req.body.title;
        card.definitionOne = req.body.definitionOne;
        card.definitionTwo = req.body.definitionTwo;
    await collection.save();
    return res.send(card);
    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.delete('/:collectionId/:cardId', async (req, res) => { // deletes a card in a given collection
    try {
    const collection = await Collection.findById(req.params.collectionId);
    if (!collection) return res.status(400).send(`The collection with id "${req.params.collectionId}" does not exist.`);

    let card = collection.cards.id(req.params.cardId);
    if (!card) return res.status(400).send(`The card with id "${req.params.cardId}" is not in this collection`);
    card = await card.remove();
    await collection.save();
    return res.send(card);
    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;
