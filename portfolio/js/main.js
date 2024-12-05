$(function () {
  let to = $('.summary').offset().top + 300;
  $(window).scroll(function () {
    let st = $(this).scrollTop()
    for (let i = 0; i < $('.skill li').length; i++) {
      if (st >= to - (i * 50)) {
        $('.skill li').eq(i).addClass('on');
      }
    }
  });

  const strength = document.querySelector('.horizontal');
  const divs = gsap.utils.toArray('.sts > div');
  // 각 div의 위치와 너비를 계산하여 애니메이션 설정
  const totalWidth = divs.reduce((acc, div) => acc + div.offsetWidth, 0);
   // padding-left 값 가져오기
  const paddingLeft = parseInt(getComputedStyle(strength).paddingLeft, 10) || 0;

  // 가로 스크롤 애니메이션 설정
  gsap.to(divs, {
     x: -totalWidth + window.innerWidth - paddingLeft - 850, // padding-left를 포함한 이동 거리
    ease: 'none',
    scrollTrigger: {
      trigger: strength,
      pin: ".strength",
      start: "top top",
      end: () => "+=" + totalWidth, // 전체 스크롤 거리 + padding-left
      scrub: 1,
      markers: true, // 디버깅용 마커
      invalidateOnRefresh: true, // 리프레시 시 스크롤 길이 재계산
    }

  });

});


















// // 각 애니메이션 설정 배열
// const animations = [
//   { target: ".iw1", properties: { y: -200 }, duration: 2, ease: "elastic" },
//   { target: ".iw2", properties: { rotation: 720 }, duration: 2, ease: "elastic" },
//   { target: ".iw3", properties: { scale: 0.3 }, duration: 2, ease: "elastic" },
//   { target: ".iw4", properties: { x: -100, rotation: 50 }, duration: 2.5, ease: "power1.inOut" },
//   { target: ".iw5", properties: { opacity: 0, scale: 2.3 }, duration: 1, ease: "none" }
//   { target: ".iw6", properties: { opacity: 0, scale: 2.3 }, duration: 1, ease: "none" }
// ];

//     let ani = [];
//     animations.forEach((anim, i) => {
//         ani[i] = gsap.to(anim.target, {
//             ...anim.properties,
//             duration: anim.duration,
//             ease: anim.ease,
//             scrollTrigger: {
//                 trigger: anim.target,
//                 containerAnimation: scrollTween,
//                 start: 'left center',
//                 toggleActions: "play none reverse none",
//             }
//         });
//     });

//     function triggerAnimation(index) {
//         if (ani[index]) {
//             ani[index].restart();
//         }
//     }

//     sections.forEach((section, index) => {
//         ScrollTrigger.create({
//             trigger: section,
//             start: 'left center',
//             onEnter: () => triggerAnimation(index),
//             onEnterBack: () => triggerAnimation(index),
//             containerAnimation: scrollTween,
//         });
//     });
// });




//작업물 세로 스크롤 부분
// let con5Article = gsap.utils.toArray('.articles article');
// con5Article.forEach((article,i)=>{
//   gsap.timeline({
//     scrollTrigger : {
//       trigger: article,
//       start: 'top bottom',
//       end: 'top 20%',
//       scrub: 0.5,
//     }
//   }).fromTo(article, {scale:0.8, opacity:0} , {scale:1, opacity:1},0);
// });

// $('.txtAniBox .txtAni1').simplyScroll({
//   speed: 4,
//   direction: 'forwards',
//   pauseOnHover: true,
//   pauseOnTouch: false,
// })
// $('.txtAniBox .txtAni2').simplyScroll({
//   speed: 3,
//   direction: 'backwards',
//   pauseOnHover: true,
//   pauseOnTouch: false,
// })
// $('.txtAniBox .txtAni3').simplyScroll({
//   speed: 4,
//   direction: 'forwards',
//   pauseOnHover: true,
//   pauseOnTouch: false,
// })

const artwork = document.querySelector('section.artwork');
const artworklis = gsap.utils.toArray('section.artwork ul.img_box li');
let scroll2 = gsap.to(artworklis, {
  yPercent: -100 * (artworklis.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: artwork,
    start: 'top top',
    end: () => "+=" + (artwork.scrollHeight - window.innerHeight),
    pin: true,
    scrub: 1,
    invalidateOnRefresh: true
  }
});
/*       gsap.fromTo(
        "section.artwork ul.img_box li",
        { opacity: 0, y: 100 }, 
        {
          opacity: 1,
          y: 0,
          duration: 0.6, 
          ease: "power3.out",
          stagger: 0.2, 
          scrollTrigger: {
            trigger: "section.artwork ul.img_box",
            start: "top 80%", 
            toggleActions: "play none none none",
          },
        }
      );*/



