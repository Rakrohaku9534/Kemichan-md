let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw `Example: ${usedPrefix}${command} namaku|kemii|salam|kenal|Sazumi|Kemii`
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/phcomment?apikey=${global.lolkey}&img=https://telegra.ph/file/87a3c16ba482cb65d31c3.jpg&text=${response[0]}&username=${response[1]}`
  conn.sendFile(m.chat, res, 'phcomments.jpg', `Done`, m, false)
}
handler.help = ['phcomments'].map(v => v + ' <text>|<text>')
handler.tags = ['maker']
handler.command = /^(phcomments)$/i
handler.register = true
handler.limit = true

module.exports = handler