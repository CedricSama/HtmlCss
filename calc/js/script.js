console.log('Calc Script Loaded');
var buttons = document.getElementsByTagName("button");
var ecranCalc = document.getElementById('ecran');
for (var i = 0; i < buttons.length; i = i + 1) {
    buttons[i].onclick = function () {
        ecranCalc.value += this.id;
        console.log(ecranCalc.value)
    };
}
document.getElementById("=").onclick = function () {
    ecranCalc.value = eval(ecranCalc.value);
}

document.getElementById("n!").onclick = function () {
    ecranCalc.value = fact(parseInt(ecranCalc.value));
}
document.getElementById("bin").onclick = function () {
    ecranCalc.value = decToBinary(parseInt(ecranCalc.value));
}


function factdec(n) {
    var res = 1;
    for (i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
function fact(n) {
    var res = 1, i = 1;
    while (i <= n) {
        res = res * i;
        i++;
    }
    return res;
}

function decToBinary(decimalParam){
    var bit =  parseInt(decimalParam%2), innerdec = parseInt(decimalParam/2), res=""+bit;
    // var res="";
    // var innerdec = decimalParam/2;
    // var bit =  decimalParam%2;
    console.log("innerdec",innerdec);
    console.log("bit",bit);
    while (innerdec > 0){
        bit =  innerdec%2;
        innerdec = parseInt( innerdec/2 );
        res =bit+res;// equi res = res + bit;
        console.log("innerdec",innerdec);
        console.log("bit",bit);
    }
    // res +=bit;
    return res;
}




console.log(fact(5));
console.log(factdec(5));






