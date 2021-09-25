let algorithms={"102020":"ADLER-32", "102040":"CRC-32", "102060":"CRC-32B", "101020":"CRC-16", "101040":"CRC-16-CCITT", "104020":"DES(Unix)", "101060":"FCS-16", "103040":"GHash-32-3", "103020":"GHash-32-5", "115060":"GOST R 34.11-94", "109100":"Haval-160", "109200":"Haval-160(HMAC)", "110040":"Haval-192", "110080":"Haval-192(HMAC)", "114040":"Haval-224", "114080":"Haval-224(HMAC)", "115040":"Haval-256", "115140":"Haval-256(HMAC)", "107080":"Lineage II C4", "106025":"Domain Cached Credentials - MD4(MD4(($pass)).(strtolower($username)))", "102080":"XOR-32", "105060":"MD5(Half)", "105040":"MD5(Middle)", "105020":"MySQL", "107040":"MD5(phpBB3)", "107060":"MD5(Unix)", "107020":"MD5(Wordpress)", "108020":"MD5(APR)", "106160":"Haval-128", "106165":"Haval-128(HMAC)", "106060":"MD2", "106120":"MD2(HMAC)", "106040":"MD4", "106100":"MD4(HMAC)", "106020":"MD5", "106080":"MD5(HMAC)", "106140":"MD5(HMAC(Wordpress))", "106029":"NTLM", "106027":"RAdmin v2.x", "106180":"RipeMD-128", "106185":"RipeMD-128(HMAC)", "106200":"SNEFRU-128", "106205":"SNEFRU-128(HMAC)", "106220":"Tiger-128", "106225":"Tiger-128(HMAC)", "106240":"md5($pass.$salt)", "106260":"md5($salt.'-'.md5($pass))", "106280":"md5($salt.$pass)", "106300":"md5($salt.$pass.$salt)", "106320":"md5($salt.$pass.$username)", "106340":"md5($salt.md5($pass))", "106360":"md5($salt.md5($pass).$salt)", "106380":"md5($salt.md5($pass.$salt))", "106400":"md5($salt.md5($salt.$pass))", "106420":"md5($salt.md5(md5($pass).$salt))", "106440":"md5($username.0.$pass)", "106460":"md5($username.LF.$pass)", "106480":"md5($username.md5($pass).$salt)", "106500":"md5(md5($pass))", "106520":"md5(md5($pass).$salt)", "106540":"md5(md5($pass).md5($salt))", "106560":"md5(md5($salt).$pass)", "106580":"md5(md5($salt).md5($pass))", "106600":"md5(md5($username.$pass).$salt)", "106620":"md5(md5(md5($pass)))", "106640":"md5(md5(md5(md5($pass))))", "106660":"md5(md5(md5(md5(md5($pass)))))", "106680":"md5(sha1($pass))", "106700":"md5(sha1(md5($pass)))", "106720":"md5(sha1(md5(sha1($pass))))", "106740":"md5(strtoupper(md5($pass)))", "109040":"MySQL5 - SHA-1(SHA-1($pass))", "109060":"MySQL 160bit - SHA-1(SHA-1($pass))", "109180":"RipeMD-160(HMAC)", "109120":"RipeMD-160", "109020":"SHA-1", "109140":"SHA-1(HMAC)", "109220":"SHA-1(MaNGOS)", "109240":"SHA-1(MaNGOS2)", "109080":"Tiger-160", "109160":"Tiger-160(HMAC)", "109260":"sha1($pass.$salt)", "109280":"sha1($salt.$pass)", "109300":"sha1($salt.md5($pass))", "109320":"sha1($salt.md5($pass).$salt)", "109340":"sha1($salt.sha1($pass))", "109360":"sha1($salt.sha1($salt.sha1($pass)))", "109380":"sha1($username.$pass)", "109400":"sha1($username.$pass.$salt)", "1094202":"sha1(md5($pass))", "109440":"sha1(md5($pass).$salt)", "109460":"sha1(md5(sha1($pass)))", "109480":"sha1(sha1($pass))", "109500":"sha1(sha1($pass).$salt)", "109520":"sha1(sha1($pass).substr($pass,0,3))", "109540":"sha1(sha1($salt.$pass))", "109560":"sha1(sha1(sha1($pass)))", "109580":"sha1(strtolower($username).$pass)", "110020":"Tiger-192", "110060":"Tiger-192(HMAC)", "112020":"md5($pass.$salt) - Joomla", "113020":"SHA-1(Django)", "114020":"SHA-224", "114060":"SHA-224(HMAC)", "115080":"RipeMD-256", "115160":"RipeMD-256(HMAC)", "115100":"SNEFRU-256", "115180":"SNEFRU-256(HMAC)", "115200":"SHA-256(md5($pass))", "115220":"SHA-256(sha1($pass))", "115020":"SHA-256", "115120":"SHA-256(HMAC)", "116020":"md5($pass.$salt) - Joomla", "116040":"SAM - (LM_hash:NT_hash)", "117020":"SHA-256(Django)", "118020":"RipeMD-320", "118040":"RipeMD-320(HMAC)", "119020":"SHA-384", "119040":"SHA-384(HMAC)", "120020":"SHA-256", "121020":"SHA-384(Django)", "122020":"SHA-512", "122060":"SHA-512(HMAC)", "122040":"Whirlpool", "122080":"Whirlpool(HMAC)"}

