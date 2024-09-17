import { Component } from "../common/Component.js";
import { Menu } from "./Menu.js";

export class Header extends Component {
  render() {
    const header = document.createElement('header')
    header.innerHTML = `
        <div>LOGO</div>
        <nav></nav>
    `

    // Append menu to nav
    const menu = new Menu().render()
    header.querySelector('nav').appendChild(menu)

    return header;
  }
}