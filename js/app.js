import '../scss/app.scss';
import { SmoothScroll } from './components/SmoothScroll.js';
import { ReviewsSlider } from './components/ReviewsSlider.js';

document.addEventListener('DOMContentLoaded', () => {
  new SmoothScroll();

  const reviewsSlider = document.querySelector('.reviews__slider');
  if (reviewsSlider) {
    new ReviewsSlider(reviewsSlider);
  }
});
