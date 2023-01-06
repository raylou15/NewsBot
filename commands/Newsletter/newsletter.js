const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
    Embed,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    messageLink,
  } = require("discord.js");
const config = require("../../config.json");
const newsletterData = require("../../schemas/newsletterbotsubs");

const client = (module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
      .setName("newsletter")
      .setDescription("Check out the latest news!")
      .addSubcommand((subcommand) => subcommand
        .setName("subscribe")
        .setDescription("Subscribe to the daily newsletter!")
      )
      .addSubcommand((subcommand) => subcommand
        .setName("unsubscribe")
        .setDescription("Quit receiving the newsletter!")
      )
      .addSubcommand((subcommand) => subcommand
        .setName("test")
        .setDescription("test")
      ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction, client) {

        if (interaction.guild) {

            if (interaction.options.getSubcommand() === 'subscribe') {

                let newData = new newsletterData({
                    GuildID: interaction.guild.id,
                    UserID: interaction.user.id,
                    MorningNewsletter: true,
                    EveningNewsletter: true,
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

                })

                await newData.save().catch(console.error);

            }
    
    
            if (interaction.options.getSubcommand() === 'unsubscribe') {
                await newsletterData.findOneAndDelete({ UserID: interaction.user.id })
                interaction.reply({ content: "You have unsubscribed from your daily newsletter."})
            }



            if (interaction.options.getSubcommand() === 'test') {
                const newsletterhandler = require("../../handlers/newsletterhandler")

                newsletterhandler.MorningNews(client)

                interaction.reply("Done")
            }




        } else {
            return interaction.reply("This prompt has to be done in DMs with the bot, both for security as well as to ensure you have your DMs open!")
        }
        
    },
});
  