let tieude = document.getElementById("container");

document.getElementById("modal").style.display = "none";
document.getElementById("btn").onclick = function () {
  document.getElementById("container").style.backgroundColor = "#999999";
  document.getElementById("modal").style.display = "block";
  document.getElementById("btn").style.backgroundColor = "#999999";
  document.getElementById("modal").style.display = "block";
};
document.getElementById("closes").style.display="block";