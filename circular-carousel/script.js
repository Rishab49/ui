let SVG = document.querySelector("svg");
let cardElements = document.querySelectorAll(".element");
let factor = 0,
  canAlignCards = true,
  activeIndex = -1;
let totalLength, cx, cy, circle;
function init() {
  console.log(circle);
  let height = document.body.clientHeight;
  let width = document.body.clientWidth;
  circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  cx = width / 2;
  cy = height;
  SVG.height = height + "px";
  SVG.Width = width + "px";
  setAttribute(circle, "r", "600");
  setAttribute(circle, "cy", cy * 1.5);
  setAttribute(circle, "cx", cx);
  setAttribute(circle, "stroke", "white");
  setAttribute(circle, "stroke-width", "0");
  SVG.appendChild(circle);
  totalLength = circle.getTotalLength();
  factor = totalLength / cardElements.length;
}

function calcAngle(point) {
  let radian = Math.atan2(point.y - cy, point.x - cx);
  let degree = radian * (180 / Math.PI);
  return Math.floor(degree) + 90;
}

function SVGToScreen(svgX, svgY) {
  var p = SVG.createSVGPoint();
  p.x = svgX;
  p.y = svgY;
  return p.matrixTransform(SVG.getScreenCTM());
}

function callRotateRightCards() {
  canAlignCards ? rotateRightCards() : null;
}

function rotateRightCards() {
  activeIndex <= 0 ? (activeIndex = 11) : activeIndex--;
  console.log(12 - activeIndex);
  canAlignCards = false;
  drawCards();
}

function rotateLeftCards() {
  activeIndex >= 11 ? (activeIndex = 0) : activeIndex++;
  console.log(12 - activeIndex);
  canAlignCards = false;
  drawCards();
}

function setAttribute(elem, attr, val) {
  elem.setAttributeNS(null, attr, val);
}

function getPlusOne(index) {
  return index + 1 > 11 ? 0 : index + 1;
}
function getMinusOne(index) {
  return index - 1 < 0 ? 11 : index - 1;
}
function alignCards() {
  document.querySelector(".button-container").classList.add("visible");
  this.classList.remove("wiggle");
  cardElements.forEach((card) => {
    card.style.top = "0";
    card.style.left = "0";
    card.style.transform = "";
  });
  callRotateRightCards();
  cardElements[11].removeEventListener("click", alignCards);
}

function drawCards() {
  cardElements.forEach(function (e, index) {
    let length =
      totalLength - 0.25 * totalLength - (index + activeIndex) * factor;
    length < 0 ? (length = totalLength + length) : null;
    length > totalLength ? (length = length - totalLength) : null;
    let point = circle.getPointAtLength(length);
    let degree =
      index == getMinusOne(activeIndex == 0 ? 0 : 12 - activeIndex)
        ? (console.log("minus one", index), calcAngle(point) - 30)
        : index == getPlusOne(activeIndex == 0 ? 0 : 12 - activeIndex)
        ? (console.log("plus one", index), calcAngle(point) + 30)
        : calcAngle(point);
    let coords = SVGToScreen(point.x, point.y);

    e.style.transform = `translateX(${coords.x - 100}px) translateY(${
      coords.y - 125
    }px) rotateZ(${degree}deg)`;

    activeIndex == 0
      ? index == 0
        ? ((e.style.opacity = "1"), (e.style.borderWidth = "10px"))
        : ((e.style.opacity = "0.25"), (e.style.borderWidth = "2px"))
      : index == 12 - activeIndex
        ? ((e.style.opacity = "1"), (e.style.borderWidth = "10px"))
        : ((e.style.opacity = "0.25"), (e.style.borderWidth = "2px"));
    if (index == cardElements.length - 1) {
      setTimeout(() => {
        canAlignCards = true;
      }, 500);
    }
  });
}

cardElements[11].addEventListener("click", alignCards);
window.addEventListener("load", init);

window.addEventListener("resize", () => {
  let height = document.body.clientHeight;
  let width = document.body.clientWidth;
  cx = width / 2;
  cy = height;
  SVG.height = height + "px";
  SVG.Width = width + "px";

  setAttribute(circle, "r", "600");
  setAttribute(circle, "cy", cy * 1.5);

  setAttribute(circle, "cx", cx);
  totalLength = circle.getTotalLength();
  drawCards();
});
