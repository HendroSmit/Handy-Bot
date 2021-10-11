const { SlashCommandBuilder } = require('@discordjs/builders');
const FCG = require('fantasy-content-generator');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hook')
		.setDescription('Story hook generator'),
	async execute(interaction) {

		const result = FCG.Storyhooks.npcActs();

		return interaction.reply(JSON.stringify(result));
	},
};