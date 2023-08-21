import { loop, setup } from "./examples/example-1";
import "./style.css";

window.onload = setup;

const update = () => {
  requestAnimationFrame(update);
  loop();
};

setTimeout(() => {
  update();
}, 1000);