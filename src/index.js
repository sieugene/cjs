import CJS from "./cjs/index";

function Component() {
  return {
    tag: "div",
    inner: "ТЕКСТ!!!!!!!!",
    event: "onclick",
    fn: () => {
      alert("test");
    },
  };
}

const app = new CJS([Component()], "#root");
app.render();
