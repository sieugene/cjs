import { dom } from "./core/Dom";
// import { Component } from "./core/Component";
import { Core } from "./core/Core";

class CJS extends Core {
  constructor(components = [], selector) {
    super(dom(selector).$element, {
      components,
    });
    this.$selector = this.root;
    this.$components = this.components;
  }
  render() {
    this.injectChilds();
  }
}

export default CJS;
