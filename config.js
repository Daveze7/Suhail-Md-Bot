const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_20_05_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODksXG4gICAgICAgIDUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MixcbiAgICAgICAgMTk0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDgwLFxuICAgICAgICA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTczLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg3LFxuICAgICAgICA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MixcbiAgICAgICAgMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDgzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU4LFxuICAgICAgICA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDczLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDc0LFxuICAgICAgICA5MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICA4OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3LFxuICAgICAgICA5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZks4c2F4T2VHOURneHhMMnBYZmNyei9oSmtWK0NMK05mOVdhZFdlRXJKYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSjVJc0lWYURTT2lQOTl0bkNielZVd1wiLFxuICBcInBob25lSWRcIjogXCJjMzBjNWE2NS1mZmJiLTRkMzYtYmExNy01MjBiZjM1MmQ5ZjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAyMDEsXG4gICAgICAxMDUsXG4gICAgICAxMzAsXG4gICAgICAxMTEsXG4gICAgICAxNzEsXG4gICAgICA3MixcbiAgICAgIDE0MSxcbiAgICAgIDIyOSxcbiAgICAgIDEyMSxcbiAgICAgIDUxLFxuICAgICAgNDQsXG4gICAgICAxMjAsXG4gICAgICAxOTgsXG4gICAgICAxNDQsXG4gICAgICA4MSxcbiAgICAgIDIxOCxcbiAgICAgIDIyLFxuICAgICAgNzcsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICAxNzAsXG4gICAgICA0MCxcbiAgICAgIDE5NixcbiAgICAgIDEwOSxcbiAgICAgIDk2LFxuICAgICAgNTEsXG4gICAgICAyMDAsXG4gICAgICAxNDQsXG4gICAgICA5NCxcbiAgICAgIDE1MyxcbiAgICAgIDI3LFxuICAgICAgMTUyLFxuICAgICAgMjI4LFxuICAgICAgNDQsXG4gICAgICAyMzksXG4gICAgICAxMjQsXG4gICAgICAyMTksXG4gICAgICAyMzQsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRDIxMUNUVFBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzU5Njc1NjU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI4ODEwODY3NTE1NDcyOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmZQOVg4UTVMakF1QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrMVN3NmZ6VlJVVDVaV1JaR3ZuckJJc3Jnd1YydW9BQU16dzhtVUNZcldrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFLWVJTZjNHcFhyWGFNUFhQTm1ZeWxXK3pwcC9IbEdUbk01Q3V4V3RGTG5NNlBKdkdoSndSSGJXdmFKaElxZ3MydEowWkk2V3FWR1Z3WVp1WVo0VUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlXenRnb2VxK2JNNVlnUWg3ZEZFV0FDZmNNTEQrYjF6K2ZZVHdKaG9KajJRRTJZSCtka3VqWURkWllibmJacWpPZkJBZkE1VStrdS9sRERlQllnSUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzU5Njc1NjU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5MTA5MDk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkl2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKSXYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQT0dFa1RadHk0N2tIaW5JSko1Z0lPRmh5b09BTmc5a0N3OUNtdTExYTUwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2ODI2NTM2NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5MTA5MTExMzgzXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
