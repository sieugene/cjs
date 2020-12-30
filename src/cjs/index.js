import { dom } from "./core/Dom";

class CJS {
  constructor(components = [], selector) {
    this.$selector = dom(selector);
    this.$components = components;
  }
  render() {
    const childrens = this._prepareComponents();
    // this.$selector.html(childrens);
    const nodes = createElement(childrens)
    this.$selector.$element.appendChild(...nodes)
  }
  _prepareComponents() {
    if (this.$components && this.$components.length >= 1) {
      let content = "";
      this.$components.forEach(($component) => {
        content = content + $component().children;
      });
      return content;
    }
    return false;
  }
}

export default CJS;

function createElement(str) {
  const frag = document.createDocumentFragment();

  const elem = document.createElement("div");
  elem.innerHTML = str;

  while (elem.childNodes[0]) {
    frag.appendChild(elem.childNodes[0]);
  }
  const children = frag.children[0];
  children.onclick = function () {
    alert("Click Event Fired !");
  };
  return frag.childNodes;
}
