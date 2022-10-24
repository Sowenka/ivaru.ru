$(window).scroll(function () {
    let scrolled = $(window).scrollTop();

    if (scrolled > 1800) {
        $("#dropaside").addClass("drop-aside");
    } else {
        $("#dropaside").removeClass("drop-aside");
    }
});

// const backTop = (document.querySelector(".back").onclick = function () {
//     $("body,html").animate({ scrollTop: 0 }, 600);
// });
