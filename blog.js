function enlarge(word){
  word.style.fontSize= "30px";
}

function smaller(word){
  word.style.fontSize="20px";
}
function press_button(word){
  word.style.display='block';
}
function hide_button(word){
  word.style.display='none';
}
function navchange(x){
  x.style.backgroundColor="#cccccc";
  x.style.color="white";
}
function nav_restore(x){
  x.style.backgroundColor="white";
  x.style.color="black";
}
function waitnav(x){
  setTimeout(navchange(x),1000);
}
function menuhover(x,y){
  x.style.display="block";
  y.style.backgroundColor="#cccccc";
}
function menuout(x,y){
  x.style.display="none";
  y.style.backgroundColor="white";
}

