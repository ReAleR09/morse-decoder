const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const SPACE = '**********';
const DOUBLES = {
    '00': '',
    '10': '.',
    '11': '-' 
};

function decodeBitsIntoLetter(raw) {
    if(raw === SPACE) return ' ';

    const morseLetter = raw
        .match(/\d{2}/g)                    // split into 'bit' doubles
        .map((double) => DOUBLES[double])   // convert 'doubles' into morse signs
        .join('');                          // concatenate into morse word
    return MORSE_TABLE[morseLetter];        // morse word into human language letter
}

function decode(expr) {
    // splitting into chunks of ten 'bits'
    const rawSymbols = expr.match(/.{10}/g);

    // every 10 bits of input got converted into real letter, then concatenated to the output 
    return rawSymbols.reduce((prev, curr) => prev + decodeBitsIntoLetter(curr), '');

}

module.exports = {
    decode
}