"use strict";

//Мінімальне значення

function findM (a,b) {
    if (a <= b) {
        return a;
    }
    else {
        return b;
    }
}
    
// Середнє арифметічне

function findAr (a,b) {
    return (a + b)/2;
}

// Піднесення до степеню

function findPow (a, n) {
    var b = a;
    for (var i = 1; i < n; i++) {
        b *= a;
    }
    return b;
}
