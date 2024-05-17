let num = 0;

function inc() {
  num++;
  document.getElementById('counter').textContent = num;
}

function dec() {
  num--;
  document.getElementById('counter').textContent = num;
}
