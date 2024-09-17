import { App } from "./components/App.js";

// Get app element from DOM
const root = document.querySelector('#app')

// Create new app instance
const app = new App()

// Append the app output into the DOM
app.mount(root)