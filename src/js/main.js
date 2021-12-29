// ================================================== исключение по наименованию страницы
// const contactsPage = window.location.pathname == '/contacts.html'
// if(contactsPage){
//     ...
// }

// ================================================== исключение по селектору
const body = document.querySelector('body');
if (!body.querySelector('.main-page')) {
    body.style.padding = '300px 0 0 0';
}

// ================================================== ПЕРЕМЕННЫЕ
const header = document.querySelector('.header')
// ================================================== ПРОКРУТКА, ШАПКА
document.addEventListener('DOMContentLoaded', function () {
    // СКРОЛЛ К НУЖНОЙ СЕКЦИИ ПО КЛИКУ НА ПУНКТАХ МЕНЮ
    $('.menu__link').click(function () {
        var scroll_elem = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(scroll_elem).offset().top
        }, 1000);
    });
    // ДОБАВЛЯЕМ АКТИВНЫЙ КЛАСС ШАПКЕ
    function headerActiveToggle() {
        const scrollSize = window.pageYOffset
        scrollSize > 1 ? header.classList.add('active') : header.classList.remove('active')
    }
    window.addEventListener('load', headerActiveToggle) // ПРИ ПЕРЕЗАГРУЗКЕ СТРАНИЦЫ ЕСЛИ СТРАНИЦА УЖЕ ПРОСКРОЛЛЕНА
    window.addEventListener('scroll', headerActiveToggle) // ПРИ СКРОЛЛЕ
});

// ================================================== МАСКА ДЛЯ ИНПУТОВ (https://github.com/RobinHerbots/Inputmask)
$(document).ready(function () {
    $(".phone").inputmask({
        mask: "+7 999 999 99 99",
        clearIncomplete: true
    });
    $('.email').inputmask({
        mask: "*{1,20}[.*{1,20}]@*{1,20}.*{2,4}",
        clearIncomplete: true
    //     greedy: false,
    //     onBeforePaste: function (pastedValue, opts) {
    //         pastedValue = pastedValue.toLowerCase();
    //         return pastedValue.replace("mailto:", "");
    //     },
    //     definitions: {
    //         '*': {
    //             validator: "[0-9A-Za-z-а-я-]",
    //             casing: "lower"
    //         }
    //     }
    });
    $(".date").inputmask({
        mask: "99/99/9999",
        clearIncomplete: true,
        'placeholder': 'dd/mm/yyyy'
    });
});

// ================================================== СЛАЙДЕРЫ (https://kenwheeler.github.io/slick/)
document.addEventListener('DOMContentLoaded', function () {
    $('.slider').slick({
        fade: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        // prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        // nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // пользовательская навигация
    // var dot = $(".dots__item");
    // $('.slider').on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    //     dot.removeClass("dots__item--active").eq(nextSlide).addClass("dots__item--active")
    // });
    // dot.on("click", function () {
    //     var i = dot.index(this);
    //     $('.slider').slick("slickGoTo", i)
    // });
    // $(".prev").on("click", function () {
    //     $('.slider').slick("slickPrev")
    // });
    // $(".next").on("click", function () {
    //     $('.slider').slick("slickNext")
    // });

});
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 

// ================================================== КАРТА, ОТЛОЖЕННАЯ ЗАГРУЗКА (ЧТОБЫ УЛУЧШИТЬ ПОКАЗАТЕЛИ - PageSpeed Insights)
// document.addEventListener('DOMContentLoaded', function () {
//     setTimeout(function() {
//         var headID = document.getElementsByTagName("body")[0];         
//         var newScript = document.createElement('script');
//         newScript.type = 'text/javascript';
//         newScript.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
//         headID.appendChild(newScript);
//     }, 3000);
//     setTimeout(function() {
//         var myMap = new ymaps.Map('map', {
//             center: [48.570612, 39.341628],
//             zoom: 16
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),
//             MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//                 '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//             ),
//             myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//                 hintContent: 'г. Луганск, кв. Лиховида 1',
//                 balloonContent: 'г. Луганск, кв. Лиховида 1'
//             }, {
//                 iconLayout: 'default#image',
//                 iconImageHref: 'img/logo_sign.png',
//                 iconImageSize: [40, 45],
//                 iconImageOffset: [-5, -38]
//             })
//         myMap.geoObjects
//             .add(myPlacemark)
//     }, 4000);
// });
