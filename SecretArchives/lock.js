function secretArchivesLock(lock, actions) {
    for(var i = 0; i < actions.length; i++){
        var action = actions[i];
        lock = retLock(lock, action);
    }
    return lock;
}

function retLock(lock, action){
    var dimension = lock[0].length;
    var nullStr = Array(dimension+1).join(".");
    switch(action) {
    case "R":
        for (var index = 0; index < dimension; index++){
            if (lock[index] === nullStr){
                continue;
            }    
            var newStr = "";
            var countDot = 0;
            for (var indexJ = 0; indexJ < dimension; indexJ++){
                if (lock[index][indexJ] != "."){
                    newStr += lock[index][indexJ];    
                } else{
                    countDot++;
                }
            }    
            lock[index] = Array(countDot+1).join(".") + newStr;      
        }   
        break;
    case "L":
        for (var index = 0; index < dimension; index++){
            if (lock[index] === nullStr){
                continue;
            }    
            var newStr = "";
            var countDot = 0;
            for (var indexJ = 0; indexJ < dimension; indexJ++){
                if (lock[index][indexJ] != "."){
                    newStr += lock[index][indexJ];    
                } else{
                    countDot++;
                }
            }    
            lock[index] = newStr + Array(countDot+1).join(".");
        }         
        break;
    case "U":
        var indexList = [];
        for (var index = 0; index < dimension; index++){
            if (lock[index] !== nullStr){
                indexList.push(lock[index]);
            }
        }    
        var nullCount = dimension - indexList.length                
        indexList = indexList.concat(Array(nullCount).fill(nullStr))
        console.log("New Lock: ", indexList);
        return indexList;
    case "D":
        var indexList = [];
        for (var index = 0; index < dimension; index++){
            if (lock[index] !== nullStr){
                indexList.push(lock[index]);
            }
        }    
        var nullCount = dimension - indexList.length                
        indexList = indexList.concat(Array(nullCount).fill(nullStr))
        console.log("New Lock: ", indexList);
        return indexList;        
    default:
        break;
    }
    return lock ;       
}

var lock = ["....", 
            "AB..", 
            ".C..", 
            "...."]
var actions = "RU";
newLock = secretArchivesLock(lock, actions);
console.log(newLock)