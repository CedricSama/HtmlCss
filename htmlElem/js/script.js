console.log('Loaded');
var IDELEM = document.getElementById('IDELEM');
console.log("IDELEM :: ", IDELEM);
var CLASSNAME = document.getElementsByClassName("CLASSNAME");
console.log(CLASSNAME);

var CLASSNAME2 = document.getElementsByClassName("CLASSNAME classname2");
console.log({'a': CLASSNAME2});

var doubleCLASSNAME = document.querySelector(".CLASSNAME.classname2");
console.log(doubleCLASSNAME);

var queryext = "body > div :not(:nth-child(2))";
function getQuery(){
    var query = "body > div > p";
    return query;
}

var paragraph = document.querySelectorAll(getQuery());
console.log(paragraph);

var paragraph2 = document.querySelectorAll(queryext);
console.log(paragraph2);

