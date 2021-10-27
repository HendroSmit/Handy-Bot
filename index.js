/* eslint-disable no-trailing-spaces */
/* eslint-disable no-mixed-spaces-and-tabs */
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');

const Agenda = require('agenda');
module.exports.agenda = new Agenda({
	db: { address: 'localhost:27017/agenda-test', collection: 'agendaJobs' },
});

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// Define jobs for scheduling reminders
this.agenda.define(
	'Reminder',
	{ priority: 'high', concurrency: 10 },
	async (job) => {
	  const { to } = job.attrs.data;
	  const { message } = job.attrs.data;
	  const channel = client.channels.cache.get(to);
	  await channel.send(message);
	},
);

this.agenda.start();

client.login(process.env.token);