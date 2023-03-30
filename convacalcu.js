//Weight Converter
function w1() {
    document.getElementById("K").innerHTML = 'Kilogram';
}
function w2() {
    document.getElementById("K").innerHTML = 'Ounces';
}
function w3() {
    document.getElementById("K").innerHTML = 'Grams';
}

var n2 = document.getElementById('inputWeight');
var res = document.getElementById("results");
document.getElementById('kilo').addEventListener('click', function() {
    res.value = 
    parseFloat(n2.value)+parseFloat(2.205)    
});
document.getElementById('ounce').addEventListener('click', function() {
    res.value = 
    parseFloat(n2.value)*parseFloat(16)
});
document.getElementById('gram').addEventListener('click', function() {
    res.value = 
    parseFloat(n2.value)*parseFloat(453.6)
});

// Length Converter
function l1() {
    document.getElementById("P").innerHTML = 'Meters';
}
function l2() {
    document.getElementById("P").innerHTML = 'Inches';
}
function l3() {
    document.getElementById("P").innerHTML = 'Centimeters';
}

var n1 = document.getElementById('inputLength');
var rez = document.getElementById("resulta");
document.getElementById('meter').addEventListener('click', function() {
    rez.value = 
    parseFloat(n1.value)/parseFloat(3.281)    
});
document.getElementById('inch').addEventListener('click', function() {
    rez.value = 
    parseFloat(n1.value)*parseFloat(12)
});
document.getElementById('cm').addEventListener('click', function() {
    rez.value = 
    parseFloat(n1.value)*parseFloat(30.48)
});

// Time Converter

function a1() {
    document.getElementById("O").innerHTML = 'Minute';
}
function a2() {
    document.getElementById("O").innerHTML = 'Second';
}
function a3() {
    document.getElementById("O").innerHTML = 'Milliscond';
}

var n3 = document.getElementById('inputTime');
var rezs = document.getElementById("result");
document.getElementById('min').addEventListener('click', function() {
    rezs.value = 
    parseFloat(n3.value)*parseFloat(60)    
});
document.getElementById('sec').addEventListener('click', function() {
    rezs.value = 
    parseFloat(n3.value)*parseFloat(3600)
});
document.getElementById('mil').addEventListener('click', function() {
    rezs.value = 
    parseFloat(n3.value)*parseFloat(3.6e+6)
});

// Temperature Converter

function q1() {
    document.getElementById("s").innerHTML = 'Fahrenheit';
}
function q2() {
    document.getElementById("s").innerHTML = 'Kelvin';
}

var n4 = document.getElementById('inputTemp');
var resz = document.getElementById("resultz");
document.getElementById('f').addEventListener('click', function() {
    resz.value = 
    parseFloat(n4.value)+parseFloat(32)    
});
document.getElementById('k').addEventListener('click', function() {
    resz.value = 
    parseFloat(n4.value)+parseFloat(273.15)
});
