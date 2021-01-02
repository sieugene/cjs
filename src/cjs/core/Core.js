import { Component } from "./Component";

export class Core {
  constructor(root, options) {
    this._root = root ? root : undefined;
    this._components = options && options.components && options.components;
  }
  _append(childs) {
    if (this._root.appendChild && this._root.appendChild && childs) {
      childs.forEach(($child) => {
        this._root.appendChild($child);
      });
    } else if (!childs) {
      throw new Error("Not contain childs!");
    } else if (!this._root.appendChild) {
      throw new Error("Root not have appendChild method!");
    }
  }
  injectChilds() {
    const childs = this._prepareComponents();
    if (childs && childs.length >= 1) {
      this._append(childs);
    } else {
      throw new Error("Must be contain child component");
    }
  }
  _prepareComponents() {
    if (this._components && this._components.length >= 1) {
      const components = [];
      this._components.forEach(($component) => {
        if (!$component || !$component().children) {
          throw new Error("Component not have are children!");
        }
        const component = new Component(
          "div",
          $component().children,
          $component().props,
          $component().events
        );
        components.push(...component.createComponent());
      });

      return components;
    }
    return false;
  }
  get root() {
    return this._root;
  }
  get components() {
    return this._components;
  }
}
