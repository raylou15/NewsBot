const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  PermissionFlagsBits,
  Client,
} = require("discord.js");

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName("restart")
    .setDescription("Restarts the bot entirely!")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction) {
    interaction.reply({ content: "🔄 Restarting...", ephemeral: true });

    setTimeout(function () {
      process.exit();
    }, 500);
  },
};
