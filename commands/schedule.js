const { SlashCommandBuilder } = require('@discordjs/builders');
const { agenda } = require('../Agenda');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('schedule')
		.setDescription('Schedule a reminder')
		.addStringOption(option => option.setName('date').setDescription('When to schedule the reminder stated in plain English ex. Monday at 1:00pm or 1st of January 4:00am'))
		.addStringOption(option => option.setName('message').setDescription('A message to accompany the reminder'))
		.addStringOption(option => option.setName('mention').setDescription('The ID of a role or user you would like to mention in the reminder'))
		.addBooleanOption(option => option.setName('repeat').setDescription('Should this repeat? [Does not apply to now]')),
	async execute(interaction) {
		// Define channel
		const to = interaction.channel;

		// Get options from command
		const date = interaction.options.getString('date');
		const userMessage = interaction.options.getString('message');
		const mention = interaction.options.getString('mention');
		const repeat = interaction.options.getBoolean('repeat');

		// Message Builder
		let message = '';
		if (mention != null) {
			message = '**REMINDER**\n' + '<@' + mention + '>\n' + userMessage;
		}
		else {
			message = '**REMINDER**\n' + userMessage;
		}

		// Default date is now for asking the bot to remind people
		if (date == null) {
			agenda.now('Reminder', { message: message, to: to });
		}

		// Repeat or single reminder logic
		if (repeat) {
			const job = agenda.create('Reminder', { message: message, to: to });
			job.repeatAt(date);
		}
		else {
			agenda.schedule(date, 'Reminder', { message: message, to: to });
		}

		return interaction.reply({ content: `Reminder scheduling reuest for \`${date}\`\n\`Message:${message}\`\n\`Repeat:${repeat}\``, ephemeral: true });
	},
};