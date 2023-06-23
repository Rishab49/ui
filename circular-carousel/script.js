let SVG = document.querySelector("svg");
let cardElements = document.querySelectorAll(".element");
let factor = 0,
  canAlignCards = true,
  activeIndex = 3;
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
  rotateCards();
});

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

function callRotateCards() {
  canAlignCards ? rotateCards() : null;
}

function rotateCards() {
  activeIndex >= 11 ? (activeIndex = 0) : activeIndex++;
  console.log(activeIndex), (canAlignCards = false);
  cardElements.forEach(function (e, index) {
    let length =
      totalLength - index * (totalLength / cardElements.length) + factor;
    length > totalLength ? (length = length - totalLength) : null;
    let point = circle.getPointAtLength(length);
    let degree =
      index == getMinusOne()
        ? calcAngle(point) - 30
        : index == getPlusOne()
        ? calcAngle(point) + 30
        : calcAngle(point);
    let coords = SVGToScreen(point.x, point.y);

    e.style.transform = `translateX(${coords.x - 100}px) translateY(${
      coords.y - 125
    }px) rotateZ(${degree}deg)`;
    if (index == cardElements.length - 1) {
      setTimeout(() => {
        canAlignCards = true;
      }, 500);
    }
  });
  if (factor > totalLength) {
    factor = (activeIndex - 2) * (totalLength / cardElements.length);
    console.log("gets bigger", activeIndex, factor);
  } else {
    factor += totalLength / cardElements.length;
    console.log(activeIndex, factor);
  }
}

function setAttribute(elem, attr, val) {
  elem.setAttributeNS(null, attr, val);
}

function getPlusOne() {
  return activeIndex + 1 > 11 ? 0 : activeIndex + 1;
}
function getMinusOne() {
  return activeIndex - 1 < 0 ? 11 : activeIndex - 1;
}

window.addEventListener("wheel", callRotateCards);

cardElements[11].addEventListener("click", alignCards);

function alignCards() {
  cardElements.forEach((card) => {
    card.style.top = "0";
    card.style.left = "0";
    card.style.transform = "";
  });

  callRotateCards();

  cardElements[11].removeEventListener("click", alignCards);
}
