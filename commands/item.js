const { SlashCommandBuilder } = require('@discordjs/builders');
const FCG = require('fantasy-content-generator');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('item')
		.setDescription('Magic item generator'),
	async execute(interaction) {

		const result = FCG.MagicItems.generate();

		return interaction.reply(JSON.stringify(result));
	},
};