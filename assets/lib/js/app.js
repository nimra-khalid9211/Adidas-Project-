






$(document).ready(function() {
         
  $('.slider').slick({
    
    
    slidesToShow: 3,
    slideToScroll:1,
    fade:false,
    arrows:true,
    dots:false,
    variableWidth:true,
    centerPadding:'40px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots:true,
          
          variableWidth:false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots:true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
        
  $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.cric-slider').slick('setPosition,0');
});


});