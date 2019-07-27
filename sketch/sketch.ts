import * as p5 from "p5";
import { Circle, generateRandomCircles } from "./circle";
import { LinkGraphic } from "./LinkGraphic";

const sketch = p5 => {
  // let p: Circle;
  // let lg: LinkGraphic;
  // let toDraw: [p5.Vector[], p5.Vector[]];
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    // const c = generateRandomCircles(2, 40);
    // lg = new LinkGraphic(c[0], c[1]);
    // toDraw = lg.getCircleVectors() as [p5.Vector[], p5.Vector[]];
  };

  p5.windowResized = () => {
    p5.resizeCanvas(windowWidth, windowHeight);
  };

  p5.draw = () => {
    p5.background(p5.color("blue"));
  };
};
new p5(sketch);
