import { Component } from "../common/Component.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { Sidebar } from "./Sidebar.js";

export class App extends Component {
  render() {
    const appContainer = document.createElement('div')
    appContainer.innerHTML = `
      <div class="container">
        <div class="header"></div>
        <div class="content">
          <main>Hello world!</main>
          <div class="sidebar"></div>
        </div>
        <div class="footer"></div>
      </div>
    `

    // Append components to html elements
    const header = new Header().render()
    const footer = new Footer({ footerText: 'Copyright 2024. KHSJ All rights reserved.' }).render()
    const sidebar = new Sidebar().render()

    // Insert components into their respective divs
    appContainer.querySelector('.header').appendChild(header)
    appContainer.querySelector('.footer').appendChild(footer)
    appContainer.querySelector('.sidebar').appendChild(sidebar)

    return appContainer;
  }
}