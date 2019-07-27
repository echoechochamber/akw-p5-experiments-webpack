/// <reference types="p5/global" />
import * as p5 from "p5";

const getRandomIntInRange = (max: number, min: number = 0) => {
  const diff = max - min;
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * absctract representation of a circle for use in the circle traces functionality
 */
export class Circle {
  private _radius: number;
  private _center: p5.Vector;

  constructor(radius: number, x: number, y: number) {
    this._radius = radius;
    this._center = createVector(x, y);
  }

  get radius(): number {
    return this._radius;
  }

  get center(): p5.Vector {
    return this._center;
  }
}

export function generateRandomCircles(
  num: number,
  edgePadding: number
): Circle[] {
  const output: Circle[] = [];
  for (let i = 0; i < num; i++) {
    const scale = 250;
    output.push(
      new Circle(
        getRandomIntInRange(35),
        getRandomIntInRange(windowWidth - edgePadding, edgePadding),
        getRandomIntInRange(windowHeight - edgePadding, edgePadding)
      )
    );
  }
  return output;
}
