const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //감시하려고 하는 섹션 부분에 scroll-spy 붙어 있는 애들을 감시요소가 spyEl을 갖게 됨. 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 뷰포트 탑:0 바텀:1 로 지정되어 있어서 0.8 부분이 될 때, 실행이 됨
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller()); //addTo 사용해야함을 문서에 작성되어있음, 스크롤매직 쓰려면
});
