// Base component class
export class Component {
  constructor(props = {}) {
    this.props = props // Stores all props
    this.element = null
  }

  // Placeholder method for child classes to override
  render() {
    throw new Error('Components must use render() method')
  }

  // Mount component to the container in DOM
  mount(container) {
    this.element = this.render()
    container.appendChild(this.element)
  }
}