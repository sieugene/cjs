import { removeWhiteSpace } from "./helper.functions";
//Object to array
export function toArray(obj) {
  return obj && Object.values(obj).length !== 0
    ? obj && Object.keys(obj).map((key) => obj[key])
    : [];
}
//Events children
export function getEventsChildren(events) {
  return toArray(events);
}
//Props children
export function getPropsChildrens(props) {
  return toArray(props.children && props.children);
}
//-------------Template
//Template_Component_children
function findComponentInTemplate($component) {
  const name = $component && $component.name ? $component.name : "";
  const componentInTemplate = `<${name}/>`;
  return componentInTemplate;
}
export function prepareTemplate(template, ComponentChildrens) {
  if (template && typeof template === "string" && template.length >= 1) {
    let _prepareTemplate = removeWhiteSpace(template);
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
    debugger
    return _prepareTemplate;
  } else {
    throw new Error("Template can't be prepared");
  }
}
//Template_Component_events
function findEvenInTemplate(template) {
  const regular = new RegExp(/(@[\s\S]*?"[\s\S]*?")/g);
  if (template && typeof template === "string" && template.length >= 1) {
    return template.match(regular);
  } else {
    return "";
  }
}
//Get attribute name, format for getAttribute, original for checkout equal
function getEventAttibuteName(findEventInTemplate) {
  const regular = new RegExp(/(@[\s\S]*?=)/g);
  return (
    findEventInTemplate &&
    findEventInTemplate.length >= 1 &&
    findEventInTemplate
      .map(
        (attribute) =>
          attribute.match(regular) && {
            original: attribute,
            formatted: attribute.match(regular)[0].replace("=", ""),
          }
      )
      .filter((a) => !!a)
  );
}
//Set event in node child
function attributeBindingEqualSet(children, fn, attribute, _protoEventName) {
  fn.forEach((eventFn) => {
    if (eventFn.eventAttribute === attribute.original) {
      children[_protoEventName] = eventFn.fn;
      children.removeAttribute(attribute.formatted);
    }
  });
}
function setEvent(children, attributes, fn) {
  if (attributes && attributes.length >= 1) {
    attributes.forEach((attribute) => {
      const _protoEventName =
        attribute &&
        attribute.formatted &&
        attribute.formatted.replace("@", "");
      if (
        children &&
        attribute &&
        children.getAttribute(attribute.formatted) &&
        _protoEventName
      ) {
        attributeBindingEqualSet(children, fn, attribute, _protoEventName);
      }
    });
  }
}
//Bindings for condition checkout event for child
function bindingsEventsNames(ComponentEvents, findEventInTemplatee) {
  const condition =
    ComponentEvents &&
    ComponentEvents.length >= 1 &&
    findEventInTemplatee &&
    findEventInTemplatee.length >= 1
      ? true
      : false;
  return condition
    ? ComponentEvents.reduce((binded, current) => {
        findEventInTemplatee.forEach((find) => {
          if (find.includes(current.name)) {
            binded = [
              ...binded,
              {
                eventAttribute: find,
                fn: current,
              },
            ];
          }
        });
        return binded;
      }, [])
    : [];
}
function addEventsChildrens(ComponentEvents, template, fragmentChildrens) {
  const findEventInTemplatee = findEvenInTemplate(template);
  const attributesNames = getEventAttibuteName(findEventInTemplatee);
  const bindedEvenets = bindingsEventsNames(
    ComponentEvents,
    findEventInTemplatee
  );
  const nodeParent =
    fragmentChildrens && fragmentChildrens.length >= 1 && fragmentChildrens[0];
  const childNodes = [
    nodeParent,
    ...Array.prototype.slice.call(nodeParent.children),
  ];
  childNodes.forEach((children) =>
    setEvent(children, attributesNames, bindedEvenets)
  );
  return childNodes;
}
export function prepareEvents(template, ComponentEvents, fragmentChildrens) {
  if (template && typeof template === "string" && template.length >= 1) {
    const preparedEvents = [];
    preparedEvents.push(
      ...addEventsChildrens(ComponentEvents, template, fragmentChildrens)
    );
    return preparedEvents;
  } else {
    throw new Error("Template events can't be prepared");
  }
}
