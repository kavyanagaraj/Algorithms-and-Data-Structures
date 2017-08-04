//Coding challenge
//Input : ["dog", "god", "cat", "act", "money"]
//Output : {dog : 2, cat: 2, money: 1}

function isAnagram (str1, dictAna) {    
    for(key in dictAna){
        if (str1.length !== key.length) {
            continue;
        }        
        var sortStr1 = str1.split('').sort().join('');
        var sortStr2 = key.split('').sort().join('');
        if(sortStr1 === sortStr2){
            return key;
        }
    }
    return false;
}

function anagramCounter(arr){
    var output = {}
    for(var i = 0; i < arr.length; i++){
        var isAna = isAnagram(arr[i], output);
        if(!isAna){
            output[arr[i]] = 1;
        }
        else{
            output[isAna] += 1;
        }
    }
    return output;
}

var anagramArray = ["dog", "god", "tac", "cat", "act", "money"]
var anaCounter = anagramCounter(anagramArray);
console.log(anaCounter);
