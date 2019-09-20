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


module.exports = {
    deleteFirstElement, pushElementToEnd, changeSecondElement,addValeToStart,    
};
