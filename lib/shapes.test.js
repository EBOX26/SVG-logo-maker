// Importing the Triangle, Square, and Circle classes from the 'shapes.js' module
const { Triangle, Square, Circle } = require("./shapes.js");

// Testing the rendering of a blue triangle
describe("Blue Triangle Rendering Test", () => {
  test("Render a blue triangle", () => {
    const blueTriangle = new Triangle();
    blueTriangle.setColor("blue");
    expect(blueTriangle.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// Testing the rendering of a purple square
describe("Purple Square Rendering Test", () => {
  test("Render a purple square", () => {
    const purpleSquare = new Square();
    purpleSquare.setColor("purple");
    expect(purpleSquare.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="purple" />'
    );
  });
});

// Testing the rendering of a circle with a specific background color
describe("Colored Circle Rendering Test", () => {
  test("Render a circle with a custom background color", () => {
    const customColorCircle = new Circle();
    customColorCircle.setColor("#ca00ca");
    expect(customColorCircle.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#ca00ca" />'
    );
  });
});
