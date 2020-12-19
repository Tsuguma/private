class Common {
  constructor (opt = {}) {
    this.mediaSwitchFlag = opt.mediaSwitchFlag || 'pc';
    this.supportTab = opt.supportTab || false; // タブレット幅対応か否か（初期値 非対応）
    this.breakPointSP = opt.breakPointSP || 750; // スマホブレイクポイント（初期値 750px）
    this.breakPointTAB = opt.breakPointTAB || 1023; // タブレットブレイクポイント（初期値 1023px）
  }

  init () {
    this.getEnvironment();
  }

  getEnvironment () {
    const self = this;
    const userAgent = window.navigator.userAgent.toLowerCase();
    const appVersion = window.navigator.appVersion.toLowerCase();
    let browser;
    let device;
    let software;
    let media;

    // ブラウザ
    if (userAgent.indexOf('msie') !== -1) {
      if (appVersion.indexOf('msie 9.') !== -1) {
        browser = 'ie9';
      } else if (appVersion.indexOf('msie 10.') !== -1) {
        browser = 'ie10';
      } else {
        browser = 'ie';
      }
    } else if (userAgent.indexOf('trident/7') !== -1) {
      browser = 'ie11';
    } else if (userAgent.indexOf('chrome') !== -1) {
      browser = 'chrome';
    } else if (userAgent.indexOf('safari') !== -1) {
      browser = 'safari';
    } else if (userAgent.indexOf('gecko') !== -1) {
      browser = 'gecko';
    } else {
      browser = false;
    }

    // デバイス
    if (userAgent.indexOf('ipad') > 0 || (userAgent.indexOf('android') > 0 && userAgent.indexOf('mobile') < 0)) {
      device = 'tab';
    } else if (userAgent.indexOf('iphone') > 0 || userAgent.indexOf('iPod') > 0 || userAgent.indexOf('android') > 0) {
      device = 'sp';
    } else {
      device = 'pc';
    }

    // OS
    if (userAgent.indexOf('android') > 0) {
      software = 'android';
    } else if (userAgent.indexOf('iphone') > 0 || userAgent.indexOf('iPod') > 0 || userAgent.indexOf('ipad') > 0) {
      software = 'ios';
    } else if (userAgent.indexOf('windows') > 0) {
      software = 'windows';
    } else if (userAgent.indexOf('Mac') > 0) {
      software = 'mac';
    }

    // 画面幅(media)
    const breakPointSP = self.breakPointSP;
    const breakPointTAB = self.breakPointTAB;
    const supportTab = self.supportTab;
    if (window.matchMedia('(max-width: ' + breakPointSP + 'px)').matches) {
      media = 'sp';
    } else if (supportTab && window.matchMedia('(min-width: ' + (breakPointSP + 1) + 'px) and (max-width: ' + breakPointTAB + 'px)').matches) {
      media = 'tab';
    } else {
      media = 'pc';
    }
    return {
      browser,
      device,
      software,
      media
    };
  }

  imgSwitch () {
    const media = this.getEnvironment().media;
    const before = media === 'sp' ? '_pc' : '_sp';
    const after = media === 'sp' ? '_sp' : '_pc';

    $.each($('.js-img-switch'), function () {
      $(this).attr('src', $(this).attr('src').replace(before, after));
    });
  }
}

export default Common;
