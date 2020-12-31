class Dom {
  constructor(selector) {
    this.$element =
      selector && typeof selector === "object"
        ? selector
        : document.querySelector(selector);
  }
  find(selector) {
    return this.$element.querySelector(selector);
  }
  html(content) {
    if (!content) {
      throw new Error("Children must be contain content!");
    }
    this.$element.innerHTML = content
      .trim()
      .split("\n")
      .map((line) => line.trim())
      .join("\n");
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
