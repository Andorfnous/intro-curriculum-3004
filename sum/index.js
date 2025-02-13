`use strict`;

function add(numbers){
    let result = 0;
    for (const num of numbers){
        result = result + num;
    }
    return result;
}

function multi(numbers){
    let result = 1;
    for (const num of numbers){
        result = result * num;
    }
    return result;
}

module.exports = { add, multi };