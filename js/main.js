new Swiper(".awards .swiper-container", {
  autoplay: true,
  spaceBetween: 40,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

gsap.registerPlugin(ScrollToPlugin);
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //   gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });

      // 버튼 보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });

      // 버튼 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
// _.throttle(함수, 시간)

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0, // gsap 플러그인
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * 0.7,
  });
});

// 스크롤시 텍스트 애니메이션 나오게 하는 부분
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //감시하려고 하는 섹션 부분에 scroll-spy 붙어 있는 애들을 감시요소가 spyEl을 갖게 됨. 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 뷰포트 탑:0 바텀:1 로 지정되어 있어서 0.8 부분이 될 때, 실행이 됨
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller()); //addTo 사용해야함을 문서에 작성되어있음, 스크롤매직 쓰려면
});
