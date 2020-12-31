import { dom } from "./Dom";
import {
  getPropsChildrens,
  prepareTemplate,
} from "./../utils/component.functions";

export class Component {
  constructor(tag, content, props) {
    this.$content = content ? content : "";
    this.$tag = tag
      ? new dom(document.createElement(tag))
      : new dom(document.createElement("div"));
    this.$props = props ? props : {};
  }
  createFragment() {
    return document.createDocumentFragment();
  }
  createComponent() {
    const frag = this.createFragment();
    const elem = this.$tag.$element;
    this.$tag.html(this.createTemplate(this.$content, this.$props));
    while (elem.childNodes[0]) {
      frag.appendChild(elem.childNodes[0]);
    }
    // const children = frag.children[0];
    // children.onclick = function () {
    //   alert("Click Event Fired !");
    // };
    return frag.childNodes;
  }
  createTemplate(template, props) {
    const ComponentChildrens = getPropsChildrens(props);
    return prepareTemplate(template, ComponentChildrens);
  }
}
