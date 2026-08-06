import '../scss/app.scss';
import { SmoothScroll } from './components/SmoothScroll.js';
import { ReviewsSlider } from './components/ReviewsSlider.js';
import { ResponsiveScale } from './components/ResponsiveScale.js';

document.addEventListener('DOMContentLoaded', () => {
  new ResponsiveScale();
  new SmoothScroll();

  const reviewsSlider = document.querySelector('.reviews__slider');
  if (reviewsSlider) {
    new ReviewsSlider(reviewsSlider);
  }
});
