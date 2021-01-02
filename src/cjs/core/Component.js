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
    const compareEvents = Object.keys(this.$props.children).reduce(
      (allEvents, component) => {
        if (this.$props.children[component]) {
          const Component = this.$props.children[component]();
          allEvents = {
            ...allEvents,
            ...Component.events,
          };
        }
        return allEvents;
      },
      this.$events
    );
    return prepareEvents(
      template ? template : this.$content,
      getEventsChildren(compareEvents),
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
