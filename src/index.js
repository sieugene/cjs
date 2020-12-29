import { test } from "./test";
import './index.scss';

async function component() {
  const element = document.createElement("div");
  const res = await fetching();
  console.log(res);
  return element;
}
//works ES6, async
const fetching = async () => {
  return new Promise((resolve) => {
    const likeTest = () => {
      resolve("fetch success!");
    };
    setTimeout(() => likeTest(), 1500);
  });
};

component();
test();
