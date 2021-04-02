// domload DOMContentLoaded 
addEventListener('DOMContentLoaded', () => {
    console.log('loading');
  

    var swiper = new Swiper('.swiper-container-hero', {
       
        autoplay: {
    
                delay: 3000,
                disableOnInteraction: false,
            }
            , loop: true,
            pagination: {
    
                el: '.swiper-pagination',
                clickable: true,
    
            },
            breakpoints: {
                 300: {
                    slidesPerView: 3,
    
                },
                 420: {
                    slidesPerView: 4,
    
                },
                640: {
                    slidesPerView: 4,
    
                },
                768: {
                    slidesPerView: 5,
    
                },
                1024: {
                    slidesPerView: 5,
    
                },
            }
    
        });

        //  
    var swiper = new Swiper('.swiper-container-exprience', {
        observer: true,  
        observeParents: true,
    autoplay: {

        delay: 5000,
        disableOnInteraction: false,
    }
    , loop: false,


    pagination: {

        el: '.swiper-pagination',
        clickable: true,

    },
    
    breakpoints: {
         300: {
            slidesPerView: 1,

        },
         420: {
            slidesPerView: 1,

        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,

        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,

        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,

        },
    }

});

    //
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

// $('#back-to-top').tooltip('show');

// contact form mail smtp js
let contactForm = document.getElementById('cform');
contactForm.addEventListener('submit', contactFormvalues);
function contactFormvalues(e){
    e.preventDefault();
    console.log('WOrking');
    alert('WOrking On Progress')
   
    contactForm.reset();
   
}






});