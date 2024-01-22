// // 선생님
//   window.onload = function () {
//     //=== tour-swiper ===
//     var swiper = new Swiper(".sw-tour", {
//       slidesPerView: 3,
//       grid: {
//         rows: 2,
//         fill: "row",
//       },
//       loop: true,
//       navigation: {
//         nextEl: ".tour .sw-next",
//         prevEl: ".tour .sw-prev",
//       },
//       spaceBetween: 10,
//       breakpoints: {
//         1024: {
//           spaceBetween: 32,
//           slidesPerView: 2,
//           // 화면당 2개씩 슬라이드 이동
//           slidesPerGroup: 2,
//           grid: {
//             rows: 1,
//           },
//         },
//         1280: {
//           spaceBetween: 26,
//           slidesPerView: 3,
//           // 화면당 4개씩 슬라이드 이동
//           slidesPerGroup: 3,
//           grid: {
//             rows: 1,
//           },
//         },
//       },
//     });
//   };

//   나
// window.onload = function () {
//   //=== tour-swiper ===
//   //=== tour-swiper ===
//   var swiper = new Swiper(".sw-tour", {
//     slidesPerView: 3,
//     grid: {
//       rows: 2,
//       fill: "row",
//     },
//     autoplay: {
//       delay: 2500,
//       // disableOnInteraction: false,
//     },

//     spaceBetween: 10,
//     speed: 1000,
//     loop: true,
//     navigation: {
//       nextEl: ".tour .sw-next",
//       prevEl: ".tour .sw-prev",
//     },
//     breakpoints: {
//       900: {
//         spaceBetween: 32,
//         slidesPerView: 2,
//         // 화면당 3개씩 슬라이드 이동
//         slidesPerGroup: 3,
//         grid: {
//           rows: 1,
//         },

//         1024: {
//           spaceBetween: 32,
//           slidesPerView: 3,
//           // 화면당 3개씩 슬라이드 이동
//           slidesPerGroup: 4,
//           grid: {
//             rows: 1,
//           },
//         },
//         1280: {
//           spaceBetween: 25,
//           slidesPerView: 4,
//           // 화면당 4개씩 슬라이드 이동
//           slidesPerGroup: 4,
//           grid: {
//             rows: 1,
//           },
//         },
//       },
//     },
//   });
// };

window.onload = function () {
  //=== tour-swiper ===
  var swiper = new Swiper(".sw-tour", {
    slidesPerView: 3,
    grid: {
      rows: 2,
      fill: "row",
    },

    speed: 1000,
    loop: true,
    navigation: {
      nextEl: ".sw-next",
      prevEl: ".sw-prev",
    },
    // autoplay: {
    //   delay: 2500,
    //   // disableOnInteraction: false,
    // },
    breakpoints: {
      // 900: {
      //   spaceBetween: 32,
      //   slidesPerView: 2,
      //   // 화면당 3개씩 슬라이드 이동
      //   slidesPerGroup: 3,
      //   grid: {
      //     rows: 1,
      //   },
      // },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        // 화면당 3개씩 슬라이드 이동
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      // 오류 slidesperview 값과 slidespergroup 갯수가 달라서 오류가 생김.
      1280: {
        spaceBetween: 25,
        slidesPerView: 3,
        // 화면당 4개씩 슬라이드 이동
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
    },
  });
};
