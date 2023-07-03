// Requerindo as classes necessárias do Discors.js
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('../config.json');

// Criando uma instancia de cliente "Guilds" se refere a os servidores
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Bot Funcionando logado como = ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);