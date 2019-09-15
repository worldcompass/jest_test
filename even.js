const isEven = n => {
    if(Number.isInteger(+n) === false){
        return false;
    } else if(n % 2 === 1 || n === 0){
        return false;
    } else{
        return true;
    }
}

module.exports = isEven;
