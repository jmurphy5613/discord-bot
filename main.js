const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';

client.once('ready', ()=>{
    console.log('Bot is online!') 
})

client.on('message', () =>{
    if(!message.content.startsWith('-') || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if(command === 'start tournament'){
        message.channel.send('Tournament started!');
    }
})

client.login('ODQ2MDk5Nzk0MDE5MDkwNDg0.YKql1g.t3AhlaC6-XTnyqXJWG8eK-8vKfQ');