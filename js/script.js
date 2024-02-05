AOS.init();

let loading = false;
let state = true;
let play = false;
var audio = new Audio('https://streaming-cms-nhandan.epicdn.me/b79609de11f901c522e091a62ba83bfa/65bf19d0/2024_02_03/tet_xuan_502.mp3');


function clickStart() {
    console.log('Click');
    $('#loading').hide();
    loading = true;
    $('html, body').animate({
        scrollTop: $(".section-start").offset().top
    }, 500);
    music();
    AOS.refresh();
};

function music() {
    if (!play) {
        audio.play();
        play = true;

        $('.off').show();
        $('.on').hide();
        return;
    }
    if (play) {
        audio.pause();
        play = false;
        $('.off').hide();
        $('.on').show();
        return;
    }
}



$(window).on('load', function () {
    console.log('Loaded');
    // $('html, body').animate({
    //     scrollTop: $("#body").offset().top
    // }, 1000);

    // $(document).on('scroll', function () {
        // let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // if (scrollTop > 0 && !loading) {
        //     // $('html, body').animate({
        //     //     scrollTop: $("#body").offset().top
        //     // }, 100);
        //     return;
        // }
        // if (scrollTop > $(window).height() && state) {
        //     $('#loading').css({ display: 'none' })
        //     state = false
        // }
        
    // });

    if ($(window).width() <= 768) {
        var swiper1 = new Swiper(".video2", {
            slidesPerView: 1,
            spaceBetween: 16,
            centeredSlides: true,
            freeMode: false,
            loop: true,
            mousewheel: false,
            keyboard: {
                enabled: true
            },
        });
    }
});




