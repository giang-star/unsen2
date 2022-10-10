

    
// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 0;
var navbarHeight = $('.header').outerHeight();
console.log(navbarHeight);

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
});

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.header').removeClass('nav-up').addClass('bachground');
        }
        if(st==0) {
            $('.header').removeClass('bachground');
        }

        
        
    }

    lastScrollTop = st;
    
}

