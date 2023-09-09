let handler = async (m, { conn, text }) => {
  let premiumList = [
    {
      duration: "3 DAY",
      price: 100,
      command: "3D",
    },
  ];

  if (!text) {
    let listText = "*PREMIUM LIST:*\n\n";
    premiumList.forEach((premium, index) => {
      listText += `◦  PREMIUM ${premium.duration}\n`;
      listText += `◦  Price : *${premium.price.toLocaleString()}* Balance\n`;
      listText += `◦  *Command :* .Prem ${premium.command}\n\n`;
    });

    conn.reply(m.chat, listText, m, {
      contextInfo: {
        externalAdReply: {
          title: `Hello, please choose your premium plan.`,
          thumbnailUrl: "https://telegra.ph/file/c76a3192a218682852f63.jpg",
          sourceUrl: "https://chat.whatsapp.com/EHvO9j6JMHb9roHNTvtbdy",
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });

    return;
  }

  let days = parseInt(text);
  if (isNaN(days)) return conn.reply(m.chat, "Invalid input. Please enter the number of days you want to buy.", m);

  let selectedPremium = premiumList.find((premium) => premium.command.toLowerCase() === text.toLowerCase());
  if (!selectedPremium) return conn.reply(m.chat, "Premium not found.", m);

  let user = global.db.data.users[m.sender];
  if (!user) return conn.reply(m.chat, "You are not registered.", m);

  let balance = user.balance || 100;
  let price = selectedPremium.price * days;
  if (balance < price) return conn.reply(m.chat, "Insufficient Balance.", m);
 
  user.premium = true;
  user.premiumDate = Date.now() + days * 24 * 60 * 60 * 1000;
  user.limit += days;
    
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  user.balance -= price;

  conn.reply(m.chat, `You have successfully purchased *${selectedPremium.duration}* Premium.`, m);
};

handler.command = /^prem$/i;
handler.help = ["prem [duration]"];
handler.tags = ["main"];
handler.register = true;

module.exports = handler;
