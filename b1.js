let hideBtn = document.getElementById("hide-text");
let showBtn = document.getElementById("show-text");
let content = document.getElementById("content");

hideBtn.onclick = function () {
  content.style.display = "none";
};

showBtn.onclick = function () {
  content.style.display = "block";
};
