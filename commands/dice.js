const { SlashCommandBuilder } = require('@discordjs/builders');
const Roll = require('roll'), roll = new Roll();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice')
		.setDescription('A dice roller')
		.addStringOption(option => option.setName('input').setDescription('The dice you want to roll in dice notation'))
		.addBooleanOption(option => option.setName('whisper').setDescription('Whisper the roll to yourself?')),
	async execute(interaction) {
		const input = interaction.options.getString('input');
		const whisper = interaction.options.getBoolean('whisper');
		const result = roll.roll(input);
		return interaction.reply({ content: `Rolling \`${input}\` : \`${result}\``, ephemeral: whisper });
	},
};