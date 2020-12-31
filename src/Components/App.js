export const App = () => {
  return {
    props: {
      children: {
        Component2: () => Component2(),
        Component3: () => Component3(),
      },
    },
    children: `<div id="a">
        <div>
          <h3 class="test">   Шаблон 1!!!! text in h3           </h3>
        </div>
        Шаблон 1!!!!
        <Component2/>
        <Component3/>
      </div>`,
    events: {
      onClick: () => {
        alert("was click");
      },
    },
  };
};
export const App2 = () => {
  return {
    props: {
      children: {},
    },
    children: `<div id="test">
          NEW TEST
      </div>`,
    events: {
      onClick: () => {
        alert("was click");
      },
    },
  };
};
const Component2 = () => {
  return {
    props: "",
    children: `<div id="a">
      Шаблон 2!!!!
        <div>
          <h3 class="test">--------------</h3>
        </div>
      Тест вывода контента213123   Шаблон 2
      </div>`,
    events: {
      onClick: () => {
        alert("was click");
      },
    },
  };
};
const Component3 = () => {
  return {
    props: "",
    children: `<div id="a">
      Шаблон 3!!!!
        <div>
          <h3 class="test">TEST!!!</h3>
        </div>
      Тест вывода контента213123   Шаблон 3
      </div>`,
    events: {
      onClick: () => {
        alert("was click");
      },
    },
  };
};
