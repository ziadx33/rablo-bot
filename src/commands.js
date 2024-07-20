require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
	{
		name: "rules",
		description: "to get a programming rule",
		options: [
			{
				name: "rule",
				description: "the rule you want",
				type: ApplicationCommandOptionType.String,
				required: true,
			},
		],
	},
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

async function deployCommands(CLIENT_ID, GUILD_ID) {
	try {
		await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
			body: commands,
		});
	} catch (error) {
		console.error(`there was an error: ${error}`);
	}
}

deployCommands(process.env.CLIENT_ID, process.env.GUILD_ID);
