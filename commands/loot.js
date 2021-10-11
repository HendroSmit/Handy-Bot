const { SlashCommandBuilder } = require('@discordjs/builders');
const FCG = require('fantasy-content-generator');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('loot')
		.setDescription('Loot generator'),
	async execute(interaction) {

		const result = FCG.Loots.generate();

		return interaction.reply(JSON.stringify(result));
	},
};