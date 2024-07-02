import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;
function input(event) {
  var button = event.target;
  var t = button.innerHTML;
  if (B === true) {
    B = false;
    if (t === "") {
      button.innerHTML = "X";
    } else {
      alert("Already played by other player");
    }
  } else {
    B = true;
    if (t === "") {
      button.innerHTML = "O";
    } else {
      alert("Already played by other player");
    }
  }
}
function Reset() {
  console.log("inside");
  var h = document.querySelectorAll('[id="change"]');
  console.log(h.length);
  for (var i = 0; i < h.length; i++) {
    console.log(h);
    h[i].innerHTML = "";
  }
  console.log("done");
}
function Done() {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8],
  ];
  var w = document.querySelectorAll('[id="change"]');
  var x_places = [];
  var y_places = [];
  for (var i = 0; i < w.length; i++) {
    if (w.innerHTML[i] === "X") {
      x_places.push(i);
    } else if (w[i].innerHTML === "O") {
      y_places.push(i);
    }
  }
}

window.Done = Done;
window.Reset = Reset;
window.B = true;
window.input = input;
