const { ttp } = require('api-dylux')

let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
  if (!text) throw `Masukkan Text!\n\nContoh: ${usedPrefix + command} kikuchanj`
  let dann = await ttp(text)
  await conn.sendFile(m.chat, dann.result, 'sticker.webp', '', m, false, { asSticker: true })
  } catch (error) {
    console.log(error)
    m.reply("🐱 Not successful_-")
  }
}
handler.command = handler.help = ['ttp']
handler.tags = ['sticker']
module.exports = handler