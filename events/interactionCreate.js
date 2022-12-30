const {
  ChatInputCommandInteraction,
  ContextMenuCommandInteraction,
  ButtonInteraction,
  SelectMenuInteraction,
  EmbedBuilder,
  InteractionType,
} = require("discord.js");
const { execute } = require("./ready");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param { ApplicationCommandAutocomplete | ChatInputCommandInteraction | ContextMenuCommandInteraction | ButtonInteraction | SelectMenuInteraction} interaction
   */
  async execute(interaction, client) {
    
    if (!interaction.isChatInputCommand()) return;

    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);
      if(!command) {
        return interaction.reply({ content: "This command is outdated.", ephemeral: true })
      }

      if (command.developer && interaction.user.id !== '178689418415177729') {
        return interaction.reply({ content: "This command is temporary and not available to you.", ephemeral: true })
      }

      command.execute(interaction, client)

    }



  },
};
