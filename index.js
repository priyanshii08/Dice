var d1=Math.random()*6;
d1=Math.floor(d1)+1
var randimg1="dice"+d1+".png";
var rand1="images/"+randimg1;
var img1=document.querySelectorAll(".img1")[0];
img1.setAttribute("src" , rand1);


var d2=Math.random()*6;
d2=Math.floor(d2)+1;
var randimg2="dice"+d2+".png";
var rand2="images/"+randimg2;
var img2=document.querySelectorAll(".img2")[0];
img2.setAttribute("src" , rand2);




if (d1===d2){
  document.querySelector("h1").innerHTML="DRAW";

}
else if (d1>d2) {

    document.querySelector("h1").innerHTML=" 🚩Player 1 Win";
}
else {

    document.querySelector("h1").innerHTML=" 🚩Player 2 Win";
}
