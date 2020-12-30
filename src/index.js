import "./index.scss";
import image from "./pipe-copy.jpg";

async function component() {
  const element = document.querySelector("#root");
  element.innerHTML = "hello this basic template";
  const myIcon = new Image();
  myIcon.src = image;
  element.appendChild(myIcon);
  
  console.log("async fn be started");
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
