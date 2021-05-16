$(function () {
  // SPメニュー
  $('.js-sp-menu-target').on('click', function () {
    $(this).toggleClass('active');
    $('.nav-menu').toggleClass('active');
  });
  $('.menu-item').on('click', function () {
    $('.js-sp-menu-target').removeClass('active');
    $('.nav-menu').removeClass('active');
  });
});