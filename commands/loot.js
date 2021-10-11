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
			.addFields(
				{ name: 'Label:', value: result.formattedData.label },
				{ name: 'Quantity:', value: result.formattedData.quantity },
				{ name: 'Items:', value: result.formattedData.lootItems },
				{ name: 'Source:', value: result.source },
			)
			.setTimestamp()
			.setFooter('Fantasy Content Generator');
	},
};