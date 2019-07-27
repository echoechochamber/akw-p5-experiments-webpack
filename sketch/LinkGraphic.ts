/// <reference types="p5/global" />
import { Circle } from "./circle";
import * as _ from "lodash";
import * as p5 from "p5";

export class LinkGraphic {
  private circLarge: Circle;
  private circSmall: Circle;
  private circVectorTemplate: p5.Vector[];

  constructor(circOne: Circle, circTwo: Circle) {
    this.circLarge = circOne.radius > circTwo.radius ? circOne : circTwo;
    this.circSmall = circOne.radius < circTwo.radius ? circOne : circTwo;

    this.circVectorTemplate = [];
    for (let angle = 0; angle <= 360; angle++) {
      this.circVectorTemplate.push(p5.Vector.fromAngle(radians(angle)));
    }
  }

  getCircleVectors(offset: number = 0) /*: [p5.Vector[], p5.Vector[]]*/ {
    const largeCircleVectors = _.cloneDeep(this.circVectorTemplate).map(
      (vec: p5.Vector) => {
        vec.mult(this.circLarge.radius);
        vec.add(this.circLarge.center);
      }
    );
    const smallCircleVectors = _.cloneDeep(this.circVectorTemplate).map(
      (vec: p5.Vector) => {
        vec.mult(this.circSmall.radius);
        vec.add(this.circSmall.center);
      }
    );
    return [smallCircleVectors, largeCircleVectors] as [unknown, unknown];
  }
}
