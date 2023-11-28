// const lenis = new Lenis();

// lenis.on("scroll", ScrollTrigger.update);

// gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
// });
// gsap.ticker.lagSmoothing(0);

$(".sc-entrust .link-know").hover(
    function () {
        gsap.to($(this), {
            "--width": "0%",
        });
    },
    function () {
        gsap.to($(this), {
            "--width": "100%",
        });
    }
);

$(
    "footer .link-tell, footer .link-mail, header .link-menu,.sc-design .design-con .text-box .link-more"
).hover(
    function () {
        gsap.to($(this), {
            "--width": "100%",
        });
    },
    function () {
        gsap.to($(this), {
            "--width": "0%",
        });
    }
);

let meTl = gsap.timeline({ paused: true }); // 타임라인을 일시 정지 상태로 시작

$("header .menu .link-more").hover(
    function () {
        meTl.to(
            $("header .menu .link-more .circle:nth-child(1)"),
            {
                x: 6,
                y: 6,
                scale: 2,
            },
            "a"
        );
        meTl.to(
            $("header .menu .link-more .circle:nth-child(2)"),
            {
                x: -6,
                y: 6,
                scale: 2,
            },
            "a"
        );
        meTl.to(
            $("header .menu .link-more .circle:nth-child(3)"),
            {
                x: 6,
                y: -6,
                scale: 2,
            },
            "a"
        );
        meTl.to(
            $("header .menu .link-more .circle:nth-child(4)"),
            {
                x: -6,
                y: -6,
                scale: 2,
            },
            "a"
        );

        meTl.play(); // 타임라인을 실행
    },
    function () {
        meTl.reverse(); // 마우스가 요소에서 벗어날 때 타임라인을 역방향으로 실행
    }
);

// $("header .link-menu ").hover(
//     function () {
//         gsap.to($(this), {
//             "--width": "100%",
//         });
//     },
//     function () {
//         gsap.to($(this), {
//             "--width": "0%",
//         });
//     }
// );

logoTl = gsap.timeline({});
let offsetTop = $(".sc-design").offset().top;
let isShort = true;

$(window).scroll(function () {
    if ($(this).scrollTop() > offsetTop) {
        $(".is-short").addClass("on");
        $("header .menu .link-more span").addClass("bg");
        $(".is-long").removeClass("on");
    } else {
        $(".is-short").removeClass("on");
        $("header .menu .link-more span").removeClass("bg");
        $(".is-long").addClass("on");
    }
});

const numList = document.querySelectorAll(".data");

gsap.from(numList, {
    scrollTrigger: {
        trigger: ".sc-num",
        start: "top 80%",
        end: "bottom 20%",
    },

    textContent: 0,
    duration: 3,
    snap: { textContent: 1 },
    stagger: 0.1,
});
