export const App = () => {
  function some1() {
    alert("test");
  }
  return {
    props: {
      children: {
        Component2: () => Component2(),
        Component3: () => Component3(),
      },
    },
    children: `<div class="wrap">
          <h3 class="test" @onclick="some1">   Шаблон 1!!!! text in h3     </h3>
        <Component2/>
        <Component3/>
      </div>`,
    events: {
      some1: () => some1(),
    },
  };
};
export const App2 = () => {
  function some2(e) {
    alert("was click");
  }
  function onhandler(event) {}
  return {
    props: {
      children: {},
    },
    children: `<div id="APP2" @onclick="some2">
    <div>чилд нода</div>
          NEW TEST1221321321312312
          <input @onchange="onhandler" placeholder="text input events test"/>
      </div>`,
    events: {
      some2: (e) => some2(e),
      onhandler: (e) => onhandler(e),
    },
  };
};
const Component2 = () => {
  function some3() {
    alert("test");
  }
  return {
    props: "",
    children: `<div id="ISA" @onclick="some3">
      Шаблон 2!!!!
        <div>
          <h3 class="test from 2">--------------</h3>
        </div>
      </div>`,
    events: {
      some3: () => some3(),
    },
  };
};
const Component3 = () => {
  return {
    props: "",
    children: `<div id="3">
        <div>
          <h3 class="test">333333333333333</h3>
        </div>
      </div>`,
    events: {
      onClick: () => {
        alert("was click");
      },
    },
  };
};
