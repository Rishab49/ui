let cardElements = document.querySelectorAll(".card");

cardElements.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    let paths = card
      .querySelector("object")
      .contentDocument.querySelectorAll("path");
    let power = card
      .querySelector("object")
      .contentDocument.querySelector("#power");

    let specialPower = card
      .querySelector("object")
      .contentDocument.querySelector("#special_power");

    paths[1].style.strokeDasharray = paths[1].getTotalLength() + "px";
    paths[1].style.strokeDashoffset = -paths[1].getTotalLength() + "px";
    paths[0].style.strokeDasharray = paths[0].getTotalLength() + "px";
    paths[0].style.strokeDashoffset = -paths[0].getTotalLength() + "px";

    power.style.transform = "scale(0)";
    power.style.transformOrigin = "center";
    power.style.transformBox = "fill-box";
    specialPower.style.transform = "scale(0)";
    specialPower.style.transformOrigin = "center";
    specialPower.style.transformBox = "fill-box";

    setTimeout(() => {
      paths[1].style.transition = "stroke-dashoffset 0.5s ease";
      paths[0].style.transition = "stroke-dashoffset 0.5s ease";
      power.style.transition = "transform 0.5s cubic-bezier(.01,1.07,.81,1.24)";
      specialPower.style.transition =
        "transform 0.5s cubic-bezier(.01,1.07,.81,1.24)";
      paths[0].style.strokeDashoffset = "0px";
      paths[1].style.strokeDashoffset = "0px";
      power.style.transform = "scale(1)";
      specialPower.style.transform = "scale(1)";
    }, 1);
    setTimeout(() => {
      paths[0].style.transition = "";
      paths[1].style.transition = "";
      power.style.transition = "";
      specialPower.style.transition = "";
    }, 500);
  });
});
