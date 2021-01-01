import { dom } from "./Dom";
import {
  prepareEvents,
  getEventsChildren,
  getPropsChildrens,
  prepareTemplate,
} from "./../utils/component.functions";

export class Component {
  constructor(tag, content, props = {}, events = {}) {
    this.$content = content ? content : "";
    this.$tag = tag
      ? new dom(document.createElement(tag))
      : new dom(document.createElement("div"));
    this.$props = props ? props : {};
    this.$events = events ? events : {};
  }
  createFragment() {
    return document.createDocumentFragment();
  }
  addEvents(template, fragmentChildrens) {
    return prepareEvents(
      template ? template : this.$content,
      getEventsChildren(this.$events),
      fragmentChildrens
    );
  }
  createComponent() {
    const frag = this.createFragment();
    const elem = this.$tag.$element;
    const template = this.createTemplate(this.$content, this.$props);
    this.$tag.html(template);
    while (elem.childNodes[0]) {
      frag.appendChild(elem.childNodes[0]);
    }
    const nodeWithEvents = this.addEvents(template, frag.children);
    return nodeWithEvents;
  }
  createTemplate(template, props) {
    const ComponentChildrens = getPropsChildrens(props);
    return prepareTemplate(template, ComponentChildrens);
  }
}
