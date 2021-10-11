const { SlashCommandBuilder } = require('@discordjs/builders');
const Roll = require('roll'), roll = new Roll();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice')
		.setDescription('A dice roller')
		.addStringOption(option => option.setName('input').setDescription('The dice you want to roll in dice notation'))
		.addBooleanOption(option => option.setName('whisper').setDescription('Whisper the roll to yourself?')),
	async execute(interaction) {
		// Get input from user
		let input = interaction.options.getString('input');

		// Default roll of a d20 if no input is supplied
		if (input == null) {
			input = 'd20';
		}

		// Get whisper option from user
		let whisper = interaction.options.getBoolean('whisper');

		// Default visibility of public
		if (whisper == null) {
			whisper = false;
		}

		// Roll the dice
		const result = roll.roll(input);

		return interaction.reply({ content: `Rolling \`${input}\` : \`${result.rolled}\``, ephemeral: whisper });
	},
};