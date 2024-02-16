let str = prompt("Enter a word or a line to capitalize the first lettter.");
let wordsBreak = str.split(" ")

let result = [];

for (let i = 0; i < wordsBreak.length; i++) {

    let firstLetter = wordsBreak[i].slice(0, 1).toUpperCase();
    let afterFirst = wordsBreak[i].slice(1).toLowerCase();

    result.push(firstLetter + afterFirst)

}



console.log(result.join(" "));