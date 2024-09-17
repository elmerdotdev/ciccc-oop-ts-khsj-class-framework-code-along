import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement('footer')
    footer.innerHTML = `
      <p>${this.props.footerText}</p>
    `

    return footer;
  }
}