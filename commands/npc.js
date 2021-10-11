const { SlashCommandBuilder, MessageEmbed } = require('@discordjs/builders');
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

		return new MessageEmbed()
			.setColor('#3A86FF')
			.setTitle('Name Generator')
			.addFields(
				{ name: 'Name:', value: result.formattedData.name },
				{ name: 'Gender:', value: result.formattedData.gender },
				{ name: 'Race:', value: result.formattedData.race },
				{ name: 'Vocation:', value: result.formattedData.vocation },
				{ name: 'Traits:', value: JSON.stringify(result.formattedData.traits) },
				{ name: 'Desires:', value: JSON.stringify(result.formattedData.desires) },
				{ name: 'Relations:', value: JSON.stringify(result.formattedData.relations) },
			)
			.setTimestamp()
			.setFooter('Fantasy Content Generator', 'https://github.com/thomascgray/fantasy-content-generator');
	},
};