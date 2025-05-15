
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const axios = require('axios');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.DirectMessages],
  partials: [Partials.Channel]
});

client.once('ready', () => {
  console.log(`🤖 Bot online come ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.channel.type !== 1 || message.author.bot) return;

  try {
    await axios.post(process.env.https://chat2date.app.n8n.cloud/webhook-test/chat2date, {
      content: message.content,
      channel_id: message.channel.id,
      channel_type: 1
    });
    console.log(`✅ Inviato a n8n: ${message.content}`);
  } catch (error) {
    console.error('Errore durante l'invio a n8n:', error.message);
  }
});

client.login(process.env.MTM3MjYzMTc0MTg2ODUzOTk4OA.GQYdve.BiB2lLjSQ2EpzN6330ErG9G_QO8Lzj4L5ZDWig);
