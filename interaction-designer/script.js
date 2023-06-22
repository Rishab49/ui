document.addEventListener("DOMContentLoaded", function () {
  let loader = document.querySelector(".loader");
  let heroContainer = document.querySelector(".hero-container");
  let heroText = heroContainer.querySelectorAll(".text-container");
  let header = document.querySelector("header");
  let menu = header.querySelector(".text-container");
  let nav = document.querySelector("nav");
  let close = nav.querySelector(".close");
  let textContainers = document.querySelectorAll(".text-container");
  let counter = 0;

  textContainers.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      console.log(e);
      new Promise((res) => {
        [...e.children].forEach((span) => {
          span.style.transform = "translateY(-125%)";
        });

        setTimeout(() => {
          [...e.children].forEach((span) => {
            span.style.transitionDuration = "0s";
            span.style.transitionDelay = "0s";
            span.style.transform = "translateY(110%)";
          });

          setTimeout(() => {
            [...e.children].forEach((span) => {
              span.style.transitionDuration = "0.5s";
            });
            res("done");
          }, 100);
        }, e.childElementCount * 30 + 500);
      }).then(() => {
        [...e.children].forEach((span, index) => {
          span.style.transitionDelay = `${index * 30}ms`;
          span.style.transform = "translateY(0%)";
        });
      });
    });

    console.log(e);

    [...e.children].forEach((span, index) => {
      span.style.transitionDelay = `${index * 30}ms`;
    });
  });

  heroText.forEach(e => {
    [...e.children].forEach(span => {
      span.style.transform = "translateY(125%)";
    })
  })

  function incrementLoader() {
    loader.children[0].innerText = counter;
    counter++;
    if (counter <= 100) {
      requestAnimationFrame(incrementLoader);
    } else {
      new Promise((res) => {
        [...loader.querySelectorAll(".stack")].forEach((e, index) => {
          e.style.transform = `translateY(-50%) translateX(-50%) rotateZ(${
            index * 20
          }deg)`;
        });
        loader.style.transform = "translateY(-110vh)";
        loader.style.setProperty("--loader-after-height", "0vh");
        setTimeout(() => {
          [...loader.querySelectorAll(".stack")].forEach((e, index) => {
            e.style.opacity = 0;
            res("done");
          });
        }, 2000);
      }).then(() => {
        setTimeout(() => {
          heroText.forEach((e) => {
            [...e.children].forEach((span, index) => {
              span.style.transform = "translateY(0px)";
            });
          });
          [...heroContainer.querySelectorAll(".stack")].forEach((e, index) => {
            e.style.transform = `translateY(-50%) translateX(-50%) rotateZ(${
              index * 20
            }deg)`;
          });
        }, 500);
      });
    }
  }

  requestAnimationFrame(incrementLoader);

  menu.addEventListener("click", () => {
    nav.style.transform = "translateY(0px)";
    nav.style.setProperty("--height", "100vh");
  });

  close.addEventListener("click", () => {
    nav.style.transform = "translateY(-100vh)";
    nav.style.setProperty("--height", "0vh");
  });
});
