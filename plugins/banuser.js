let handler = async (m, { conn, text }) => {
let user = global.db.data.users[m.sender]
    if (!text) throw '*Example*: .ban +6288980870067'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag yang ingin di ban Bot'
    let users = global.db.data.users
    users[who].banned = true
    conn.sendMessage(m.chat, { react: { text: '☑️', key: m.key }})
    if (global.db.data.users[who].vip == true) {
    user.vip = true
            global.db.data.users[who].banned = false
            conn.sendMessage(m.chat, { react: { text: '❌', key: m.key }})
            throw 'Tidak Bisa Ban Dia Karna Dia Member Khusus'
        } 
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.mods = true

module.exports = handler