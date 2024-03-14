const mongoose = require("mongoose");
const videoGame = require("../models/games");
const seedGames = require("./seedGame");
mongoose.connect("mongodb://localhost:27017/video-game", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const seedDB = async () => {
  await videoGame.deleteMany({});

  for (let gameData of seedGames) {
    const game = new videoGame(gameData);
    await game.save();
  }

  console.log("Database seeded with sample video games.");
};

seedDB().then(() => {
  mongoose.connection.close();
});
