    
    window.onload = function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
          document.body.classList.add('loaded');
          document.body.classList.remove('loaded_hiding');
        }, 1000);
      }
    window.addEventListener('DOMContentLoaded', function() {
        $(document).ready(function() {
            $(window).scroll(function() {
                var wScroll = $(this).scrollTop();
    
                if (wScroll > 20) {
                    $('.header').addClass('active');
                    $('.slide-menu').addClass('scrolled');
                }
                else {
                    $('.header').removeClass('active');
                    $('.slide-menu').removeClass('scrolled');
                }
            });
    
            
            $('.slider').slick({
                slideToShow: 1,
                dots: true,
                infinite: true,
                fade: true,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false
            });
            $('.blog-wrapper').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: false,
                responsive:[
                    {
                        breakpoint: 599,
                        settings: {
                            slidesToShow: 2

                        }
                    },
                    {
                        breakpoint: 424,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
            $('.testimonial-slider').slick({
                slidesToShow: 1,
                infinite: true,
                autoplaySpeed: 5000,
                autoplay: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></img></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
            });
            $('.team-slider').slick({
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 6000,
                responsive: [
                    {
                        breakpoint: 599,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            })
        });

        const burger = document.querySelector('.burger'),
              slideMenu = document.querySelector('.slide-menu');
        const toggleMenu = () => {
            slideMenu.classList.toggle('open');
        }

        burger.addEventListener('click', e => {
            e.stopPropagation();

            toggleMenu();
        })

        document.addEventListener('click', e => {
            let target = e.target;
            let its_menu = target == slideMenu || slideMenu.contains(target);
            let its_burger = target == burger;
            let menu_is_active = slideMenu.classList.contains('open');

            if(!its_menu && !its_burger && menu_is_active) {
                toggleMenu();
            }
        })
    });
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
    );
    wow.init();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1200) {
            $('.chevron').fadeIn();
        } else {
            $('.chevron').fadeOut();
        }
    });
    $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    });
    
