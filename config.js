

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["715210330820575293", ""], 
  mongodbUri : "mongodb+srv://yimkumerpongen:<db_password>@primemusic-lavalink.eash6.mongodb.net/?retryWrites=true&w=majority&appName=PrimeMusic-Lavalink",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "193.226.78.187",
      port:  9372,
      secure: false
    }
  ]
}
