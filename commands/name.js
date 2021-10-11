const { SlashCommandBuilder, MessageEmbed } = require('@discordjs/builders');
const FCG = require('fantasy-content-generator');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('name')
		.setDescription('Name generator')
		.addStringOption(option => option.setName('race').setDescription('The desired race'))
		.addStringOption(option => option.setName('gender').setDescription('The desired gener'))
		.addStringOption(option => option.setName('seed').setDescription('Seed value for the random generator')),
	async execute(interaction) {

		const result = FCG.Names.generate({
			race: interaction.options.getString('race'),
			gender: interaction.options.getString('gender'),
			seed: interaction.options.getString('seed'),
		});

		return new MessageEmbed()
			.setColor('#8338EC')
			.setTitle('Name Generator')
			.addFields(
				{ name: 'Name:', value: result.formattedData.name },
				{ name: 'Gender:', value: result.formattedData.gender },
				{ name: 'Race:', value: result.formattedData.race },
			)
			.setTimestamp()
			.setFooter('Fantasy Content Generator');
	},
};