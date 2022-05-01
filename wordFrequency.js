const wordFrequency = text => {
    let words = text.split(/[ \r?\n\.,]+/);    
    let table = new Map();
    for (const word of words) {
        table.set(word, (table.get(word) + 1 || 1))
    }   
    return table; 
}

const findTheMostUsed = table => {
    let result;
    let mostUsed = -1;
    for (let key of table.keys()) {
        if (table.get(key) > mostUsed) {
            mostUsed = table.get(key);
            result = key;
        }
    }
    return result;
}

const wordFreq = text => {
    let mostUsedWord = null, biggestFrequency = 0;
    let words = text.split(/[ \t\r?\n\.,;:]+/);
    let table = words.reduce((m, word) => m.set(word, (m.get(word) + 1 || 1)), new Map());
    
    table.forEach((frequency, word) => {
        if (frequency > biggestFrequency) {
            mostUsedWord = word;
            biggestFrequency = frequency;
        }
    });
    
    return mostUsedWord;
}


let text = 'abobus space, coma. dot... semilicon\n asdas: abobus; space\t abobus,';

//console.log(findTheMostUsed(wordFrequency(text)));
//console.log('\n');
console.log(wordFreq(text));
console.log(wordFreq(''));
console.log(wordFreq('simple'));
console.log(wordFreq('bla bla foo foo'));