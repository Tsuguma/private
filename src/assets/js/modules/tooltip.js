class Tooltip {
  constructor (opt = {}) {
    const { triggerId } = opt;
    this.triggerId = triggerId;
  }

  init () {
    this.TooltipContent();
  }

  TooltipContent () {
    if (window.matchMedia && window.matchMedia('(max-device-width: 750px)').matches) {
      const _self = this;
      $(this.triggerId).on('click', function (event) {
        event.preventDefault();
        const tooltipId = $(this).data('tooltip');
        if ($(tooltipId)) _self.open(tooltipId);
      });

      $(document).on('click', '.js-tooltip-close, .js-tooltip-overlay', function () {
        _self.close();
      });
    } if (window.matchMedia && window.matchMedia('(min-device-width: 751px)').matches) {
      $('.js-tooltip-trigger').mouseover(function (event) {
        event.preventDefault();
        $(this).next().slideToggle(0);
      });
      $('.js-tooltip-trigger').mouseout(function (event) {
        event.preventDefault();
        $(this).next().slideToggle(0);
      });
    }
  }

  open (id) {
    const tooltipData = $(`#${id}`).html();
    const tooltipHtml = this.setHtml(tooltipData);
    $('body').addClass('is-tooltip-open').append(tooltipHtml);
    $('.js-tooltip').show();
  }

  close () {
    $('body').removeClass('is-tooltip-open');
    $('.js-tooltip').hide();
    $('.js-tooltip').remove();
  }

  setHtml (content) {
    const TooltipHtml = `
      <div class="p-tooltip-modal js-tooltip">
      <div class="p-tooltip-modal__overlay js-tooltip-overlay"></div>
        <div class="p-tooltip-modal__content">
          ${content}
          <p class="p-tooltip-modal__close js-tooltip-close"></p>
        </div>
      </div>
    `;
    return TooltipHtml;
  }
}

export default Tooltip;
