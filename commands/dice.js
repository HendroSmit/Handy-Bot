const { SlashCommandBuilder } = require('@discordjs/builders');
const Roll = require('roll'), roll = new Roll();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('A dice roller')
		.addStringOption(option => option.setName('dice').setDescription('The dice you want to roll in dice notation')),
	async execute(interaction) {
		const result = roll.roll(interaction.options.getString('input'));
		return interaction.reply(result);
	},
};