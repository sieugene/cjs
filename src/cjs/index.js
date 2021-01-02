import { dom } from "./core/Dom";

class CJS {
  constructor(components = [], selector) {
    this.$selector = new dom(selector);
    this.$components = components;
  }
  render() {
    debugger;
    this.$components.forEach((c) => {
      this.$selector.$element.appendChild(this._createComponent(c));
    });
  }
  _createComponent({ tag, inner, event, fn }) {
    const wrap = document.createElement(tag);
    wrap[event] = fn;
    wrap.innerHTML = inner;
    return wrap;
  }
}

export default CJS;