let hashResults = [];

function find(position, text) {
    let positions = position.split(":");
    let start = positions[0];
    let end = positions[1];

    return str.slice(start, end) === text;
}
function isDigit(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function isLower(str) {
  return !/[A-Z]/.test(str) && /[a-z]/.test(str);
}
function isAlphanumeric(str) {
    return /^[a-z0-9A-Z]+$/.test(str);
}
function isAlpha(str) {
    return /^[a-zA-Z]+$/.test(str);
}

// checagens

function CRC16(hash) {
    let hs = "4607";
    if(hash.length === hs.length && isAlpha(hash) === false && isAlphanumeric(hash) === true)
    {
        hashResults.push("101020");
    }
}
function CRC16CCITT(hash) {
    let hs = "3d08";
    if (hash.length === hs.length && isDigit(hash)===false && isAlpha(hash)===false && isAlphanumeric(hash)===true)
    {
        hashResults.push("101040");
    }
}
function FCS16(hash) {
    let hs = "0e5b";
    if (hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
        hashResults.push("101060");
    }
}
function CRC32(hash) {
    let hs = 'b33fd057'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("102040")
    }
}
function ADLER32(hash) {
    let hs='0607cb42'
    if (hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
        hashResults.push("102020")
    }
}
function CRC32B(hash) {
    let hs='b764a0d9'
    if (hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("102060")
    }
}
function XOR32(hash) {
    let hs='0000003f'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
        hashResults.push("102080")
    }
}
function GHash323(hash) {
    let hs='80000000'
    if(hash.length === hs.length && isDigit(hash) ===true && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
        hashResults.push("103040")
    }
}
function GHash325(hash) {
    let hs='85318985'
    if(hash.length === hs.length && isDigit(hash) ===true && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
        hashResults.push("103020")
    }
}
function DESUnix(hash) {
    let hs='ZiY8YtDKXJwYQ'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false)
    {
        hashResults.push("104020")
    }
}
function MD5Half(hash) {
    let hs='ae11fd697ec92c7c'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
        hashResults.push("105060")
    }
}
function MD5Middle(hash){
    let hs='7ec92c7c98de3fac'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
        hashResults.push("105040")
    }
}
function MySQL(hash) {
    let hs='63cea4673fd25f46'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
        hashResults.push("105020")
    }
}
function DomainCachedCredentials(hash) {
    let hs='f42005ec1afe77967cbc83dce1b4d714'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
        hashResults.push("106025")
    }
}
function Haval128(hash) {
    let hs='d6e3ec49aa0f138a619f27609022df10'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106160")
    }
}
function Haval128HMAC(hash) {
    let hs='3ce8b0ffd75bc240fc7d967729cd6637'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106165")
    }
}
function MD2(hash) {
    let hs='08bbef4754d98806c373f2cd7d9a43c4'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106060")
    }
}
function MD2HMAC(hash) {
    let hs='4b61b72ead2b0eb0fa3b8a56556a6dca'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106120")
    }
}
function MD4(hash){
    let hs='a2acde400e61410e79dacbdfc3413151'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106040")
    }
}
function MD4HMAC(hash) {
    let hs='6be20b66f2211fe937294c1c95d1cd4f'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106100")
    }
}
function MD5(hash) {
    let hs='ae11fd697ec92c7c98de3fac23aba525'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106020")
    }
}
function MD5HMAC(hash) {
    let hs='d57e43d2c7e397bf788f66541d6fdef9'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106080")
    }
}
function MD5HMACWordpress(hash) {
    let hs='3f47886719268dfa83468630948228f6'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106140")
    }
}
function NTLM(hash) {
    let hs='cc348bace876ea440a28ddaeb9fd3550'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106029")
    }
}
function RAdminv2x(hash) {
    let hs='baea31c728cbf0cd548476aa687add4b'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106027")
    }
}
function RipeMD128(hash) {
    let hs='4985351cd74aff0abc5a75a0c8a54115'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106180")
    }
}
function RipeMD128HMAC(hash) {
    let hs='ae1995b931cf4cbcf1ac6fbf1a83d1d3'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106185")
    }
}
function SNEFRU128(hash) {
    let hs='4fb58702b617ac4f7ca87ec77b93da8a'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106200")
    }
}
function SNEFRU128HMAC(hash){
    let hs='59b2b9dcc7a9a7d089cecf1b83520350'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106205")
    }
}
function Tiger128(hash) {
    let hs='c086184486ec6388ff81ec9f23528727'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106220")
    }
}
function Tiger128HMAC(hash) {
    let hs='c87032009e7c4b2ea27eb6f99723454b'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106225")
    }
}
function md5passsalt(hash) {
    let hs='5634cc3b922578434d6e9342ff5913f7'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106240")
    }
}
function md5saltmd5pass1(hash) {
    let hs='245c5763b95ba42d4b02d44bbcd916f1'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106260")
    }
}
function md5saltpass(hash) {
    let hs='22cc5ce1a1ef747cd3fa06106c148dfa'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106280")
    }
}
function md5saltpasssalt(hash) {
    let hs='469e9cdcaff745460595a7a386c4db0c'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106300")
    }
}
function md5saltpassusername(hash) {
    let hs='9ae20f88189f6e3a62711608ddb6f5fd'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106320")
    }
}
function md5saltmd5pass(hash) {
    let hs='aca2a052962b2564027ee62933d2382f'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106340")
    }
}
function md5saltmd5passsalt1(hash) {
    let hs='de0237dc03a8efdf6552fbe7788b2fdd'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106360")
    }
}
function md5saltmd5passsalt(hash) {
    let hs='5b8b12ca69d3e7b2a3e2308e7bef3e6f'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106380")
    }
}
function md5saltmd5saltpass(hash) {
    let hs='d8f3b3f004d387086aae24326b575b23'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106400")
    }
}
function md5saltmd5md5passsalt(hash) {
    let hs='81f181454e23319779b03d74d062b1a2'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106420")
    }
}
function md5username0pass(hash) {
    let hs='e44a60f8f2106492ae16581c91edb3ba'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106440")
    }
}
function md5usernameLFpass(hash){
    let hs='654741780db415732eaee12b1b909119'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106460")
    }
}
function md5usernamemd5passsalt(hash) {
    let  hs='954ac5505fd1843bbb97d1b2cda0b98f'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106480")
    }
}
function md5md5pass(hash) {
    let hs='a96103d267d024583d5565436e52dfb3'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106500")
    }
}
function md5md5passsalt(hash) {
    let hs='5848c73c2482d3c2c7b6af134ed8dd89'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106520")
    }
}
function md5md5passmd5salt(hash) {
    let hs='8dc71ef37197b2edba02d48c30217b32'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106540")
    }
}
function md5md5saltpass(hash) {
    let hs='9032fabd905e273b9ceb1e124631bd67'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106560")
    }
}
function md5md5saltmd5pass(hash) {
    let hs='8966f37dbb4aca377a71a9d3d09cd1ac'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106580")
    }
}
function md5md5usernamepasssalt(hash) {
    let hs='4319a3befce729b34c3105dbc29d0c40'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106600")
    }
}
function md5md5md5pass(hash) {
    let hs='ea086739755920e732d0f4d8c1b6ad8d'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106620")
    }
}
function md5md5md5md5pass(hash) {
    let hs='02528c1f2ed8ac7d83fe76f3cf1c133f'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106640")
    }
}
function md5md5md5md5md5pass(hash) {
    let hs='4548d2c062933dff53928fd4ae427fc0'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106660")
    }
}
function md5sha1pass(hash) {
    let hs='cb4ebaaedfd536d965c452d9569a6b1e'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106680")
    }
}
function md5sha1md5pass(hash) {
    let hs='099b8a59795e07c334a696a10c0ebce0'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106700")
    }
}
function md5sha1md5sha1pass(hash) {
    let hs='06e4af76833da7cc138d90602ef80070'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106720")
    }
}
function md5strtouppermd5pass(hash) {
    let hs='519de146f1a658ab5e5e2aa9b7d2eec8'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("106740")
    }
}
function LineageIIC4(hash) {
    let hs='0x49a57f66bd3d5ba6abda5579c264a0e4'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true && find("0:2", "0x") === true)
    {
         hashResults.push("107080")
    }
}
function MD5phpBB3(hash) {
    let hs='$H$9kyOtE8CDqMJ44yfn9PFz2E.L2oVzL1'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===false && find("0:2", "$H$") === true)
    {
         hashResults.push("107040")
    }
}
function MD5Unix(hash) {
    let hs='$1$cTuJH0Ju$1J8rI.mJReeMvpKUZbSlY/'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===false && find("0:3", "$1$") === true)
    {
         hashResults.push("107060")
    }
}
function MD5Wordpress(hash) {
    let hs='$P$BiTOhOj3ukMgCci2juN0HRbCdDRqeh.'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===false && find("0:3", "$P$") === true)
    {
         hashResults.push("107020")
    }
}
function MD5APR(hash) {
    let hs='$apr1$qAUKoKlG$3LuCncByN76eLxZAh/Ldr1'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===false && find("0:4", "$apr") === true)
    {
         hashResults.push("108020")
    }
}
function Haval160(hash) {
    let hs='a106e921284dd69dad06192a4411ec32fce83dbb'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109100")
    }
}
function Haval160HMAC(hash) {
    let hs='29206f83edc1d6c3f680ff11276ec20642881243'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109200")
    }
}
function MySQL5(hash) {
    let hs='9bb2fb57063821c762cc009f7584ddae9da431ff'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109040")
    }
}
function MySQL160bit(hash) {
    let hs='*2470c0c06dee42fd1618bb99005adca2ec9d1e19'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===false && find("0:1", "*") === true)
    {
         hashResults.push("109060")
    }
}
function RipeMD160(hash) {
    let hs='dc65552812c66997ea7320ddfb51f5625d74721b'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109120")
    }
}
function RipeMD160HMAC(hash) {
    let hs='ca28af47653b4f21e96c1235984cb50229331359'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109180")
    }
}
function SHA1(hash) {
    let hs='4a1d4dbc1e193ec3ab2e9213876ceb8f4db72333'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109020")
    }
}
function SHA1HMAC(hash) {
    let hs='6f5daac3fee96ba1382a09b1ba326ca73dccf9e7'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109140")
    }
}
function SHA1MaNGOS(hash) {
    let hs='a2c0cdb6d1ebd1b9f85c6e25e0f8732e88f02f96'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109220")
    }
}
function SHA1MaNGOS2(hash) {
    let hs='644a29679136e09d0bd99dfd9e8c5be84108b5fd'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109240")
    }
}
function Tiger160(hash) {
    let hs='c086184486ec6388ff81ec9f235287270429b225'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109080")
    }
}
function Tiger160HMAC(hash) {
    let hs='6603161719da5e56e1866e4f61f79496334e6a10'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109160")
    }
}
function sha1passsalt(hash) {
    let hs='f006a1863663c21c541c8d600355abfeeaadb5e4'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109260")
    }
}
function sha1saltpass(hash) {
    let hs='299c3d65a0dcab1fc38421783d64d0ecf4113448'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109280")
    }
}
function sha1saltmd5pass(hash) {
    let hs='860465ede0625deebb4fbbedcb0db9dc65faec30'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109300")
    }
}
function sha1saltmd5passsalt(hash) {
    let hs='6716d047c98c25a9c2cc54ee6134c73e6315a0ff'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109320")
    }
}
function sha1saltsha1pass(hash) {
    let hs='58714327f9407097c64032a2fd5bff3a260cb85f'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109340")
    }
}
function sha1saltsha1saltsha1pass(hash) {
    let  hs='cc600a2903130c945aa178396910135cc7f93c63'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109360")
    }
}
function sha1usernamepass(hash) {
    let hs='3de3d8093bf04b8eb5f595bc2da3f37358522c9f'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109380")
    }
}
function sha1usernamepasssalt(hash) {
    let hs='00025111b3c4d0ac1635558ce2393f77e94770c5'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109400")
    }
}
function sha1md5pass(hash) {
    let hs='fa960056c0dea57de94776d3759fb555a15cae87'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("1094202")
    }
}
function sha1md5passsalt(hash) {
    let hs='1dad2b71432d83312e61d25aeb627593295bcc9a'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109440")
    }
}
function sha1md5sha1pass(hash) {
    let hs='8bceaeed74c17571c15cdb9494e992db3c263695'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109460")
    }
}
function sha1sha1pass(hash) {
    let hs='3109b810188fcde0900f9907d2ebcaa10277d10e'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109480")
    }
}
function sha1sha1passsalt(hash) {
    let hs='780d43fa11693b61875321b6b54905ee488d7760'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109500")
    }
}
function sha1sha1passsubstrpass03(hash) {
    let hs='5ed6bc680b59c580db4a38df307bd4621759324e'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109520")
    }
}
function sha1sha1saltpass(hash) {
    let hs='70506bac605485b4143ca114cbd4a3580d76a413'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109540")
    }
}
function sha1sha1sha1pass(hash) {
    let hs='3328ee2a3b4bf41805bd6aab8e894a992fa91549'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109560")
    }
}
function sha1strtolowerusernamepass(hash) {
    let hs='79f575543061e158c2da3799f999eb7c95261f07'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("109580")
    }
}
function Haval192(hash) {
    let hs='cd3a90a3bebd3fa6b6797eba5dab8441f16a7dfa96c6e641'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("110040")
    }
}
function Haval192HMAC(hash) {
    let hs='39b4d8ecf70534e2fd86bb04a877d01dbf9387e640366029'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("110080")
    }
}
function Tiger192(hash) {
    let hs='c086184486ec6388ff81ec9f235287270429b2253b248a70'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("110020")
    }
}
function Tiger192HMAC(hash) {
    let hs='8e914bb64353d4d29ab680e693272d0bd38023afa3943a41'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("110060")
    }
}
function MD5passsaltjoomla1(hash) {
    let hs='35d1c0d69a2df62be2df13b087343dc9:BeKMviAfcXeTPTlX'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===false && find("32:33",":") === true)
    {
         hashResults.push("112020")
    }
}
function SHA1Django(hash) {
    let hs='sha1$Zion3R$299c3d65a0dcab1fc38421783d64d0ecf4113448'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===false && find("0:5","sha1$") === true)
    {
         hashResults.push("113020")
    }
}
function Haval224(hash) {
    let hs='f65d3c0ef6c56f4c74ea884815414c24dbf0195635b550f47eac651a'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("114040")
    }
}
function Haval224HMAC(hash) {
    let hs='f10de2518a9f7aed5cf09b455112114d18487f0c894e349c3c76a681'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("114080")
    }
}
function SHA224(hash) {
    let hs='e301f414993d5ec2bd1d780688d37fe41512f8b57f6923d054ef8e59'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("114020")
    }
}
function SHA224HMAC(hash) {
    let hs='c15ff86a859892b5e95cdfd50af17d05268824a6c9caaa54e4bf1514'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("114060")
    }
}
function SHA256(hash) {
    let hs='2c740d20dab7f14ec30510a11f8fd78b82bc3a711abe8a993acdb323e78e6d5e'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("115020")
    }
}
function SHA256HMAC(hash) {
    let hs='d3dd251b7668b8b6c12e639c681e88f2c9b81105ef41caccb25fcde7673a1132'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("115120")
    }
}
function Haval256(hash) {
    let hs='7169ecae19a5cd729f6e9574228b8b3c91699175324e6222dec569d4281d4a4a'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("115040")
    }
}
function Haval256HMAC(hash) {
    let hs='6aa856a2cfd349fb4ee781749d2d92a1ba2d38866e337a4a1db907654d4d4d7a'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("115140")
    }
}
function GOSTR341194(hash) {
    let hs='ab709d384cce5fda0793becd3da0cb6a926c86a8f3460efb471adddee1c63793'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("115060")
    }
}
function RipeMD256(hash) {
    let hs='5fcbe06df20ce8ee16e92542e591bdea706fbdc2442aecbf42c223f4461a12af'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("115080")
    }
}
function RipeMD256HMAC(hash) {
    let hs='43227322be1b8d743e004c628e0042184f1288f27c13155412f08beeee0e54bf'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("115160")
    }
}
function SNEFRU256(hash) {
    let hs='3a654de48e8d6b669258b2d33fe6fb179356083eed6ff67e27c5ebfa4d9732bb'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("115100")
    }
}
function SNEFRU256HMAC(hash) {
    let hs='4e9418436e301a488f675c9508a2d518d8f8f99e966136f2dd7e308b194d74f9'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("115180")
    }
}
function SHA256md5pass(hash) {
    let hs='b419557099cfa18a86d1d693e2b3b3e979e7a5aba361d9c4ec585a1a70c7bde4'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("115200")
    }
}
function SHA256sha1pass(hash) {
    let hs='afbed6e0c79338dbfe0000efe6b8e74e3b7121fe73c383ae22f5b505cb39c886'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("115220")
    }
}
function MD5passsaltjoomla2(hash) {
    let hs='fb33e01e4f8787dc8beb93dac4107209:fxJUXVjYRafVauT77Cze8XwFrWaeAYB2'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===false && find("32:33",":") === true)
    {
         hashResults.push("116020")
    }
}
function SAM(hash) {
    let hs='4318B176C3D8E3DEAAD3B435B51404EE:B7C899154197E8A2A33121D76A240AB5'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===false && isLower(hash) === false && find("32:33",":") === true)
    {
         hashResults.push("116040")
    }
}
function SHA256Django(hash) {
    let hs='sha256$Zion3R$9e1a08aa28a22dfff722fad7517bae68a55444bb5e2f909d340767cec9acf2c3'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===false && find("0:6","sha256") === true)
    {
         hashResults.push("117020")
    }
}
function RipeMD320(hash) {
    let hs='b4f7c8993a389eac4f421b9b3b2bfb3a241d05949324a8dab1286069a18de69aaf5ecc3c2009d8ef'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("118020")
    }
}
function RipeMD320HMAC(hash) {
    let hs='244516688f8ad7dd625836c0d0bfc3a888854f7c0161f01de81351f61e98807dcd55b39ffe5d7a78'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("118040")
    }
}
function SHA384(hash) {
    let hs='3b21c44f8d830fa55ee9328a7713c6aad548fe6d7a4a438723a0da67c48c485220081a2fbc3e8c17fd9bd65f8d4b4e6b'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("119020")
    }
}
function SHA384HMAC(hash) {
    let hs='bef0dd791e814d28b4115eb6924a10beb53da47d463171fe8e63f68207521a4171219bb91d0580bca37b0f96fddeeb8b'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("119040")
    }
}
function SHA256s(hash) {
    let hs='$6$g4TpUQzk$OmsZBJFwvy6MwZckPvVYfDnwsgktm2CckOlNJGy9HNwHSuHFvywGIuwkJ6Bjn3kKbB6zoyEjIYNMpHWBNxJ6g.'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===false && find("0:3","$6$") === true)
    {
         hashResults.push("120020")
    }
}
function SHA384Django(hash) {
    let hs='sha384$Zion3R$88cfd5bc332a4af9f09aa33a1593f24eddc01de00b84395765193c3887f4deac46dc723ac14ddeb4d3a9b958816b7bba'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===false && find("0:6","sha384") === true)
    {
         hashResults.push("121020")
    }
}
function SHA512(hash) {
    let hs='ea8e6f0935b34e2e6573b89c0856c81b831ef2cadfdee9f44eb9aa0955155ba5e8dd97f85c73f030666846773c91404fb0e12fb38936c56f8cf38a33ac89a24e'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("122020")
    }
}
function SHA512HMAC(hash) {
    let hs='dd0ada8693250b31d9f44f3ec2d4a106003a6ce67eaa92e384b356d1b4ef6d66a818d47c1f3a2c6e8a9a9b9bdbd28d485e06161ccd0f528c8bbb5541c3fef36f'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("122060")
    }
}
function Whirlpool(hash) {
    let hs='76df96157e632410998ad7f823d82930f79a96578acc8ac5ce1bfc34346cf64b4610aefa8a549da3f0c1da36dad314927cebf8ca6f3fcd0649d363c5a370dddb'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("122040")
    }
}
function WhirlpoolHMAC(hash) {
    let hs='77996016cf6111e97d6ad31484bab1bf7de7b7ee64aebbc243e650a75a2f9256cef104e504d3cf29405888fca5a231fcac85d36cd614b1d52fce850b53ddf7f9'
    if(hash.length === hs.length && isDigit(hash) ===false && isAlpha(hash)==false && isAlphanumeric(hash)===true)
    {
         hashResults.push("122080")
    }
}

