var hashIdentifier = require('./hash-identifier.js');
var packageJSON = require('./package.json');

var version = packageJSON.version;

init();

function drawLogo() {
    console.log(`###########################################################################`);
    console.log(`#     __  __                     __           ______    _____             #`);
    console.log(`#    /\\ \\/\\ \\                   /\\ \\         /\\__  _\\  /\\  _ \`\\           #`);
    console.log(`#    \\ \\ \\_\\ \\     __      ____ \\ \\ \\___     \\/_/\\ \\/  \\ \\ \\/\\ \\          #`);
    console.log(`#     \\ \\  _  \\  /'__\`\\   / \`__\\ \\ \\  _ \`\\      \\ \\ \\   \\ \\ \\ \\ \\         #`);
    console.log(`#      \\ \\ \\ \\ \\/\\ \\_\\ \\_/\\__\` \`\\ \\ \\ \\ \\ \\      \\_\\ \\__ \\ \\ \\_\\ \\        #`);
    console.log(`#       \\ \\_\\ \\_\\ \\___ \\_\\/\\____/  \\ \\_\\ \\_\\     /\\_____\\ \\ \\____/        #`);
    console.log(`#        \\/_/\\/_/\\/__/\\/_/\\/___/    \\/_/\\/_/     \\/_____/  \\/___/  v${version} #`);
    console.log('#        {NODE VERSION}                                                   #');
    console.log("#                                                             By Dayen    #");
    console.log("#                                                       Based on Zion3R   #");
    console.log('###########################################################################');
}

function init() {
    drawLogo();
    let hash = process.argv[2];
    if(hash != null) {
        console.log(`HASH: ${hash}\n`);
        hashIdentifier.recognize(hash);
    }
}
 
