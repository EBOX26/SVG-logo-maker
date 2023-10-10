// Import required libraries
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

function generateSVGString(answers) {
    const shapeChoices = {
      Triangle: { tag: "polygon", points: "150,18 244,182 56,182" },
      Square: { tag: "rect", x: 73, y: 40, width: 160, height: 160 },
      Circle: { tag: "circle", cx: 150, cy: 115, r: 80 },
    };
  
    // Default shape properties to Circle in case the user's choice is not recognized
    const shapeProps = shapeChoices[answers.shape] || shapeChoices.Circle;
  
    // The rest of your code remains the same
    const { tag, ...attributes } = shapeProps;
    const shapeAttributes = Object.entries(attributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");
  
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <g>
          <${tag} ${shapeAttributes} fill="${answers.shapeBackgroundColor}"/>
          <text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>
        </g>
      </svg>`;
  }
  
// Define a function to write the generated SVG string to a file
function writeToFile(fileName, svgString) {
  fs.writeFile(fileName, svgString, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated logo.svg");
    }
  });
}

// Define a function to prompt the user for input and generate the logo
function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What text would you like your logo to display? (Enter up to three characters)",
        name: "text",
        validate: (input) => (input.length > 3 ? "Must enter up to three characters" : true),
      },
      {
        type: "input",
        message: "Choose text color (Enter color keyword OR a hexadecimal number)",
        name: "textColor",
      },
      {
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message: "Choose shape color (Enter color keyword OR a hexadecimal number)",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      // Generate the SVG string based on user input and write it to a file
      const svgString = generateSVGString(answers);
      writeToFile("logo.svg", svgString);
    });
}

// Start the user prompt to generate the logo
promptUser();
