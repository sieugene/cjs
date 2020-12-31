//Props children
export function getPropsChildrens(props) {
  return props && Object.values(props).length !== 0
    ? props.children &&
        Object.keys(props.children).map((children) => props.children[children])
    : undefined;
}
//Template
function findComponentInTemplate($component) {
  const name = $component && $component.name ? $component.name : "";
  const componentInTemplate = `<${name}/>`;
  return componentInTemplate;
}
export function prepareTemplate(template, ComponentChildrens) {
  if (template && typeof template === "string" && template.length >= 1) {
    let _prepareTemplate = template.trim();
    ComponentChildrens.forEach(($component) => {
      const name = findComponentInTemplate($component);
      if (_prepareTemplate.includes(name)) {
        _prepareTemplate = _prepareTemplate.replace(
          name,
          $component().children
        );
      } else {
        throw new Error(
          `Component ${name} in props children not found in template!`
        );
      }
    });
    return _prepareTemplate;
  } else {
    throw new Error("Template can't be prepared");
  }
}
