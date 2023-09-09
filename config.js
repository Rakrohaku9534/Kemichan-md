let fs = require('fs') 
let chalk = require('chalk')
let moment = require('moment-timezone')

// Waktu
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh}:${wibm}:${wibs}`

// Hari Tanggal
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

// Owner
global.owner = [
  ['15735703567'],
  ['15735703567'],
  ['15735703567', 'Fahrul', 'rakrohaku@gmail.com', true]
] // Put your number here
global.mods = ['15735703567'] // Moderator
global.prems = ['15735703567'] // Premium
global.rose = ''; //Api Rose
global.lolkey = '';// Api Lolhuman
global.APIs = {
    // API Prefix
    // name: 'https://website'
    xteam: 'https://api.xteam.xyz',
    lol: 'https://api.lolhuman.xyz',
    males: 'https://malesin.xyz',
    zein: 'https://api.zahwazein.xyz',
    rose: 'https://api.itsrose.life',
    xzn: 'https://xzn.wtf',
    saipul: 'https://saipulanuar.cf'
}
global.APIKeys = {
    // APIKey Here
    // 'https://website': 'apikey'
    'https://api.zahwazein.xyz': 'zenzkey_8378505152',
    'https://api.xteam.xyz': 'cristian9407',
    'https://api.lolhuman.xyz': '9ec9ae4576890debb36e2db0',
    'https://api.itsrose.life': '',
    'https://xzn.wtf' : 'fahrul'
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'F.A BOTZ MD'
  var sticker_author = '6285712408309'
} else {
  var sticker_name = 'F.A BOTZ MD'
  var sticker_author = '6285712408309'
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Document
global.minety = pickRandom(['application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'])

// Database
global.version = '1.1.8'
global.sessionName = 'Kemii'
global.gcbot = 'https://chat.whatsapp.com/FSbrP6LWWm4A8i8uGdyDTs'
global.instagram = 'https://instagram.com/fahrul_mt'
global.namebot = 'F.A BOTZ MD'
global.thumb = 'https://telegra.ph/file/dc3ed7b279d775b9f356f.jpg'
global.thumbnail = 'https://telegra.ph/file/dc3ed7b279d775b9f356f.jpg'
global.myfile = fs.readFileSync(`./media/xfile.pdf`)
global.thumb2 = fs.readFileSync('./media/thumbnail.mp4')
global.qris = 'https://telegra.ph/file/db0e40e4880243829ffc4.jpg'
global.creator = "6285786539008@s.whatsapp.net"
global.nomorown = '6285786539008'

// Sosial Media
global.sig = 'https://instagram.com/fahrul_mt'
global.syt = '-'
global.sgh = '-'
global.sgc = 'https://chat.whatsapp.com/FSbrP6LWWm4A8i8uGdyDTs'
global.swa = 'https://wa.me/6285786539008'
global.swb = '-' // Link Discord
global.snh = 'https://nhentai.net/g/365296/' // Link nhentai

// Pembayaran
global.pdana = '0857-8653-9008'
global.povo = '~Not Found~'
global.pgopay = '0857-8653-9008'
global.pulsa = '0857-8653-9008'
global.pulsa2 = '0857-1240-8309'
global.psaweria = '~Not Found~'
global.ptrakteer = '~Not Found~'
global.psbuzz = '~Not Found~'

// Fake Size
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

global.useMulti = false

// Watermark
global.packname = 'F.A BOTZ MD'
global.author = '6285712408309'
global.wm = '© fahrul'
global.wm2 = '© fahrul'
global.bottime = `Time: ${wktuwib}`
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`
global.titlebot = `${global.wm}`
global.danied = 'A K S E S  K A M U  D I  T O L A K!!'
global.packname = 'F.A BOTZ MD'
global.author = '6285712408309'
global.nameown = 'Fahrul'
global.wait = 'Wait a moment... '

// Tampilan
global.htki =  '⬣───「' // Hiasan kiri
global.htka = '」───⬣' // Hiasan kanan
global.htjava = '❃' // Hiasan
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''

global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v =>vv [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})