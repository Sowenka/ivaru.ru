$(window).scroll(function () {
    let scrolled = $(window).scrollTop();

    if (scrolled > 1300) {
        $('#back').addClass('active');
    } else {
        $('#back').removeClass('active');
    }
});

const backTop = document.querySelector(".back").onclick = function () {
    $('body,html').animate({scrollTop: 0}, 500)
	
};
