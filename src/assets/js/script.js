import Common from './modules/common';
import SmoothScroll from './modules/smooth-scroll';
import Header from './modules/header';
import Footer from './modules/footer';
import Modal from './modules/modal';
import Tooltip from './modules/tooltip';
import Tab from './modules/tab';
import Slide from './modules/slide';
import Graph from './modules/graph';
import Form from './modules/form';
import ButtonScroll from './modules/button-scroll';

const common = new Common();
$(window).on('load resize', function () {
  common.imgSwitch();
});

// SmoothScroll
const smoothScroll = new SmoothScroll();
smoothScroll.init();

// Header
const header = new Header();
header.init();

// Footer
const footer = new Footer();
$(window).on('load resize', function () {
  footer.init();
});

// Modal
const modal = new Modal({
  triggerId: '.js-modal-trigger'
});
modal.init();

// Tooltip
const tooltip = new Tooltip({
  triggerId: '.js-tooltip-trigger'
});
tooltip.init();

// Tab
const tab = new Tab({
  triggerId: '.js-tab-trigger',
  contentId: '.js-tab-content'
});
tab.init();

// Slide
const slideCard = new Slide({
  slideId: '.js-slide-card',
  slideOptions: {
    speed: 300,
    variableWidth: true,
    dots: true,
    arrows: false
  },
  sp: true,
  pc: false
});
slideCard.init();

const slideDetail = new Slide({
  slideId: '.js-slide-detail',
  slideItemId: '.js-slide-detail-item',
  slideMode: 'detail',
  controlPrev: '.js-slide-detail-prev',
  controlNext: '.js-slide-detail-next',
  controlCurrent: '.js-slide-detail-current',
  controlImgChange: '.js-slide-img-change',
  slideOptions: {
    speed: 300,
    variableWidth: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          variableWidth: false,
          centerMode: false
        }
      }
    ]
  },
  sp: true,
  pc: true
});
slideDetail.init();

// Graph
const slideGraph = new Graph({
  graphAreaId: '.js-slide-detail',
  graphChangeTrigger: '.js-graph-change'
});
slideGraph.init();

// Form
const notificationForm = new Form({
  formId: '.js-form',
  formItemId: '.js-form-item',
  formSubmitButtonId: '.js-form-submit',
  formLinkedItemId: '.js-form-linked'
});
notificationForm.init();
// ButtonScroll
const buttonScroll = new ButtonScroll();
buttonScroll.init();
