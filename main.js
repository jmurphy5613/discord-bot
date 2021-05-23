const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';

client.once('ready', () =>{
    console.log('Bot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot || (message.author.id !== '329062298046169098' || message.author.id !== '374022136047861770')) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'start.tournament'){
        message.channel.send('Tournament started!');
    }
});

client.login('');