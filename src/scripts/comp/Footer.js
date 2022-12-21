class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <footer>
            <ul>
             <li>Copyright @ 2022 - RESLOG</li>
            </ul>
          </footer>
          `;
  }
}
customElements.define('custom-footer', Footer);
