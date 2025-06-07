


global.owner = [
  "6283150958207", //harus dimulai dengan kode negara
  ""  //no kedua kalo ada 🗿
]


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
