const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const FCG = require('fantasy-content-generator');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hook')
		.setDescription('Story hook generator'),
	async execute() {

		const result = FCG.Storyhooks.npcActs();

		return new MessageEmbed()
			.setColor('#FFBE0B')
			.setTitle('Story Hook Generator')
			.setDescription(result.storyhook)
			.setTimestamp()
			.setFooter('Fantasy Content Generator');
	},
};