let swiper = new Swiper(".main-swiper__wrapper", {

  pagination: {
    el: ".swiper-pagination",

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



let swiper1 = new Swiper(".brends-swiper__wrapper", {
  slidesPerView: 6,
  loop: true,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});







$(function () {

  $(".catalog-goods__btn").on("click", function () {
    $('.catalog-goods__menu').toggleClass("catalog-goods__menu--active");
    $('.catalog-goods__btn').removeClass("catalog-goods__btn--active");
    $('.catalog-goods__chevron-right').toggleClass("catalog-goods__chevron-right--active");


  });



  $(".navbar-btn--cart").on("click", function () {
    $('.basket').toggleClass("basket--active");
    $('.overlay').toggleClass("overlay--active");


  });

  $(".basket__btn-close ").on("click", function () {
    $('.basket').toggleClass("basket--active");
    $('.overlay').remove("overlay--active");

  });

  $("body").on("click", function () {
    $('.basket').remove("basket--active");
    $('.overlay').remove("overlay--active");

  });

  $(document).mouseup(function (e) {
    var container = $('.basket');
    if (container.has(e.target).length === 0) {
      container.removeClass('basket--active');
    }
  });

  $(document).mouseup(function (e) {
    var container = $('.overlay');
    if (container.has(e.target).length === 0) {
      container.removeClass('overlay--active');
    }
  });





  $('.quantity-inner .bt-minus').click(function () {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
  });

  $('.quantity-inner .bt-plus').click(function () {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
  });

  $('.quantity-inner .quantity').bind("change keyup input click", function () {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == "") {
      this.value = 1;
    }
    if (this.value > parseInt($(this).data('max-count'))) {
      this.value = parseInt($(this).data('max-count'));
    }
  });


  var containerEl1 = document.querySelector('[data-ref="top-products-filter"]');
  var containerEl2 = document.querySelector('[data-ref="promo-cards"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer1 = mixitup(containerEl2, config);



  $(".star").rateYo({
    numStars: 1,
    ratedFill: "#FFB800",
    starWidth: "16px"
  });

});



// var menu = $('.header');
// $(window).scroll(function () {
//   if ($(window).scrollTop() > 0) {
//     menu.addClass('header--fixid');
//   } else {
//     menu.removeClass('header--fixid');
//   }
// });
