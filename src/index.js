require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
	],
});

exports.client = client;

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
	require("./commandsResponses.js");
});

client.login(process.env.TOKEN);
