export class ResponsiveScale {
  constructor() {
    this.page = document.querySelector('.page');
    if (!this.page) return;

    this.handleResize = this.handleResize.bind(this);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  handleResize() {
    const vw = window.innerWidth;
    const scale = vw / 1920;

    if (scale < 1) {
      this.page.style.zoom = scale;
    } else {
      this.page.style.zoom = '';
    }
  }
}
