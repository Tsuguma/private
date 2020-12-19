import slick from 'slick-carousel';
import Common from './common';

class Slide {
  constructor (opt = {}) {
    const { slideId, slideItemId = '.js-slide-detail-item', slideOptions, slideMode = 'default', controlPrev, controlNext, controlCurrent, controlImgChange = '.js-slide-img-change', sp, pc } = opt;
    this.slideId = slideId;
    this.slideItemId = slideItemId;
    this.slideOptions = slideOptions;
    this.slideMode = slideMode;
    this.controlPrev = controlPrev;
    this.controlNext = controlNext;
    this.controlCurrent = controlCurrent;
    this.controlImgChange = controlImgChange;
    this.sp = sp;
    this.pc = pc;

    const common = new Common();
    this.breakPoint = common.breakPointSP;
  }

  init () {
    if ($(this.slideId)) {
      this.bindEvents();
    }
  }

  bindEvents () {
    // PC, SP
    if (this.sp && this.pc) {
      $(this.slideId).slick(this.slideOptions);
    }

    // SP only
    if (this.sp && !this.pc) {
      this.onlySP();

      $(window).on('resize', () => {
        this.onlySP();
      });
    }

    // PC only
    if (!this.sp && this.pc) {
      this.onlyPC();

      $(window).on('resize', () => {
        this.onlyPC();
      });
    }

    // Detail Mode
    if (this.slideMode === 'detail') {
      this.controller();
    }
  }

  onlySP () {
    const w = $(window).innerWidth();
    if (w <= this.breakPoint) {
      $(this.slideId).not('.slick-initialized').slick(this.slideOptions);
    } else if ($(this.slideId).hasClass('slick-initialized')) {
      $(this.slideId).slick('unslick');
    }
  }

  onlyPC () {
    const w = $(window).innerWidth();
    if (w >= this.breakPoint) {
      $(this.slideId).not('.slick-initialized').slick(this.slideOptions);
    } else if ($(this.slideId).hasClass('slick-initialized')) {
      $(this.slideId).slick('unslick');
    }
  }

  controller () {
    $(this.controlPrev).on('click', () => {
      $(this.slideId).slick('slickPrev');
    });

    $(this.controlNext).on('click', () => {
      $(this.slideId).slick('slickNext');
    });

    $(this.slideId).on('afterChange', (event, slick, currentSlide, nextSlide) => {
      const current = $(`[data-slick-index="${currentSlide}"]`).find(this.slideItemId);
      const prev = $(`[data-slick-index="${currentSlide - 1}"]`).find(this.slideItemId);
      const next = $(`[data-slick-index="${currentSlide + 1}"]`).find(this.slideItemId);

      $(this.controlPrev).html(`<span>${prev.data('slide-name')}</span>`);
      $(this.controlNext).html(`<span>${next.data('slide-name')}</span>`);
      $(this.controlCurrent).html(`${current.data('slide-name')}<span>営業時間 ${current.data('slide-time')}</span>`);
    });

    $(this.controlImgChange).on('click', event => {
      event.preventDefault();
      const slideType = $(event.currentTarget).data('slide-type-target');

      $(event.currentTarget)
        .addClass('is-active')
        .siblings(this.controlImgChange).removeClass('is-active');

      $(this.slideId).attr('data-slide-type', slideType);
    });
  }

  changeType () {

  }
}

export default Slide;
