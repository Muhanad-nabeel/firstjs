var jacket = prompt("What type do you need ?");
var nojack = prompt("how many jackets do you want ?");

var jackq;

if (nojack >= 1 && nojack < 3) {
    jackq = "bye one more jacket and get 20% discount";
} else if (nojack >= 4 && nojack <= 7) {

    jackq = "bye 2 more jackets and get 35% discount";

} else if (nojack <= 8 && nojack <= 10) {
    jackq = " get 50% discount";

}
else if (nojack >= 10 && nojack >= 12) {
    jackq = "get one jacket FREE";

}
else {
    jackq = "Welcome To Visit Us";

}

//lab 5
var type;

while (type !== 'short' && type !== 'tall') {
    type = prompt("select your jackets 'short' OR 'tall'");

}
var ordered = '';
if (type === 'short') {

    ordered = '<img src="assets/short.jpg"/>';

} else if (type === 'tall') {
    ordered = '<img src="assets/tall1.jpeg"/>';

}

var nojackts = prompt("how many jackets do you want ?");
var result = '';
for (var i = 0; i < nojackts; i++) {
    result = result + ordered;


}
document.write(result);

document.getElementById("choose").innerText = nojack;
document.getElementById("finish").innerText = jackq;
confirm("Best Washes");
alert("We Hope To ComeBack Soon ..");


//fun decleration 
var setName;
function getUser() {

    setName = prompt("Enter Your Name ?");
    console.log(setName);

}
getUser();

document.getElementById("name").innerText = setName;

//fun expression  
var getNum = function (a, b) {
    var result = a + b;
    return result;
}

var sum = prompt(getNum(10, 20));
console.log(sum);

