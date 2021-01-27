var jacket= prompt("What type do you need ?");
var nojack=prompt("how many jackets do you want ?");

var jackq;

if(nojack >= 1 && nojack <3){
    jackq="bye one more jacket and get 20% discount";
}else if(nojack >=4 && nojack <= 7){

    jackq="bye 2 more jackets and get 35% discount";

}else if(nojack <=8 && nojack <=10){
    jackq=" get 50% discount";

}
else if(nojack>=10 && nojack >=12)
{
    jackq="get one jacket FREE";

}
else{
    jackq="Welcome To Visit Us";

}


document.getElementById("choose").innerText=nojack;
document.getElementById("finish").innerText=jackq;
confirm("Best Washes");
alert("We Hope To ComeBack Soon ..");