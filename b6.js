document.getElementById("log").onclick = function () {
  if (
    document.getElementById("name").value === "huanrose@gmail.com" &&
    document.getElementById("pass").value === "123456"
  ) {
    console.log("Đăng nhập thành công");
  } else {
    console.log("Đăng nhập thất bại");
  }
};
