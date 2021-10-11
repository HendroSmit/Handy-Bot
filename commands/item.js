const { SlashCommandBuilder, MessageEmbed } = require('@discordjs/builders');
const FCG = require('fantasy-content-generator');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('item')
		.setDescription('Magic item generator'),
	async execute() {

		const result = FCG.MagicItems.generate();

		return new MessageEmbed()
			.setColor('#FB5607')
			.setTitle('Magic Item Generator')
			.addFields(
				{ name: 'Title:', value: result.formattedData.title },
				{ name: 'Type:', value: result.type, inline: true },
				{ name: 'Subtype:', value: result.subtype },
				{ name: 'Power Level:', value: result.powerLevel, inline: true },
				{ name: 'School of Magic:', value: result.schoolOfMagic },
				{ name: 'Effects:', value: JSON.stringify(result.effects) },
			)
			.setTimestamp()
			.setFooter('Fantasy Content Generator');
	},
};