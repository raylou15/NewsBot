const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const schedule = require("node-schedule");
const { connect } = require("mongoose");
const { Guilds, GuildMembers, GuildMessages, MessageContent, GuildMessageReactions, GuildMessageTyping } =
  GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;

const client = new Client({
  intents: [Guilds, GuildMessages, GuildMessageReactions ],
  partials: [User, Message, GuildMember, ThreadMember, Channel],
});

const {
  loadEvents,
  loadCommands,
  loadComponents,
} = require("./handlers/handler");

// Setting up commands, events, and components.
client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();
client.components = new Collection();

// MongoDB Connection
connect(client.config.DatabaseURL, {}).then(() =>
  console.log("The client is now connected to the database.")
);

loadEvents(client);

client.login(client.config.token);
