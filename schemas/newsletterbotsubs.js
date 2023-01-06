const { mongoose, Schema, model } = require("mongoose");

const newsLetterBotSchema = new Schema({
  GuildID: String,
  UserID: String,
  MorningNewsletter: Boolean,
  EveningNewsletter: Boolean,
  Topics: [
    {sport: Boolean},
    {tech: Boolean},
    {world: Boolean},
    {finance: Boolean},
    {politics: Boolean},
    {business: Boolean},
    {economics: Boolean},
    {entertainment: Boolean},
    {beauty: Boolean},
    {travel: Boolean},
    {music: Boolean},
    {food: Boolean},
    {science: Boolean},
    {gaming: Boolean},
    {energy: Boolean}
  ]
});

module.exports = model("newsletterDataBot", newsLetterBotSchema, "newsletterbotsubs");