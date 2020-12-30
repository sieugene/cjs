import CJS from "./cjs/index";
const Component = () => {
  return {
    props: "",
    children: `<div id="a">Тест вывода контента</div>`,
    components: {},
    events: {
      onClick: () => {
        alert("was click");
      },
    },
  };
};
const app = new CJS([Component], "#root");
app.render();
