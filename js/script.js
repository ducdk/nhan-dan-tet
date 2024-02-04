AOS.init();

let loading = false;

function clickStart() {
    console.log('Click');
    // $('#loading').hide();
    loading = true;
    $('html, body').animate({
        scrollTop: $(".section-start").offset().top
    }, 500);
};
$(window).on('load', function () {
    console.log('Loaded');
    // $('html, body').animate({
    //     scrollTop: $("#body").offset().top
    // }, 1000);

    $(document).on('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 0 && !loading) {
            $('html, body').animate({
                scrollTop: $("#body").offset().top
            }, 100);
            return;
        }
        if (scrollTop > $(window).height() && loading) {
            $('#loading').css({ display: 'none' })
            loading = true;
            AOS.refresh();
        }
        
    });

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




