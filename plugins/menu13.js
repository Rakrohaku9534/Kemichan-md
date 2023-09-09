let fetch = require('node-fetch')
let moment = require('moment-timezone')
let fs = require('fs')
Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
let handler = async (m, { conn, usedPrefix, command, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let user = global.db.data.users[who];
let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
let uptime = clockString(_uptime)
let version = require('../package.json').version
let d = new Date(new Date + 3600000) 
   let locale = 'id' 
let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
let date = new Date().toLocaleDateString('en-US', {timeZone: 'Asia/Jakarta'})
let time = new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Jakarta', hour: 'numeric', minute: 'numeric', hour12: true})
let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/65c43c76b126a2e1a8409.png");
  let limit = user.premium ? '∞' : user.limit;
  let balance = user.money > 9999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.money;
  let level = user.level > 9999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.level;
  let status = user.owner ? 'Owner' : user.premium ? 'Premium' : 'Free User';
  let age = user.age > 4000 ? 'Unknown' : user.age;
  let exp = user.exp > 999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.exp;
  let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "Not Found";
  let pp = await (await fetch(ppUrl)).buffer();
  let name = await conn.getName(m.sender)
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let ucpn = `${ucapan()}`
    readmore: readMore
  let menyu = `
乂  *Y O U R - I N F O R M A T I O N*

◦ Name : ${name}
◦ Age : ${age}
◦ Limit : ${limit}
◦ Balance : ${balance}
◦ Exp : ${exp}
◦ Level : ${level}
◦ Status : ${status}
◦ Expired : ${premiumExpired}
◦ Date : ${week}, ${date}
◦ Time : ${time}

乂  *TOOLS - MENU*

◦ .addvn
◦ .amongus
◦ .anonfiles <media> <nama file>
◦ .🗿 <nomer/jumlah>
◦ .buggc
◦ .cekapikey
◦ .checkapikey
◦ .codstalk
◦ .aidraw
◦ .del
◦ .delete
◦ .disappearing
◦ .font <text>
◦ .styletext <text>
◦ .cekaxis <auth>
◦ .infogempa
◦ .gempa
◦ .gitclone <url>
◦ .stalkff
◦ .imageai
◦ .enhancer
◦ .hdr
◦ .colorize
◦ .hd
◦ .botspec
◦ .jadilokasi
◦ .kalkulator <soal>
◦ .listbuggc <link>
◦ .listvn
◦ .mlstalk
◦ .mycontact
◦ .npmsearch
◦ .encrypt
◦ .ocr
◦ .totext
◦ .ai <text>
◦ .payment
◦ .pembayaran
◦ .playstore
◦ .prompt
◦ .ptv
◦ .qr <teks>
◦ .qrcode <teks>
◦ .gcwa <teks>
◦ .rate
◦ .readmore <teks>|<teks>
◦ .warnain
◦ .recolor
◦ .remini
◦ .nobg
◦ .removebg
◦ .renungan
◦ .resize <width> <height> <reply|caption>
◦ .q
◦ .spamcall <nomor>
◦ .ssweb
◦ .sspc
◦ .status
◦ .statusbot
◦ .emailtemp
◦ .testing
◦ .tinyurl <link>
◦ .sshp
◦ .sshandphone
◦ .sstablet
◦ .speak
◦ .voicevox
◦ .tourl <reply image>
◦ .translate
◦ .tribunnews
◦ .tts <lang> <teks>
◦ .wait <caption|reply>
◦ .seranggc <link>
◦ .svigc <link>
◦ .wastalk
◦ .weather
◦ .whois
◦ .whoislookup
◦ .yts <pencarian>
◦ .ytsearch <pencarian>
◦ .zodiac *2002 02 25*
`
conn.sendPresenceUpdate("recording", m.chat)
  conn.sendMessage(m.chat, {
text: menyu,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `🐰 TOOLS - MENU BY FAHRUL`,
body: '2023 © Fahrul',
thumbnailUrl: ppUrl,
sourceUrl: "https://chat.whatsapp.com/FSbrP6LWWm4A8i8uGdyDTs",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['menutools']
handler.tags = ['main']
handler.customPrefix = /^(menutools|.menutools)$/i
handler.command = new RegExp
handler.register = false;
handler.limit = true;

module.exports = handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Good morning"
  if (time >= 4) {
    res = "Good morning"
  }
  if (time >= 10) {
    res = "Good afternoon"
  }
  if (time >= 15) {
    res = "Good afternoon"
  }
  if (time >= 18) {
    res = "Good night"
  }
  return res
}