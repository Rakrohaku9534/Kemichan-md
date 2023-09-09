let handler = async (m, { conn, text, usedPrefix: _p }) => {
  let name = await conn.getName(m.sender)
  let flaaa2 =[
'https://telegra.ph/file/a13b02571766db3e0f51d.jpg',
'https://telegra.ph/file/e184d39ee979afc9909a5.jpg',
'https://telegra.ph/file/d97f5509e5ed9a173fafc.jpg']
  let user = global.db.data.users[m.sender]
  let message = `
Hello *@${m.sender.split("@")[0]}* Kikuchanj is online, is there anything I can help you with??`
conn.sendPresenceUpdate("recording", m.chat)
conn.sendMessage(m.chat, {
    video: thumb2,
    mimetype: 'video/mp4',
    fileLength: 999999999999,
    caption: message,
    gifPlayback: true,
    gifAttribution: 1,
    contextInfo: {
      forwardingScore: 2023, 
      isForwarded: true,
      mentionedJid: [m.sender],
    }
  }, {
    quoted: null
  })
}

handler.customPrefix = /^(pp|p)$/i
handler.command = new RegExp

module.exports = handler