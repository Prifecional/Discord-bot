const {SlashCommandBuilder} = require('discord.js')

//Module.Exports é como você exporta data no Node.js
module.exports = {
    data : new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Responde com pong!'),
    //Execute é o método que vai executar o evento aqui
    async execute(interaction){
        await interaction.reply('Pong1');
    },
};