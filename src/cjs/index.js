import { dom } from "./core/Dom";
<<<<<<< HEAD
import { Core } from "./core/Core";
=======
>>>>>>> 6157904b0d22634f27aaf806235590e98a738f2a

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
