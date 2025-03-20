let tong = document.getElementById("tong");
let tieude_1 = document.getElementById("tieude");
let contents = document.getElementById("content");
let btn_01 = document.getElementById("btn");

btn_01.onclick = function () {
  if (tong.style.backgroundColor === "white") {
    tong.style.backgroundColor = "black";
    tieude_1.style.color = "white";
    content.style.color = "white";
    btn_01.style.color = "black";
  } else {
    tong.style.backgroundColor = "white";
    tieude_1.style.color = "black";
    content.style.color = "black";
    btn_01.style.color = "white";
  }
};
