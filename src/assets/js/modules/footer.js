class Footer {
  init () {
    this.footerBottom();
  }

  footerBottom () {
    const footerH = $('.l-footer').height();
    const winH = $(window).height();

    $('body').css({
      'min-height': winH + 'px',
      'padding-bottom': footerH + 'px'
    });
  }
}

export default Footer;
