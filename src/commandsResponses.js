const { client } = require("./index.js");
const { RULES } = require("./constants.js");

client.on("interactionCreate", (interaction) => {
	if (!interaction.isChatInputCommand()) return;
	if (interaction.commandName === "rules") giveRule(interaction);
});

async function giveRule(interaction) {
	const data = interaction.options.data[0];
	if (!RULES.map((rule) => rule.name).includes(data.value))
		return interaction.reply(
			`مفيش حاجة اسمها كدة\n الrules الموجودة بس هما دول: \n ${RULES.map(
				(rule) => `- <:${rule.name}:${rule.id}>  ${rule.name}`,
			).join("\n")} \n\n اختار رول بقي فيهم`,
		);
	const messageData = await interaction.reply(
		`تمام جميل هديك سؤال دلوقت تحلو عشان اتأكد انك مش هباد 
            السؤال ( سهل فشخ ) انك تكتب كود بال${data.value} بيدي output hello world
            `,
	);

	client.once("messageCreate", (message) => {
		if (message.author.id !== messageData.interaction.user.id) return;
		message.reply("؟؟؟ \n غلط يسطا عيد الcommand تاني");
	});
}
