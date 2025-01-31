import gsap from "gsap";
import $ from "jquery";

// Homepage slider effect
export function homePageSlider() {
  const lines = document.querySelectorAll(".line");

  const timeline = gsap.timeline({
    repeat: -1,
    defaults: { duration: 0.9, ease: "circ.in" },
  });

  timeline
    .to(lines, { opacity: 1, y: 0, stagger: 2 })
    .to(lines, { opacity: 0, y: -100, stagger: 2, delay: 0.9 });
}

// Text slider effect
export function textSlider(flag, num) {
  var current = $(".item.current"),
    next,
    index;
  if (!flag) {
    next = current.is(":last-child") ? $(".item").first() : current.next();
    index = next.index();
  } else if (flag === "dot") {
    next = $(".item").eq(num);
    index = num;
  } else {
    next = current.is(":first-child") ? $(".item").last() : current.prev();
    index = next.index();
  }
  next.addClass("current");
  current.removeClass("current");
  $(".dot").eq(index).addClass("current").siblings().removeClass("current");
}

export function initializeSlider() {
  var setSlider = setInterval(textSlider, 4000);

  $(".button").on("click", function () {
    clearInterval(setSlider);
    var flag = $(this).is(".prev") ? true : false;
    textSlider(flag);
    setSlider = setInterval(textSlider, 4000);
  });

  $(".dot").on("click", function () {
    if ($(this).is(".current")) return;
    clearInterval(setSlider);
    var num = $(this).index();
    textSlider("dot", num);
    setSlider = setInterval(textSlider, 4000);
  });
}
