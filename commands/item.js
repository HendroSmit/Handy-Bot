const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
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
			.addField('Title:', (result.formattedData.title != null) ? result.formattedData.title : '')
			.addField('Type:', (result.type != null) ? result.type : '', true)
			.addField('Subtype:', (result.subtype != null) ? result.subtype : '')
			.addField('Power Level:', (result.powerLevel != null) ? result.powerLevel : '', true)
			.addField('School of Magic:', (result.schoolOfMagic != null) ? result.schoolOfMagic : '')
			.addField('Effects:', (result.effects != null) ? JSON.stringify(result.effects) : '')
			.setTimestamp()
			.setFooter('Fantasy Content Generator');
	},
};