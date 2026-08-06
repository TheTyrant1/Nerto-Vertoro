export class ReviewsSlider {
  constructor(root) {
    this.root = root;
    this.track = root.querySelector('.reviews__track');
    this.cards = [...root.querySelectorAll('.review-card')];
    this.prevBtn = root.querySelector('.reviews__arrow--prev');
    this.nextBtn = root.querySelector('.reviews__arrow--next');
    this.currentIndex = 1;
    this.gap = 50;

    this.prevBtn?.addEventListener('click', () => this.prev());
    this.nextBtn?.addEventListener('click', () => this.next());

    this.update();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    this.update();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    this.update();
  }

  update() {
    this.cards.forEach((card, index) => {
      const isActive = index === this.currentIndex;
      card.classList.toggle('review-card--side', !isActive);
    });

    const widths = this.cards.map((_, index) =>
      index === this.currentIndex ? 1180 : 934
    );

    let cardStart = 0;
    for (let i = 0; i < this.currentIndex; i++) {
      cardStart += widths[i] + this.gap;
    }

    const cardCenter = cardStart + widths[this.currentIndex] / 2;
    const translateX = cardCenter - 960;

    this.track.style.transform = `translateX(-${translateX}px)`;
  }
}
