import { createHash } from 'crypto';

function sha256(content: string){
    return createHash('sha256').update(content).digest('hex');
}

function main() {
    const inputString = `
        harkirat => Raman | Rs 100
        Ram => Ankit | Rs 10
        Solana
    `;
    let hash = "";
    let i=0;
    while(!(hash.startsWith('0000'))) {
        // inputString
        hash = sha256(inputString + hash);
        i++;
    }
    console.log(hash, i);
}

main()


