class Tab {
  constructor (opt = {}) {
    const { triggerId, contentId } = opt;
    this.triggerId = triggerId;
    this.contentId = contentId;
  }

  init () {
    this.bindEvents();
  }

  bindEvents () {
    $(this.triggerId).on('click', event => {
      event.preventDefault();
      const tabId = $(event.currentTarget).data('tab');
      console.log(tabId);
      if ($(tabId)) this.change(tabId);
    });
  }

  change (id) {
    $(`${this.triggerId}[data-tab="${id}"`)
      .addClass('is-active')
      .siblings(`${this.triggerId}`).removeClass('is-active');

    $(`${this.contentId}#${id}`)
      .addClass('is-active')
      .siblings(`${this.contentId}`).removeClass('is-active');
  }
}

export default Tab;
