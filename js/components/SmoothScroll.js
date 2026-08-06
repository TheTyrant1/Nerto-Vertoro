import Lenis from 'lenis';

export class SmoothScroll {
  constructor() {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    this.raf = this.raf.bind(this);
    requestAnimationFrame(this.raf);
  }

  raf(time) {
    this.lenis.raf(time);
    requestAnimationFrame(this.raf);
  }
}
