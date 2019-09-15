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


module.exports = {isEven, add5};




