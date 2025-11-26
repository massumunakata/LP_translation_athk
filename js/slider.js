jQuery(document).ready(function($){
$('.nya-customer-slider').slick({
autoplay: true,
autoplaySpeed: 0,
speed: 32000,
cssEase: 'linear',
arrows: false,
dots: false,
infinite: true,
slidesToShow: 5,
slidesToScroll: 1,
pauseOnHover: false,
pauseOnFocus: false,
pauseOnDotsHover: false,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3
}
},
{
breakpoint: 768,
settings: {
slidesToShow: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1
}
}
]
});
});


