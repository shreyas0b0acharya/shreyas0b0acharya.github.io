let x = 0;
const carList = [
  'wp8357845-1366x768-cars-wallpapers.jpg',
  'wp8357784-1366x768-cars-wallpapers.jpg',
  'wp8357717-1366x768-cars-wallpapers.jpg',
  'wp8357605-1366x768-cars-wallpapers.jpg',
  'wp8357586-1366x768-cars-wallpapers.jpg',
  'wp8357397-1366x768-cars-wallpapers.jpg',
  'wp8357228-1366x768-cars-wallpapers.jpg',
  'wp8248187-1366x768-cars-wallpapers.jpg'
];


// Function to update the image
function f_Image() {
  const imgElement = document.createElement('img');
  imgElement.src = carList[x];
  imgElement.id = 'photo';
  const showDiv = document.getElementById('show');
  showDiv.innerHTML = '';
  showDiv.appendChild(imgElement);
}

function updateImage(event) {
  const direction = event.target.id;

  if (direction === 'left') {
    x--;
    if (x < 0) {
      x = carList.length - 1;
    }
  } else if (direction === 'right') {
    x++;
    if (x >= carList.length) {
      x = 0;
    }
  }

  const imgElement = document.createElement('img');
  imgElement.src = carList[x];
  imgElement.id = 'photo';
  const showDiv = document.getElementById('show');
  showDiv.innerHTML = '';
  showDiv.appendChild(imgElement);
}

f_Image();

document.getElementById('left').addEventListener('click', updateImage);
document.getElementById('right').addEventListener('click', updateImage);

function rating_value(n_stars) {
  for (let y = 1; y <= n_stars; y++) {
    document.getElementById('star' + y).innerHTML = "⭐";
  }
}

function clear_form(){
  document.getElementById('name').value='';
  document.getElementById('review').value='';
  for (let y = 1; y <= 5; y++) {
    document.getElementById('star' + y).innerHTML = "☆";
  }
}
