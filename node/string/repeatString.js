//this could use a redo

const repeatString = (s, n) => {
    //Calc num of A in baseString
    let dict = {};
    for (let letter in s){
        if (!(s[letter] in dict)){
            dict[s[letter]] = 1;
        } else {
            dict[s[letter]] += 1;
        }
    }
    console.log(dict['a'])
    if (!('a' in dict)) return 0;
    //Figure out numRepeats
    let numRepeats = Math.floor(n / s.length);
    let remainder = n - (s.length * numRepeats);
    console.log(numRepeats, remainder)
    if (remainder === 0){
        return dict['a'] * numRepeats
    } else {
        //Repeats don't go evenly, so there's remainder
        let remainderString = s.substring(0, remainder);
        let subDict = {};
        for (let letter in remainderString){
            if (!(remainderString[letter] in subDict)){
                subDict[remainderString[letter]] = 1;
            } else {
                subDict[remainderString[letter]] += 1;
            }
        }
        if (!('a' in subDict)) subDict['a'] = 0;
        return dict['a'] * numRepeats + subDict['a']
    }  
}

console.log(repeatString('bab', 725261545450)) //241753848483