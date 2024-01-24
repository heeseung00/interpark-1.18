// window.onload = function () {
//   //=== promotion swiper ===
//   var swiper = new Swiper(".sw-promotion", {
//     slidesPerView: 4,
//     spaceBetween: 24,
//     speed: 1000,
//     loop: true,
//     navigation: {
//       nextEl: ".promotion .sw-next",
//       prevEl: ".promotion .sw-prev",
//     },
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     breakpoints: {
//       760: {
//         slidesPerView: 2,
//       },
//     },
//   });

//   //=== shopping-swiper ===
//   var swiper = new Swiper(".sw-shopping", {
//     slidesPerView: 4,
//     spaceBetween: 10,
//     grid: {
//       rows: 2,
//       fill: "row",
//     },
//     // speed: 1000,
//     loop: true,
//     breakpoints: {
//       900: {
//         spaceBetween: 32,
//         slidesPerView: 2,
//         // 화면당 3개씩 슬라이드 이동
//         slidesPerGroup: 2,
//         grid: {
//           rows: 1,
//         },
//       },
//       1024: {
//         spaceBetween: 32,
//         slidesPerView: 3,
//         // 화면당 3개씩 슬라이드 이동
//         slidesPerGroup: 3,
//         grid: {
//           rows: 1,
//         },
//       },
//       1280: {
//         spaceBetween: 25,
//         slidesPerView: 4,
//         // 화면당 4개씩 슬라이드 이동
//         slidesPerGroup: 4,
//         grid: {
//           rows: 1,
//         },
//       },
//     },
//     navigation: {
//       nextEl: ".shopping .sw-next",
//       prevEl: ".shopping .sw-prev",
//     },
//   });

//   //=== tour-swiper ===
//   var swiper = new Swiper(".sw-tour", {
//     slidesPerView: "3",
//     spaceBetween: 10,

//     navigation: {
//       nextEl: ".tour .sw-next",
//       prevEl: ".tour .sw-prev",
//     },

//     // breakpoints: {
//     //   1024: {
//     //     slidesPerView: 3,
//     //     spaceBetween: 32,
//     //   },
//     //   1280: {
//     //     slidesPerView: 4,
//     //     spaceBetween: 27,
//     //   },
//     // },
//   });

//   //=== ticket ===
//   var swiper = new Swiper(".sw-ticket", {
//     slidesPerView: "3",
//     loop: true,
//     spaceBetween: 10,
//     navigation: {
//       nextEl: ".ticket .sw-next",
//       prevEl: ".ticket .sw-prev",
//     },
//     breakpoints: {
//       1024: {
//         slidesPerView: 3,
//         spaceBetween: 32,
//       },
//       1280: {
//         slidesPerView: 4,
//         spaceBetween: 27,
//       },
//     },
//   });

//   //=== live-swiper ===
//   var swiper = new Swiper(".sw-live", {
//     slidesPerView: 4,
//     spaceBetween: 10,
//     loop: true,
//     navigation: {
//       nextEl: ".live .sw-next",
//       prevEl: ".live .sw-prev",
//     },

//     // breakpoints: {
//     //   1024: {
//     //     slidesPerView: 3,
//     //     spaceBetween: 32,
//     //   },
//     //   1280: {
//     //     slidesPerView: 4,
//     //     spaceBetween: 27,
//     //   },
//     // },
//   });

//   //=== books-swiper ===
//   var swiper = new Swiper(".sw-books", {
//     slidesPerView: "5",
//     spaceBetween: 15,
//     loop: true,
//     navigation: {
//       nextEl: ".books .sw-next",
//       prevEl: ".books .sw-prev",
//     },

//     // breakpoints: {
//     //   1024: {
//     //     slidesPerView: 3,
//     //     spaceBetween: 32,
//     //   },
//     //   1280: {
//     //     slidesPerView: 4,
//     //     spaceBetween: 27,
//     //   },
//     // },
//   });

//   //=== event-swiper ===
//   var swiper = new Swiper(".sw-events", {
//     slidesPerView: "4",
//     spaceBetween: 27,
//     loop: true,
//     navigation: {
//       nextEl: ".event .sw-next",
//       prevEl: ".event .sw-prev",
//     },
//     breakpoints: {
//       1280: {
//         slidesPerView: 4,
//       },

//       1024: {
//         slidesPerView: 3,
//         spaceBetween: 32,
//       },
//     },
//   });
// };
window.onload = function () {
  // <!-- promotion swiper -->
  var swiper = new Swiper(".sw-promotion", {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".promotion .sw-next",
      prevEl: ".promotion .sw-prev",
    },
    breakpoints: {
      760: {
        slidesPerView: 2,
      },
    },
  });

  //  shopping swiper
  var swiper = new Swiper(".sw-shopping", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    grid: {
      rows: 3,
      fill: "row",
    },
    navigation: {
      nextEl: ".shopping .section-slide .sw-next",
      prevEl: ".shopping .section-slide .sw-prev",
    },
    breakpoints: {
      900: {
        spaceBetween: 32,
        slidesPerView: 4,
        // 화면당 3개씩 슬라이드 이동
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        // 화면당 3개씩 슬라이드 이동
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
        // 화면당 4개씩 슬라이드 이동
        slidesPerGroup: 4,
        grid: {
          rows: 1,
        },
      },
    },
  });

  //  Tour Swiper
  var swiper = new Swiper(".sw-tour", {
    slidesPerView: 3,
    spaceBetween: 10,
    grid: {
      rows: 2,
      fill: "row",
    },
    loop: true,
    navigation: {
      nextEl: ".tour .sw-next",
      prevEl: ".tour .sw-prev",
    },
    breakpoints: {
      1024: {
        spaceBetween: 32,
        slidesPerView: 2,
        // 화면당 2개씩 슬라이드 이동
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 3,
        // 화면당 4개씩 슬라이드 이동
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
    },
  });
  //   ticket swiper
  var swiper = new Swiper(".sw-ticket", {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".ticket .sw-next",
      prevEl: ".ticket .sw-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 27,
      },
    },
  });

  //   live swiper
  var swiper = new Swiper(".sw-live", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".live .section-slide .sw-next",
      prevEl: ".live .section-slide .sw-prev",
    },
    // breakpoints: {
    //   1024: {
    //     slidesPerView: 3,
    //     spaceBetween: 32,
    //   },
    //   1280: {
    //     slidesPerView: 4,
    //     spaceBetween: 27,
    //   },
    // },
  });

  //   books swiper
  var swiper = new Swiper(".sw-books", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".books .sw-next",
      prevEl: ".books .sw-prev",
    },
  });

  //   events swiper
  var swiper = new Swiper(".sw-events", {
    slidesPerView: 4,
    spaceBetween: 27,
    loop: true,
    navigation: {
      nextEl: ".event .sw-next",
      prevEl: ".event .sw-prev",
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
      },
    },
  });
};
