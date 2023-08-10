let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐫𝐚𝐯𝐞𝐧𝐟𝐞𝐦.𝐠𝐠: ${pesan}`
let teks = `𝐃𝐞𝐬𝐩𝐢𝐞𝐫𝐭𝐞𝐧 𝐏𝐥𝐚𝐧𝐭𝐚𝐬 𝐝𝐞𝐥 𝐑𝐚𝐯𝐞𝐧 \n\n❏ ${oi}\n❏ 🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:: \n`
for (let mem of participants) {
teks += `💛 @${mem.id.split('@')[0]}\n`}
teks += `🐾𝐑𝐚𝐯𝐞𝐧 𝐛𝐨𝐭`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
