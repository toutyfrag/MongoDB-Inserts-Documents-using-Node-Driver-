//Collection is the equivalent of a table
//Document is the equivalent of a row


const express = require('express');
const app = express();
const mongoose = require('mongoose');

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://Cluster90533:Atlas90533@cluster90533.ho4zumb.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('fruitsdb');
    const collection = database.collection('fruits');

    // Create an array of documents to insert
    const redFruits = [
      {name: "Apples", colour: "Reds", calories: 20},
      {name: "Strawberries", colour: "Reds", calories: 24},
      {name: "Tomato", colour: "Reds", calories: 40}
    ];

    // this option prevents additional documents from being inserted if one fails
    const options = {ordered: true};

    const result = await collection.insertMany(redFruits, options);
    console.log("documents were inserted");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
