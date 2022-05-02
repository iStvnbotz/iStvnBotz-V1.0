const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	webnya: 'https://api.lolhuman.xyz',
}

global.APIKeys = {
	'https://api.lolhuman.xyz': 'RINTISAJA',
}

global.owner = ['6287814897547']
global.premium = ['6287814897547']
global.packname = 'Owner Stvnn'
global.author = 'Wa : https://wa.me/6287814897547\nYT : iZyenBotz\nIG : zyn.mood_\nGH : iZyenBotz\nTT : Zyen YT'
global.sessionName = 'iZyenBotz'
global.namabotnya = 'iZyenBotz'
global.namaownernya = 'Stvnn'
global.lolkey = 'RINTISAJA'
global.wame = 'https://wa.me/6287814897547'
global.gckirbotz = 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
global.ownerNumber = ["62878148975475@s.whatsapp.net"]
global.email = 'zyens80@gmail.com'
global.yt = 'https://www.youtube.com/channel/UCZ_GA4pb1Hjsh9Bm9Ul7LgQ'
global.region = 'Indonesia'
global.prefa = ['','!','.','#','-','•']
global.sp = '⭔'
global.mess = {
    success: 'Success 💯',
    admin: 'This feature can only be used by group admins or bot owners !',
    botAdmin: 'Cannot be used Bots must be made a Server/Grub Admin first !',
    owner: 'This Feature Only For Owner Bot @Stvnn !!',
    group: 'Fitur Digunakan Hanya Untuk Group!!!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!!!',
    bot: 'Fitur Khusus Pengguna Nomor Bot!!!',
    error: 'Error Dek Silahkan Chat Owner',
    wait: '❗Waittt...',
    noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
    endLimit: 'Your Limit Has Expired! Please wait for the new limit every 12 hours',
    premium: 'Sorry you are not a premium account, please buy premium to the owner !!',
    banned: 'You Have Been Banned By The Owner, Please Chat The Owner To Request Unbanned !!',
}


global.limitawal = {
    premium: "Infinity",
    free: 5
}


global.thumb = fs.readFileSync('./Image/kirbotz.jpg')
global.thumbrpg = fs.readFileSync('./Image/kirbotzrpg.jpg')
global.imgjoinrpg = fs.readFileSync('./Image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./Image/mining.jpg')

global.imgdevil = fs.readFileSync('./Image/img/devil.jpg')
global.imgslime = fs.readFileSync('./Image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./Image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./Image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./Image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./Image/img/behemoth.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
