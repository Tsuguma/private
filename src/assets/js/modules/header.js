class Header {
  init () {
    this.spMenu();
    this.spSearch();
  }

  spMenu () {
    const winH = $(window).height();
    const $nav = $('.l-header__nav');
    const headerH = $('.l-header').outerHeight();
    const menuH = winH - headerH;
    const $menu = $('.js-header-menu');
    const $overlay = $('.js-overlay');

    $nav.css('max-height', menuH + 'px');

    $menu.on('click', function () {
      $(this).children('.l-header__menu-hamburger').toggleClass('is-open');
      $nav.slideToggle('fast');

      // 背景固定
      $('body').toggleClass('is-header-open');
      $overlay.toggleClass('is-active');

      // search 解除
      $('.l-header__search').removeClass('is-open');
      $('.l-header__search-area').hide();
    });

    const $trigger = $('.js-header-nav-trigger');
    $trigger.on('click', function () {
      $(this).toggleClass('is-open');
      $(this).next('ul').toggleClass('is-open');
    });
  }

  spSearch () {
    const $search = $('.js-header-search');
    $search.on('click', function () {
      $(this).toggleClass('is-open');
      $(this).next('.l-header__search-area').slideToggle('fast');

      // menu解除
      $('.l-header__menu-hamburger').removeClass('is-open');
      $('.l-header__nav').hide();
    });
  }
}


export default Header;
