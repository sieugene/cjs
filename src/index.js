import CJS from "./cjs/index";
import { App, App2 } from "./Components/App";

const app = new CJS([App, App2], "#root");
app.render();
