let { ACAR } = require('../../Clients/Global.Clients')

let client = global.client = new ACAR({
    token: "",
    MongoURI: "mongodb://127.0.0.1/Self",
    prefix: [".","!"],
    owners: ["327236967265861633","930839000816701461"]
})

client.on('ready', async () => {
  console.log(`[READY] Logged in as ${client.user.tag}`);
  console.log(`[READY] Processing ${client.guilds.cache.size} guilds...`);
  for (const guild of client.guilds.cache.values()) {
    try {
      console.log(`[GUILD_MEMBERS] Fetching members for: ${guild.name} (${guild.id})`);
      await guild.members.fetch();
      console.log(`[GUILD_MEMBERS] Successfully fetched members for: ${guild.name}`);
    } catch (err) {
      console.error(`[GUILD_MEMBERS_ERROR] Could not fetch members for guild ${guild.name} (${guild.id}):`, err);
    }
  }
  console.log("[READY] Guild member fetching process complete.");
});

client.fetchCommands()
client.fetchEvents()
client.connect()