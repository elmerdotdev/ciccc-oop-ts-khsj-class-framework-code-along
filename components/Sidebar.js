import { Component } from "../common/Component.js";

export class Sidebar extends Component {
  render() {
    const sidebar = document.createElement('aside')
    sidebar.innerHTML = `
      <h3>Quick Links</h3>
      <ol>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms &amp; Conditions</a></li>
      </ol>
    `

    return sidebar;
  }
}