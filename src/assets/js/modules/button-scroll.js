class ButtonScroll {
  init () {
    this.button();
  }

  button () {
    if (document.getElementsByClassName('p-ticket-button-area').length) {
      window.addEventListener('scroll', () => {
        const elem = document.getElementById('js-button');
        const elemWrap = document.getElementById('js-button-wrap');
        const docHeight = document.body.clientHeight;
        const scrollCount = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollPos = document.documentElement.clientHeight + scrollCount;
        const footerHeight = document.querySelector('.l-footer').clientHeight;
        const elemHeight = document.querySelector('.p-ticket-button-area').clientHeight;

        elemWrap.style.height = elemHeight + 'px';
        if (docHeight - scrollPos <= footerHeight) {
          elem.classList.add('is-stop');
        } else {
          elem.classList.remove('is-stop');
        }
      });
    }
  }
}

export default ButtonScroll;
