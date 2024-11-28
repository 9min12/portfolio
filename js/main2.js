document.addEventListener("DOMContentLoaded", function () {

  // 작업물 세로 스크롤 부분 (section.artwork 고정)
  const vertical = document.querySelector('section.artwork');
  const lis = gsap.utils.toArray('section.artwork ul.img_box li');

  // 타임라인 생성
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: vertical,
      start: "top top",
      end: () => "+=" + (vertical.clientHeight * lis.length), // 전체 길이 계산
      pin: true, // section.artwork 고정
      pinSpacing: true,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: false // 디버그 모드 비활성화 (필요 시 활성화)
    }
  });

  // 각 li 요소에 애니메이션 추가
  lis.forEach((li, i) => {
    tl.fromTo(
      li,
      {
        opacity: 0,
        y: 100, // 아래에서 시작
        zIndex: 0
      },
      {
        opacity: 1,
        y: 0, // 원래 위치로 이동
        zIndex: 10, // 현재 요소가 상위에 위치
        duration: 1, // 각 요소 애니메이션 지속 시간
        onStart: () => {
          li.style.zIndex = 10; // 등장 시 최상위로 설정
          //console.log(i);
          $('section.artwork ul.pager li').removeClass('on').eq(i).addClass('on');
          $('section.artwork .num span').text(i+1);
        },
        onComplete: () => {
          li.style.zIndex = 0; // 완료 시 기본 z-index로 되돌림
          // $('section.artwork ul.pager li').removeClass('on')
        }
      },
      "+=0.5" // 각 애니메이션 사이 간격
    ).to(
      li,
      {
        opacity: 0,
        y: -100, // 위로 이동하며 사라짐
        duration: 1,
        onStart: () => {
          li.style.zIndex = 10; // 사라질 때도 최상위로 설정
        },
        onComplete: () => {
          li.style.zIndex = 0; // 완료 후 기본 z-index로 되돌림
          // $('section.artwork ul.pager li').removeClass('on')
        }
      },
      "+=0.5" // 각 애니메이션 사이 간격
    );
  });
});
