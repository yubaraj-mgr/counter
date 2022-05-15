var count = 0;
const btn = document.querySelectorAll(".btn");
const value = document.querySelector("#value");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (this.innerHTML == "decrease") {
      count--;
      value.textContent = count;
    } else if (this.innerHTML == "increase") {
      count++;
      value.textContent = count;
    } else if (this.innerHTML == "reset") {
      count = 0;
      value.textContent = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else if (count == 0) {
      value.style.color = "black";
    }
  });
}
