let hero_section = document.querySelector(".hero_section");
let desc_section = document.querySelector(".desc_section");
let sections = document.querySelectorAll("section");
let desc_container = document.querySelector(".desc_container");
let routes_section = document.querySelector(".routes_section");
let tabs = document.querySelectorAll(".tab");
let image_containers = document.querySelectorAll(".img_container");
let gallery_section = document.querySelector(".gallery_section");
let galleryImg = gallery_section.querySelectorAll(".img");
let review_section = document.querySelector(".review_section");
let review = review_section.querySelector(".review");
let section_headings = document.querySelectorAll(".section_heading");
let current_review = document.querySelector(".current_review");
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
let currentReviewCount = 1;
let totalReviewCount = 4;
let reviewObj = [
  {
    name: "Person1",
    text: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas
  deleniti saepe. Sunt reiciendis, ipsa ab est, quaerat eius illum
  ducimus, incidunt vero illo consectetur repudiandae et adipisci
  repellat eveniet!<br /><br />

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas
  deleniti saepe. Sunt reiciendis, ipsa ab est, quaerat eius illum
  ducimus, incidunt vero illo consectetur repudiandae et adipisci
  repellat eveniet!<br /><br />

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas
  deleniti saepe. Sunt reiciendis, ipsa ab est, quaerat eius illum
  ducimus, incidunt vero illo consectetur repudiandae et adipisci
  repellat eveniet!<br /><br />`,
    img: "./images/trekking-1.jpg",
  },
  {
    name: "Person2",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas
  deleniti saepe. Sunt reiciendis, ipsa ab est, quaerat eius illum
  ducimus, incidunt vero illo consectetur repudiandae et adipisci
  repellat eveniet!<br /><br />

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas
  deleniti saepe. Sunt reiciendis, ipsa ab est, quaerat eius illum
  ducimus, incidunt vero illo consectetur repudiandae et adipisci
  repellat eveniet!<br /><br />

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas
  deleniti saepe. Sunt reiciendis, ipsa ab est, quaerat eius illum
  ducimus, incidunt vero illo consectetur repudiandae et adipisci
  repellat eveniet!<br /><br />`,
    img: "./images/trekking-2.jpg",
  },
  {
    name: "Person3",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas
  deleniti saepe. Sunt reiciendis, ipsa ab est, quaerat eius illum
  ducimus, incidunt vero illo consectetur repudiandae et adipisci
  repellat eveniet!<br /><br />

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas
  deleniti saepe. Sunt reiciendis, ipsa ab est, quaerat eius illum
  ducimus, incidunt vero illo consectetur repudiandae et adipisci
  repellat eveniet!<br /><br />

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas
  deleniti saepe. Sunt reiciendis, ipsa ab est, quaerat eius illum
  ducimus, incidunt vero illo consectetur repudiandae et adipisci
  repellat eveniet!<br /><br />`,
    img: "./images/trekking-3.jpg",
  },
  {
    name: "Person4",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas
  deleniti saepe. Sunt reiciendis, ipsa ab est, quaerat eius illum
  ducimus, incidunt vero illo consectetur repudiandae et adipisci
  repellat eveniet!<br /><br />

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas
  deleniti saepe. Sunt reiciendis, ipsa ab est, quaerat eius illum
  ducimus, incidunt vero illo consectetur repudiandae et adipisci
  repellat eveniet!<br /><br />

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas
  deleniti saepe. Sunt reiciendis, ipsa ab est, quaerat eius illum
  ducimus, incidunt vero illo consectetur repudiandae et adipisci
  repellat eveniet!<br /><br />`,
    img: "./images/trekking-4.jpg",
  },
];
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
feather.replace();
// hero animation
gsap.fromTo(
  hero_section,
  {
    opacity: "1",
  },
  {
    opacity: "0",
    ease: "none",
    scrollTrigger: {
      trigger: hero_section,
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  }
);

// section heading animations
section_headings.forEach((heading) =>
  gsap.fromTo(
    heading,
    {
      transform: "translateY(400px) translateX(45vw)",
    },
    {
      transform: "translateY(-100px) translateX(45vw)",
      ease: "none",
      scrollTrigger: {
        trigger: heading.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    }
  )
);

// text effect
gsap.fromTo(
  desc_container,
  {
    backgroundImage:
      "radial-gradient(circle at 0% 0%,white,white,transparent 0px)",
  },
  {
    backgroundImage:
      "radial-gradient(circle at 0% 0%,white,white,transparent 1000px)",
    ease: "none",
    scrollTrigger: {
      trigger: desc_container,
      start: "top bottom-=30%",
      end: "top bottom-=50%",
      scrub: true,
      invalidateOnRefresh: true,
    },
  }
);

//routes image animation
image_containers[0].querySelectorAll("img").forEach((img, index) => {
  gsap.fromTo(
    img,
    {
      opacity: 0,
      transform: `translateY(${250 + index * 30}px)`,
    },
    {
      opacity: 1,
      transform: "translateY(0px)",
      ease: "none",
      scrollTrigger: {
        trigger: img,
        start: `top bottom`,
        end: `top bottom-=300`,
        scrub: true,
        invalidateOnRefresh: true,
      },
    }
  );
});
//gallery image animation
galleryImg.forEach((e, index) => {
  gsap.fromTo(
    e,
    {
      transform: `translateY(${250 + index * 30}px)`,
      opacity: 0,
    },
    {
      transform: "translateY(0px)",
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: e,
        start: `top center=+250`,
        end: `top center+=150`,
        scrub: true,
        invalidateOnRefresh: true,
      },
    }
  );
});

// review text animation
gsap.fromTo(
  review.querySelector(".review_text"),
  {
    backgroundImage:
    "radial-gradient(circle at 0% 0%,white,white,transparent 0px)",
  },
  {
    backgroundImage:
      "radial-gradient(circle at 0% 0%,white,white,transparent 1000px)",
    ease: "none",
    scrollTrigger: {
      trigger: review.querySelector(".review_text"),
      start: `top bottom`,
      end: `top center`,
      scrub: true,
      invalidateOnRefresh: true,
    },
  }
);

prevButton.addEventListener("click", () => {
  currentReviewCount > 1 ? (currentReviewCount--, reviewAnimate()) : null;
  current_review.innerHTML = `${currentReviewCount}/${totalReviewCount}`;
});

nextButton.addEventListener("click", () => {
  currentReviewCount >= 4 ? null : (currentReviewCount++, reviewAnimate());
  current_review.innerHTML = `${currentReviewCount}/${totalReviewCount}`;
});

function reviewAnimate() {
  let timeline = gsap.timeline();

  timeline.to(review.querySelector(".img"), {
    transform: "translateY(50px)",
    opacity: 0,
    ease: "none",
    duration: 0.075,
  });

  timeline.to(review.querySelector(".review_text"), {
    backgroundImage:
      "radial-gradient(circle at 0% 0%,white,white,transparent 0px)",
    ease: "none",
    duration: 0.075,
  });

  timeline.to(review.querySelector("h2"), {
    text: reviewObj[currentReviewCount - 1].name,
    ease: "none",
    duration: 0.0,
    delay: 0.075,
  });

  timeline.to(review.querySelector("p"), {
    text: reviewObj[currentReviewCount - 1].text,
    ease: "none",
    duration: 0.1,
    delay: 0.075,
  });

  timeline.to(review.querySelector(".img"), {
    backgroundImage: `url(${reviewObj[currentReviewCount - 1].img})`,
    ease: "none",
    duration: 0.1,
    delay: 0.075,
  });

  timeline.to(review.querySelector(".img"), {
    transform: "translateY(0px)",
    opacity: 1,
    ease: "none",
    duration: 0.075,
    delay: 0.8,
  });

  timeline.to(review.querySelector(".review_text"), {
    backgroundImage:
      "radial-gradient(circle at 0% 0%,white,white,transparent 1000px)",
    ease: "none",
    duration: 0.075,
    delay: 0.075,
  });
}

[...tabs].forEach((tab, index) =>
  tab.addEventListener("click", () => {
    tabs.forEach((e) => {
      e == tab ? e.classList.add("active") : e.classList.remove("active");
    });
    image_containers.forEach((container, ind) => {
      ind == index
        ? (container.style.display = "flex")
        : (container.style.display = "none");
    });
  })
);
