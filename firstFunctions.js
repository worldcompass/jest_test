const add5 = n => +n + 5;

const isEven = x => {
    if(Number.isInteger(+x) == false){    
        return false;   
    } else  if(x % 2 == 1 || x == 0){
        return false; 
    } else{
        return true;
    }
};

const getArrayLength = x => {
    return x.length;
};

const getFirstElement = x => {
    return x[0];
}

const getLastElement = x => {
    return x[x.length - 1];
}

const getCenteredElements = x => {
    if(x.length % 2 === 0){
        return ( x[Math.ceil(x.length / 2 ) -1] + x[Math.ceil(x.length / 2 )] ) /2; 
    } else {
        return x[Math.floor(x.length / 2)]
    }
};

module.exports = {
    isEven, add5, getArrayLength, getFirstElement, getLastElement, getCenteredElements
};