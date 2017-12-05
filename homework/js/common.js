"use strict"

// 1

function isEmpty(array) {
    for (var key in array) {
        return true;
    }
    return false;
}


function sumData(array) {
    if (isEmpty(array)) {
        var sum = 0;
        for (var key in array){
            sum = sum + array [key];
        } return sum;
    } else return false;
}

// 2

var codeObj = {
    'length' : [45, 109, 32, 39, 1, 0]
};
codeObj.length [23] = 95;

console.log('---', sumData(codeObj['length']));

// 3

var mas = [1, 2, 7, 10, 6, 9, 3, 8, 5, 4];
function bubbleSort(mas) {
    for (var i = 0; i < mas.length; i++) {
        for (var a = 0; a < mas.length - 1; a++) {
            if (mas[a] > mas [a + 1]){
                var j = mas[a];
                mas[a] = mas[a+1];
                mas [a] = j;
            }
        }
    } return mas;
}