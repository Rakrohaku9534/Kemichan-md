let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw `Example: ${usedPrefix}${command} Kemii|99`
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/ephoto2/juventusshirt?apikey=${global.lolkey}&text1=${response[0]}&text2=${response[1]}
`
  conn.sendFile(m.chat, res, 'juventusshirt.jpg', `Done`, m, false)
}
handler.help = ['juventusshirt'].map(v => v + ' <text>|<text>')
handler.tags = ['maker']
handler.command = /^(juventusshirt)$/i
handler.register = true
handler.limit = true

module.exports = handler