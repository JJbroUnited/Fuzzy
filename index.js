const Discord = require("discord.js")
require("dotenv").config()



const client = new Discord.Client({
    allowedMentions: {
        Parse: ['user', 'roles'],
        repiledUser: true,
    },
    intents: [
        'DIRECT_MESSAGES',
        'GUILDS',
        'GUILD_BANS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_EMOJIS_AND_STICKERS',
        'GUILD_MEMBERS',
        'GUILD_MESSAGES',
        'GUILD_WEBHOOKS',
        "GUILD_PRESENCES",
        ],
});





client.on("ready", () => {
    console.log('Fuzzy Missy is Online')

    client.user.setActivity(`My Beautiful Husband & Kids`, { type: "WATCHING" })
    
    let guild = client.guilds.cache.get('989741926318211182')

    client.channels.cache.get('990456379326210070').setName(`👥 Total users - ${guild.memberCount}`)
    client.channels.cache.get('990456422334595213').setName(`👤 Members - ${guild.members.cache.filter(member => !member.user.bot).size}`)
    client.channels.cache.get('990456450495172638').setName(`🤖 Bots - ${guild.members.cache.filter(member => member.user.bot).size}`)

   function statusCount() {
    client.channels.cache.get('990477077574721546')
    .setName(`🟢 ${guild.members.cache.filter(m => m.presence?.status == 'online').size} ⛔ ${guild.members.cache.filter(m => m.presence?.status == 'dnd').size} 🌙 ${guild.members.cache.filter(m => m.presence?.status == 'idle').size} ⚫ ${guild.members.cache.filter(m => m.presence?.status == 'offline' || !m.presence).size}`)
   } statusCount()

   setInterval(() => {
    statusCount()
   }, 600000)
});



const welcomeChannelId = "989745277818765322"

client.on("guildMemberAdd", async (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server!`)
})

client.on ('guildMemberAdd', (member) =>{
    client.channels.cache.get('990456379326210070').setName(`👥 Total users - ${member.guild.memberCount}`)
    client.channels.cache.get('990456422334595213').setName(`👤 Members - ${member.guild.members.cache.filter(member => !member.user.bot).size}`)
    client.channels.cache.get('990456450495172638').setName(`🤖 Bots - ${member.guild.members.cache.filter(member => member.user.bot).size}`)
})

client.on ('guildMemberRemove', (member) =>{
    client.channels.cache.get('990456379326210070').setName(`👥 Total users - ${member.guild.memberCount}`)
    client.channels.cache.get('990456422334595213').setName(`👤 Members - ${member.guild.members.cache.filter(member => !member.user.bot).size}`)
    client.channels.cache.get('990456450495172638').setName(`🤖 Bots - ${member.guild.members.cache.filter(member => member.user.bot).size}`)
})



client.login(process.env.TOKEN)