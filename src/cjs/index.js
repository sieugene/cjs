import { dom } from "./core/Dom";
import { Component } from "./core/Component";

class CJS {
  constructor(components = [], selector) {
    this.$selector = dom(selector);
    this.$components = components;
  }
  render() {
    this._injectChilds(this._prepareComponents());
  }
  _injectChilds(components) {
    if (components && components.length >= 1) {
      components.forEach((a) => {
        this.$selector.$element.appendChild(a);
      });
    } else {
      throw new Error("Must be contain components");
    }
  }
  _prepareComponents() {
    if (this.$components && this.$components.length >= 1) {
      const components = [];
      this.$components.forEach(($component) => {
        const component = new Component(
          "div",
          $component().children,
          $component().props
        );
        components.push(...component.createComponent());
      });
      return components;
    }
    return false;
  }
}

export default CJS;
