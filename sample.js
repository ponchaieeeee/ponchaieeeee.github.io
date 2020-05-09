const DELAY = 200
let audioElem = new Audio();
const BGM = "./type.mp3";
audioElem.src = BGM;
let audioElem2 = new Audio();
const BGM2 = "./lupan.mp3";
audioElem2.src = BGM2;

function funcAdd1() {
    document.getElementById( "sample" ).innerHTML =
        parseInt( document.getElementById( "sample" ).innerHTML ) + 1;
}
function funcAdd2() {
    document.getElementById( "sample" ).innerHTML =
        parseInt( document.getElementById( "sample" ).innerHTML ) + 2;
}

function playSound() {
  audioElem.currentTime = 0;
  audioElem.play();
}
function playSound2() {
  audioElem2.currentTime = 0;
  audioElem2.play();
}

function getString() {
  const str = document.getElementById( "strValue" ).value;
  const elm = document.getElementById( "sample" )
  //elm.innerHTML = "";
  elm.style.fontSize = "120px";
  for(let i = 0; i < str.length; i++){
    setTimeout(() => {
      //elm.innerHTML = "";
      elm.style.textAlign = "center";
      elm.innerHTML = str[i];
      playSound();
    }, DELAY*(i));
  }
  setTimeout(() => {
    elm.innerHTML = str;
    elm.style.fontSize = "40px";
    elm.style.textAlign = "left";
    playSound2();
  }, DELAY*(str.length));
}

/*
document.getElementById("text-button").onclick = function() {
  document.getElementById("text").innerHTML = "クリックされた！";
};*/

/*
function test() {
  document.getElementById("b1").innerHTML = "motherfuck";
  console.log("fucker")
  console.log(document.getElementById("output"))
  console.log("sucker")
}
*/
