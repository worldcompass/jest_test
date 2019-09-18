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
}

//arrays functions

const  deleteFirstElement = x => {
    return x.shift();
}

const pushElementToEnd = (array, value) => {
    array.push(value);
    return array;
}

const changeSecondElement = (array, value) => {
    array[1] = value;
    return array;
};

const addValeToStart = (array, value) => {
    array.unshift(value);
    return array;
};


//array sort, map filter functions

const increaseEachItemBy2 = array => {
    return array.map(i => i + 2 );
};

const getFirstPart = array => {
    let answer = array.join('-').split('-');
    return [answer[0], answer[2], answer[4]];
};

const getLargerThan20 = array => {
    return array.filter(item => item > 20);
};

const getSumOfAllArray = array => {    
    return array.reduce((sum, current) => sum + current, 0);
};

const getAlltoUpperCase = array => {
    return array.join(', ').toUpperCase().split(', ');
};

const getSortedArray = array => {
    return array.sort( (a,b) => a > b);
};

const getReversedSortedArray = array => {
    return array.sort().reverse();
};

module.exports = {
    isEven, add5, getArrayLength, getFirstElement, getLastElement, getCenteredElements, 
    deleteFirstElement, pushElementToEnd,
    changeSecondElement,
    addValeToStart,
    getFirstPart,
    increaseEachItemBy2,
    getLargerThan20,
    getSumOfAllArray,
    getAlltoUpperCase,
    getSortedArray,
    getReversedSortedArray,
};




