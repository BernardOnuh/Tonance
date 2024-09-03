const { Telegraf, Markup } = require("telegraf");
const axios = require("axios"); // Ensure axios is installed: npm install axios

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const bot = new Telegraf("7020450110:AAHtPfP9o7KPAWIrufoPjgG_4siRS8cyclc");

bot.start((ctx) => {
  const username = ctx.from.username ? `@${ctx.from.username}` : ctx.from.first_name;
  const message = `<b>
  👋🏻Welcome, ${username}! to Tonance App, built on TON Blockchain.</b>

🌐 Tonance is the next generation of decentralized DeFi application on Telegram. A centralized exchange offering a cross-chain interoperability and liquidity transfer protocol that allows truly decentralized transfer of assets between various blockchains.

💰 Tonance is offering universal token xBTON through gamification within a Telegram mini-app. Anyone can start mining xBTON tokens for free while completing campaigns. 

 Tap to mine, invite friends and earn together. 
Make every hour count.`;

  ctx.replyWithPhoto(
    { url: "https://i.postimg.cc/66z4z7gK/Group-22tonance.png" },
    {
      caption: message,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "💬 Join Community", url: "https://example.com/how-to-play" },
            {
              text: "🌐 Open App",
              web_app: { url: "https://tonance-app.vercel.app" },
            },
          ],
          [
            {
              text: "How it Works",
              url: "https://example.com/how-to-play"
            },
          ],
        ],
      },
    }
  ).catch(error => {
    console.error('Failed to send photo:', error);
    ctx.reply('Sorry, an error occurred while trying to send the image.');
  });
});

// Function to make API request
async function makeApiRequest() {
  try {
    const response = await axios.get('https://tonance-database-main.onrender.com/api/tonance/user/123456789');
    console.log('API response:', response.data);
    // Handle the API response here
  } catch (error) {
    console.error('Error making API request:', error);
  }
}

// Set up interval to make API request every 20 seconds
setInterval(makeApiRequest, 20000);

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));


