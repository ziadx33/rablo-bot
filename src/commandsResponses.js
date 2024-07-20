const { client } = require("./index.js");
const { executeCode } = require("./execute-code.js");

client.on("interactionCreate", (interaction) => {
	if (!interaction.isChatInputCommand()) return;
	if (interaction.commandName === "rules") giveRule(interaction);
});

async function giveRule(interaction) {
	const data = interaction.options.data[0];
	const messageData = await interaction.reply(
		`تمام جميل هديك سؤال دلوقت تحلو عشان اتأكد انك مش هباد 
            السؤال ( سهل فشخ ) انك تكتب كود بال${data.value} بيدي output hello world
            `,
	);

	let init = true;

	client.once("messageCreate", async (message) => {
		if (!init) return;
		else init = false;
		if (message.author.id !== messageData.interaction.user.id) return;
		if (false) message.reply("؟؟؟ \n غلط يسطا عيد الcommand تاني");
		message.reply(await executeCode(data.value, message.content));
	});
}
