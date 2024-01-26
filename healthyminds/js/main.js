
// navbar sticky code
$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 750) {
        $('.navbar').addClass('sticky ')
    }

    else {
        $('.navbar').removeClass('sticky')
    }
});




// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('fast');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
    return false;
});





// facts counterup//

$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 3000
});

// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
});






// feedback button
$(window).scroll(function () {
    if ($(this).scrollTop() >= 600) {
        $('.feed-btn').show();
    } else {
        $('.feed-btn').hide();
    }
});
function function2() {

    swal.fire({
        title: "Give Us Feedback",
        position: "bottom-start",
        input: "textarea",
        inputValidator: (input) => {
            if (!input) {
                return "We want to heard your opinion!"
            }
        },
        html: ` <strong> <u>Healthy Minds studios </u></strong>  >`,
        color: "#ec7545",
        background: `#fff `,
        inputPlaceholder: "Type your message here...",
        html: `⭐⭐⭐⭐⭐⭐`,
        showClass: {
            popup: `
        animate__animated
        animate__fadeInLeft
        animate__faster
      `,
        },
        hideClass: {
            popup: `
        animate__animated
        animate__fadeOutLeft
        animate__faster
      `,
        },
        grow: 'row',
        width: 500,

        confirmButtonColor: "#ec7545",
        showConfirmButton: true,
        showCloseButton: true,
        animation: true,

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Submitted!",
                text: "Your feedback is very helpful for us 😍",
                icon: "hurrah",
                confirmButtonColor: "#ec7545"
            });
        }
    });
}









// contact button swal alert

function function1() {
    Swal.fire({
        icon: "success",
        title: "successfully sent!",
        width: 500,
        height: 100,
        padding: "3em",
        color: "#ec7545",

    });
}


