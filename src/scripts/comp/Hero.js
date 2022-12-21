class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div>
        <h1 class="hero__title">Welcome</h1>
        <p class="hero__subtitle">Temukan restorant terbaikmu</p>
        <a href="#main-content" class="btn">Read More</a>
        </div>
        `;
  }
}
customElements.define('hero-content', Hero);
