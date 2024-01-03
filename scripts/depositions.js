$(document).ready(function(){
  $('.depositions--content').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/arrow-left.png'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='./assets/arrow-right.png'>",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