function recognize(h) {
    ADLER32(h);
    CRC16(h);
    CRC16CCITT(h);
    CRC32(h);
    CRC32B(h);
    DESUnix(h);
    DomainCachedCredentials(h);
    FCS16(h);
    GHash323(h);
    GHash325(h);
    GOSTR341194(h);
    Haval128(h);
    Haval128HMAC(h);
    Haval160(h);
    Haval160HMAC(h);
    Haval192(h);
    Haval192HMAC(h);
    Haval224(h);
    Haval224HMAC(h);
    Haval256(h);
    Haval256HMAC(h);
    LineageIIC4(h);
    MD2(h);
    MD2HMAC(h);
    MD4(h);
    MD4HMAC(h);
    MD5(h);
    MD5APR(h);
    MD5HMAC(h);
    MD5HMACWordpress(h);
    MD5phpBB3(h);
    MD5Unix(h);
    MD5Wordpress(h);
    MD5Half(h);
    MD5Middle(h);
    MD5passsaltjoomla1(h);
    MD5passsaltjoomla2(h);
    MySQL(h);
    MySQL5(h);
    MySQL160bit(h);
    NTLM(h);
    RAdminv2x(h);
    RipeMD128(h);
    RipeMD128HMAC(h);
    RipeMD160(h);
    RipeMD160HMAC(h);
    RipeMD256(h);
    RipeMD256HMAC(h);
    RipeMD320(h);
    RipeMD320HMAC(h);
    SAM(h);
    SHA1(h);
    SHA1Django(h);
    SHA1HMAC(h);
    SHA1MaNGOS(h);
    SHA1MaNGOS2(h);
    SHA224(h);
    SHA224HMAC(h);
    SHA256(h);
    SHA256s(h);
    SHA256Django(h);
    SHA256HMAC(h);
    SHA256md5pass(h);
    SHA256sha1pass(h);
    SHA384(h);
    SHA384Django(h);
    SHA384HMAC(h);
    SHA512(h);
    SHA512HMAC(h);
    SNEFRU128(h);
    SNEFRU128HMAC(h);
    SNEFRU256(h);
    SNEFRU256HMAC(h);
    Tiger128(h);
    Tiger128HMAC(h);
    Tiger160(h);
    Tiger160HMAC(h);
    Tiger192(h);
    Tiger192HMAC(h);
    Whirlpool(h);
    WhirlpoolHMAC(h);
    XOR32(h);
    md5passsalt(h);
    md5saltmd5pass1(h);
    md5saltpass(h);
    md5saltpasssalt(h);
    md5saltpassusername(h);
    md5saltmd5pass(h);
    md5saltmd5passsalt1(h);
    md5saltmd5passsalt(h);
    md5saltmd5saltpass(h);
    md5saltmd5md5passsalt(h);
    md5username0pass(h);
    md5usernameLFpass(h);
    md5usernamemd5passsalt(h);
    md5md5pass(h);
    md5md5passsalt(h);
    md5md5passmd5salt(h);
    md5md5saltpass(h);
    md5md5saltmd5pass(h);
    md5md5usernamepasssalt(h);
    md5md5md5pass(h);
    md5md5md5md5pass(h);
    md5md5md5md5md5pass(h);
    md5sha1pass(h);
    md5sha1md5pass(h);
    md5sha1md5sha1pass(h);
    md5strtouppermd5pass(h);
    sha1passsalt(h);
    sha1saltpass(h);
    sha1saltmd5pass(h);
    sha1saltmd5passsalt(h);
    sha1saltsha1pass(h);
    sha1saltsha1saltsha1pass(h);
    sha1usernamepass(h);
    sha1usernamepasssalt(h);
    sha1md5pass(h);
    sha1md5passsalt(h);
    sha1md5sha1pass(h);
    sha1sha1pass(h);
    sha1sha1passsalt(h);
    sha1sha1passsubstrpass03(h);
    sha1sha1saltpass(h);
    sha1sha1sha1pass(h);
    sha1strtolowerusernamepass(h)

    hashResults.sort();
    if(hashResults.length === 0) {
        console.log("[+] Hash Not found!")
    }
    else
    {
        console.log("Possible Hashs: ");
        console.log("[+] " + algorithms[hashResults[0]]);
        console.log("[+] " + algorithms[hashResults[1]]);

        console.log("\nLeast Possible Hashs:")
        for(let i = 2; i < hashResults.length - 2; i++) {
            console.log("[+] " + algorithms[hashResults[i]]);
        }
    }

}
recognize("d3f965211bb7cd320a3b4b6cc709cd7dae371ac5");