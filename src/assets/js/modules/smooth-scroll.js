class SmoothScroll {
  init () {
    this.bindEvents();
    this.speed = 500;
  }

  bindEvents () {
    $('a[href^="#"]').on('click', event => {
      const href = $(event.currentTarget).attr('href');
      const target = $(href === '#' || href === '' ? 'html' : href);
      const position = target.offset().top;
      $('html, body').animate({ scrollTop: position }, this.speed, 'swing');

      return false;
    });
  }
}

export default SmoothScroll;
