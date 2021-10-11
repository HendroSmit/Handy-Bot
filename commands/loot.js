const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const FCG = require('fantasy-content-generator');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('loot')
		.setDescription('Loot generator'),
	async execute() {

		const result = FCG.Loots.generate();

		return new MessageEmbed()
			.setColor('#FF006E')
			.setTitle('Loot Generator')
			.addField('Label:', (result.formattedData.label != null) ? result.formattedData.label : '')
			.addField('Quantity:', (result.formattedData.quantity != null) ? result.formattedData.quantity : '')
			.addField('Items:', (result.formattedData.lootItems != null) ? result.formattedData.lootItems : '')
			.addField('Source:', (result.source != null) ? result.source : '')
			.setTimestamp()
			.setFooter('Fantasy Content Generator');
	},
};