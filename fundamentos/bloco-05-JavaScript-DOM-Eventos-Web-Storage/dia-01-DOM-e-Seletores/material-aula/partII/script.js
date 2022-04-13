document.getElementById("header-container").style.backgroundColor = "#00b069";
document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor =
  "#ff9f84";
let h3 = document.getElementsByTagName("h3");
for (let index = 0; index < 2; index += 1) {
  h3[index].style.backgroundColor = "#a52cf3";
}
for (let index = 2; index < h3.length; index += 1) {
  h3[index].style.backgroundColor = "#232525";
}
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor =
  "#f9db5e";
let footer = document.getElementById("footer-container");
footer.style.backgroundColor = "#003533";
