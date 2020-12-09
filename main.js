// grabbing elemet]nts

slider = document.querySelector(".slider");
next = document.querySelector("#next");
prev = document.querySelector("#prev");

// adding event listeners

document.addEventListener("click", target);
// next.addEventListener("click", forward);
// prev.addEventListener("click", backward);

// other stuffs

list = ["one", "two", "three", "four", "five", "six", "seven", "eight"];

let index = 3;

// functions

function target(e) {
  id = e.target.getAttribute("id");
  if (id === "next") {
    (function forward() {
      if (index >= 7) {
        index = 0;
      } else {
        ++index;
      }
      slider.style.background = `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url("img/${list[index]}.jpg")`;
      slider.style.backgroundSize = "cover";
      slider.style.backgroundPosition = "center";
      slider.style.backgroundRepeat = "no-repeat";
    })();
  }
  if (id === "prev") {
    (function backward() {
      if (index <= 0) {
        index = 7;
      } else {
        --index;
      }
      slider.style.background = `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url("img/${list[index]}.jpg")`;
      slider.style.backgroundSize = "cover";
      slider.style.backgroundPosition = "center";
      slider.style.backgroundRepeat = "no-repeat";
    })();
  }
}
