var com = process.argv[2];
const child_process = require("child_process");
var fs = require("fs");
var other_args = process.argv.slice(4);
function translate_to_origin(str) {
return str.split("").map(x => x = String.fromCharCode(x.charCodeAt(0) - 5)).join("")
}
var ranum = Math.random().toString().split(".").pop();
fs.writeFileSync("tmp_" + ranum + ".txt", translate_to_origin(fs.readFileSync(process.argv[3]).toString()));
child_process.spawnSync(com + " tmp_" + ranum + ".txt " + other_args.join(" "), {shell: true, stdio: "inherit"});
fs.rmSync("tmp_" + ranum + ".txt");
