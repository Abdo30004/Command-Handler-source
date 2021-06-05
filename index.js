const Discord = require('discord.js');require('discord-reply')
const client = new Discord.Client();
const fs = require('fs');
const { Collection } = require('discord.js');
const prefix = require('./config/bot.json');

fs.readdir("./commands/", (err, categories) => {
  if (err) console.log(err)
  categories.forEach(category => {
    let categoryName = category.split('.')[0];
    fs.readdir(`./commands/${category}`, (error, files) => {
      if (error) { return console.log("error i can not find commands"); };
      files.filter(file => file.endsWith(".js")).forEach(file => {
        const command = require(`./commands/${category}/${file}`);

        client.commands.set(command.help.name, command)
      })
    })

  })
})

fs.readdir('./events/', (err, categories) => {
  if (err) return console.log(err);
  categories.forEach(category => {
    let categoryName = category.split('.')[0];
    fs.readdir(`./events/${category}`, (error, files) => {
      if (error) { return console.log("error i can not find commands"); };
      files.filter(file => file.endsWith(".js")).forEach(file => {
        var event = require(`./events/${category}/${file}`);
        client.on(categoryName, event.bind(null, client))
      })
    })
  })
client.config = require('./config/bot.json');
client.commands = new Discord.Collection();
client.login(process.env.token);
