const { SlashCommandBuilder } = require('@discordjs/builders');
const FCG = require('fantasy-content-generator');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('npc')
		.setDescription('NPC generator')
		.addStringOption(option => option.setName('race').setDescription('The desired race'))
		.addStringOption(option => option.setName('gender').setDescription('The desired gener'))
		.addStringOption(option => option.setName('seed').setDescription('Seed value for the random generator')),
	async execute(interaction) {

		const result = FCG.NPCs.generate({
			race: interaction.options.getString('race'),
			gender: interaction.options.getString('gender'),
			seed: interaction.options.getString('seed'),
			shouldGenerateRelations: true,
		});

		return interaction.reply(JSON.stringify(result));
	},
};