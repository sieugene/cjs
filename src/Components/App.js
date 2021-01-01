export const App = () => {
  function some() {
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
          <h3 class="test" @onclick="some">   Шаблон 1!!!! text in h3     </h3>
        <Component2/>
        <Component3/>
      </div>`,
    events: {
      some: () => some(),
    },
  };
};
export const App2 = () => {
  function some(e) {
    alert("was click");
  }
  function onhandler(event) {
    debugger;
  }
  return {
    props: {
      children: {},
    },
    children: `<div id="APP2" @onclick="some">
    <div>чилд нода</div>
          NEW TEST1221321321312312
          <input @onchange="onhandler" placeholder="text input events test"/>
      </div>`,
    events: {
      some: (e) => some(e),
      onhandler: (e) => onhandler(e),
    },
  };
};
const Component2 = () => {
  function some() {
    alert("test");
  }
  return {
    props: "",
    children: `<div id="ISA">
      Шаблон 2!!!!
        <div>
          <h3 class="test from 2" @onclick="some">--------------</h3>
        </div>
      </div>`,
    events: {
      some: () => some(),
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
