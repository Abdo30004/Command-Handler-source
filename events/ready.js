module.exports = async (client) => {

  console.log(`${client.user.tag} is ready`);
  console.log(`server : ${client.guilds.cache.size}`)
  console.log(`channel : ${client.channels.cache.size}`)
  console.log(`users : ${client.users.cache.size}`)
  console.log(`bot id : ${client.user.id}`)
  console.log(`bot ping : ${client.ws.ping}`)
  client.user.setActivity("help");

};