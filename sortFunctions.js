//array sort, map filter functionsnpm
const increaseEachItemBy2 = array => {
    return array.map(i => i + 2 );
};

const getFirstPart = array => {    
    return array.map(x => x.split('-')[0]);
};

const getLargerThan20 = array => {
    return array.filter(item => item > 20);
};

const getSumOfAllArray = array => {    
    return array.reduce((sum, current) => sum + current, 0);
};

const getAlltoUpperCase = array => {
    return array.map(x => x.toUpperCase());
};

const getSortedArray = array => {
    return array.sort( (a,b) => a > b);
};

const getReversedSortedArray = array => {
    return array.sort().reverse();
};

const sortDishes = array => {
    let dishes = [];
    let couples = [];
    let other = [];

    array.map(x => {
        if( x.includes('Тарелка') ) {
            dishes.push(x);
        } else if  ( x.includes('Чашка') ) {
            couples.push(x);
        } else {
            other.push(x);
        }
        
    });

    return [dishes, couples, other].map(x => x.sort());
};

module.exports = { 
    getFirstPart,
    increaseEachItemBy2,
    getLargerThan20,
    getSumOfAllArray,
    getAlltoUpperCase,
    getSortedArray,
    getReversedSortedArray,
    sortDishes,
};




