class Modal {
  constructor (opt = {}) {
    const { triggerId } = opt;
    this.triggerId = triggerId;
    this.windowTop = 0;
  }

  init () {
    this.bindEvents();
  }

  bindEvents () {
    $(this.triggerId).on('click', event => {
      event.preventDefault();
      const modalId = $(event.currentTarget).data('modal');
      if ($(modalId)) this.open(modalId);
    });

    $(document).on('click', '.js-modal-close, .js-modal-overlay', () => {
      this.close();
    });
  }

  open (id) {
    const modalData = $(`#${id}`).html();
    if (!modalData) return false;

    const modalHtml = this.setHtml(modalData);
    this.windowTop = $(window).scrollTop();
    $('body')
      .addClass('is-modal-open')
      .css('top', `-${this.windowTop}px`)
      .append(modalHtml);
    $('.js-modal').show();
  }

  close () {
    $('body')
      .removeClass('is-modal-open')
      .css('top', 0);
    $(window).scrollTop(this.windowTop);
    $('.js-modal').hide();
    $('.js-modal').remove();
  }

  setHtml (content) {
    const ModalHtml = `
      <div class="p-modal js-modal">
      <div class="p-modal__overlay js-modal-overlay"></div>
        <div class="p-modal__content">
          ${content}
          <p class="p-modal__close js-modal-close"></p>
        </div>
      </div>
    `;
    return ModalHtml;
  }
}

export default Modal;
