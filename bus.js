var elem = document.getElementsByClassName("bus")[0];
var pos = 46;
setInterval(frame, 50);

function frame() {
  if (pos == -50) {
    console.log(pos);
    pos = 46;
  } else {
    pos--;
    console.log(pos);
    elem.style.left = pos + "%";
  }
}
