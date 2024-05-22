let table = "<table>";
for (let i = 0; i < 4; i++) {
  table += "<tr>";
  for (let j = 0; j < 4; j++) {
    table += `<td><img src='a761744e8962b35db48f79a0e623ea1d.jpg' style='height:60px; width:60px;' id='${i}${j}'></td>`;
  }
  table += "</tr>";
}
table += "</table>";
document.getElementById('table').innerHTML = table;

function shuffle(my_list) {
  let n = my_list.length;
  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [my_list[i], my_list[j]] = [my_list[j], my_list[i]];
  }
}

const pic_list = [
  "m_g1.jpg", "m_g2.jpg", "m_g3.jpg", "m_g4.jpg", "m_g5.jpg", 
  "m_g6.jpg", "m_g7.jpg", "m_g8.jpg", "m_g1.jpg", "m_g2.jpg", 
  "m_g3.jpg", "m_g4.jpg", "m_g5.jpg", "m_g6.jpg", "m_g7.jpg", 
  "m_g8.jpg"
];

shuffle(pic_list);

const pic_dic = {};
let x = -1;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    x++;
    let key = `${i}${j}`;
    let value = pic_list[x];
    pic_dic[key] = value;
  }
}

let y='';
let y_id='';
function onclick_check(event) {
  let click_id=event.target.id;
  document.getElementById(click_id).src = pic_dic[click_id];
  if (y=='') {
    y=pic_dic[click_id];
    y_id=click_id;
  }
  else{
    if (y==pic_dic[click_id]) {

      document.getElementById(click_id).src = "White.PNG";
      document.getElementById(y_id).src = "White.PNG";
      y='';
      y_id='';
    }
    else{
      document.getElementById(click_id).src = "a761744e8962b35db48f79a0e623ea1d.jpg";
      document.getElementById(y_id).src = "a761744e8962b35db48f79a0e623ea1d.jpg";
      y='';
      y_id='';
    }
    }
  
}
function flip(event) {
  let flip_id = event.target.id;
  document.getElementById(flip_id).src = pic_dic[flip_id];
}

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    let each_id = `${i}${j}`;
    document.getElementById(each_id).addEventListener('click',onclick_check);
  }
}


