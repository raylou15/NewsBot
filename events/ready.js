const { ActivityType } = require("discord.js");
const { loadCommands, loadComponents } = require("../handlers/handler")

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    client.user.setPresence({
      activities: [{ name: "the news", type: ActivityType.Watching }],
    });
    console.log("The bot is now online!");
    loadCommands(client);
    loadComponents(client);
    client.guilds.cache.get("1058234866401030275").channels.cache.get("1058242732163866724").send({ content: "Newsletter has booted up!" })
  },
};
