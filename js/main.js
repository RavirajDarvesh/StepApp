$(function () {

  "use strict";

  //===== Prealoder

  $(window).on('load', function (event) {
    $('.preloader').delay(500).fadeOut(500);
  });


  //===== Search

  $('#search').on('click', function () {
    $(".search-box").fadeIn(600);
  });
  $('.closebtn').on('click', function () {
    $(".search-box").fadeOut(600);
  });


  //===== Sticky

  $(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".navigation").removeClass("sticky");
      $(".navigation-3 img").attr("src", "images/logo-2.png");
    } else {
      $(".navigation").addClass("sticky");
      $(".navigation-3 img").attr("src", "images/logo.png");
    }
  });


  //===== Mobile Menu

  $(".navbar-toggler").on('click', function () {
    $(this).toggleClass("active");
  });

  var subMenu = $('.sub-menu-bar .navbar-nav .sub-menu');

  if (subMenu.length) {
    subMenu.parent('li').children('a').append(function () {
      return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
    });

    var subMenuToggler = $('.sub-menu-bar .navbar-nav .sub-nav-toggler');

    subMenuToggler.on('click', function () {
      $(this).parent().parent().children('.sub-menu').slideToggle();
      return false
    });

  }
  //===== Back to top

  // Show or hide the sticky footer button
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(200)
    } else {
      $('.back-to-top').fadeOut(200)
    }
  });


  //Animate the scroll to yop
  $('.back-to-top').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: 0,
    }, 1500);
  });
});