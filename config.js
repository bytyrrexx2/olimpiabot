module.exports = {
TOKEN: "MTA1NDM0NDY3NTQ1NDA5OTQ5Ng.GAkXw6.i34HnqjHuie99ibvjqKu_mF-XdbAa86fnDKpEU",
ownerID: "1007465033850167416", //write your discord user id.
botInvite: "https://discord.com/api/oauth2/authorize?client_id=1054344675454099496&permissions=8&scope=bot%20applications.commands", //write your discord bot invite.
supportServer: "https://discord.gg/GwccJ3RDPU", //write your discord bot support server invite.
mongodbURL: "mongodb+srv://tyred:8993460083aA$@bot001.cdcokwr.mongodb.net/?retryWrites=true&w=majority", //write your mongodb url.
status: 'Musica en FireMC',
commandsDir: './commands', //Please don't touch
language: "en", //en, tr, nl, pt, fr, ar, zh_TW, it
embedColor: "ffa954", //hex color code
errorLog: "1051659107930742803", //write your discord error log channel id.
  
    voteManager: { //optional
        status: false, //true or false
        api_key: "", //write your top.gg api key. 
        vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","pause","play","playlist","queue","resume","save","search","skip","stop","time","volume"], //write your use by vote commands.
        vote_url: "", //write your top.gg vote url.
    },
  
   shardManager:{
     shardStatus: true //Si no existe en más de 1000 servidores, cambie esta parte a verdadero.
   },

    playlistSettings:{
        maxPlaylist: 100, //max playlist count
        maxMusic: 750, //max music count
    },

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
},

voiceConfig: {
leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 10000000, //1000 = 1 second
},

},

maxVol: 150, //You can specify the maximum volume level.

}
}
