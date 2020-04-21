$(document).ready(function(){
    
    
    // scrollUp-TOP JS 
    $(function(){
        $.scrollUp();
        $.scrollUp();
    });

    
    // ACTIVE LINK
    
    var spy = new Gumshoe('#scroll-active a',{
        offset: 30
    });
    
    

    // WOW JS
    new WOW().init();



    // STAR
    $(function () {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });



    // SMOOTH SCROLL FOR IE/ EDGE / SAFARI
    
    $("a").on('click', function(event){
        
        if(this.hash !== ""){
            event.preventDefault();
            
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 800, function(){
                window.location.hash = hash;
            });
        }
        
        
    });


});

/*==================================
            protfolio
    ====================================*/
    
    $(window).on('load',function(){

    var $projects = $('.isotope-container');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });


    //filter items on button click
    $('.isotope-filter').on('click', 'button',function(){

        //get filter value
        var nayem = $(this).attr('data-filter');

        //filter protfolio
        $projects.isotope({
            filter: nayem,
        });

        //active button
        $('.isotope-filter').find('.active').removeClass('active');
        $(this).addClass('active');

        });
    });


// Magnifier Portfolio

$(function () {
    $('#portfolio-item').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});



// TESTIMONIAL
'use strict'
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })

		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})

		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;

				touchPosDiff = touchStartPos - touchEndPos;

				console.log(touchPosDiff);
				console.log(touchStartPos);
				console.log(touchEndPos);


				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}

		})
}







function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}




