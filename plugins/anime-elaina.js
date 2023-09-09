let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	let url = 'https://api.zahwazein.xyz/randomanime/v2/elaina?apikey=zenzkey_ab72cdd5af82'
		conn.sendFile(m.chat, url, null, 'Random elaina', m)
		}
		handler.command = /^(elaina)$/i
		handler.tags = ['anime']
		handler.help = ['elaina']
		handler.limit = true
		module.exports = handler
