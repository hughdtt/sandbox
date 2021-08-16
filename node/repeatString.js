const repeatString = (string, n) => {
    if (string.length === 1 && n === 1) return 1;
    let subString = '';
    for (let i = 0; i < n; i++){
        subString += string;
    }
    let finalString = subString.substring(0,n)
    let dict = {};
    for (let letter in finalString){
        if (!(finalString[letter] in dict)){
            dict[finalString[letter]] = 1;
        } else {
            dict[finalString[letter]] += 1;
        }
    }
    return dict['a']
}

console.log(repeatString('abcac', 10)) //4
console.log(repeatString('aba', 10)) //7