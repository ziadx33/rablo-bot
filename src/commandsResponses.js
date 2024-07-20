const { client } = require("./index.js");
const { RULES } = require("./constants.js");

client.on("interactionCreate", (interaction) => {
	if (!interaction.isChatInputCommand()) return;
	if (interaction.commandName === "rules") giveRule(interaction);
});

async function giveRule(interaction) {
	const data = interaction.options.data[0];
	const rule = RULES.find((rule) => rule.name === data.value);
	const randomQuestion =
		rule.questions[Math.floor(Math.random() * rule.questions.length)];
	const messageData = await interaction.reply(
		`تمام جميل هديك سؤال دلوقت تحلو عشان اتأكد انك مش هباد ( لو محلتوش راجع نفسك ياض )
           ${rule.question ?? "السؤال انك تقول في كام error في السؤال ده :"}
			\`\`\`${rule.language}\n${randomQuestion.code}\`\`\`
            `,
	);

	let init = true;
	let done = false;

	client.on("messageCreate", async (message) => {
		if (!init) return;
		else init = false;
		if (done) return;
		if (
			message.author.id !== messageData.interaction.user.id ||
			message.channelId !== messageData.interaction.channel.id
		)
			return;
		if (message.content != randomQuestion.errors)
			return message.reply("غلط يسطا عيد الcommand");
		let role = message.guild.roles.cache.find(
			(role) => role.name === rule.name,
		);
		message.member.roles.add(role);
		message.reply("جامد اديتك الrule");
	});
}
