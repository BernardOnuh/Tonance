const { Telegraf, Markup } = require("telegraf");
const path = require("path");
const axios = require("axios"); // Make sure to install axios: npm install axios

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const bot = new Telegraf("7020450110:AAHtPfP9o7KPAWIrufoPjgG_4siRS8cyclc");

// Helper function to get the image path
const imagePath = (fileName) => path.join(__dirname, "images", fileName);

bot.start((ctx) => {
  const username = ctx.from.username ? `@${ctx.from.username}` : ctx.from.first_name;
  const message = `<b>
  👋🏻Welcome, ${username}! to Tonance App, built on TON Blockchain.</b>

🌐 Tonance is the next generation of decentralized DeFi application on Telegram. A centralized exchange offering a cross-chain interoperability and liquidity transfer protocol that allows truly decentralized transfer of assets between various blockchains.

💰 Tonance is offering universal token xBTON through gamification within a Telegram mini-app. Anyone can start mining xBTON tokens for free while completing campaigns. 

 Tap to mine, invite friends and earn together. 
Make every hour count.`;

  ctx.replyWithPhoto(
    { source: imagePath("tonance.png") },
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
  );
});

// Function to make API request
async function makeApiRequest() {
  try {
    const response = await axios.get('https://api.example.com/endpoint');
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