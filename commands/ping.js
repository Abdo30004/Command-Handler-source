module.exports = {
        name: "ping",//Command
        cooldown: 5,//cooldown in seconds
        aliases: ["timetaken","latency"],//Shortcuts,aliases You can add whatever you want
        
    run: async(client, message, args) => {
      message.channel.send("pong!").then(m => m.edit(`\`\`\`js
Ping: ${client.ws.ping}
\`\`\``))
 
    }
};