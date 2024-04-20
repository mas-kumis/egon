// Read evaluate print loop

const repl = require("repl")
const local = repl.start("The node console start")
local.on('exit',()=>{
    console.log("exiting REPL")
    process.exit()
})