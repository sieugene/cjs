class Dom {
  constructor(selector) {
    this.$element = selector ? document.querySelector(selector) : undefined;
  }
  find(selector) {
    return this.$element.querySelector(selector);
  }
  html(content) {
    if (!content) {
      throw new Error("Children must be contain content!");
    }
    this.$element.innerHTML = content;
  }
  create(tagName, classes = "") {
    const el = document.createElement(tagName);
    if (classes && classes !== "") {
      el.classList.add(classes);
    }
    return dom(el);
  }
}

export function dom(selector) {
  return new Dom(selector);
}
