"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
function sha256(content) {
    return (0, crypto_1.createHash)('sha256').update(content).digest('hex');
}
function main() {
    var inputString = "\n        harkirat => Raman | Rs 100\n        Ram => Ankit | Rs 10\n        Solana\n    ";
    var hash = "";
    var i = 0;
    while (!(hash.startsWith('0000'))) {
        // inputString
        hash = sha256(inputString + hash);
        i++;
    }
    console.log(hash, i);
}
main();
