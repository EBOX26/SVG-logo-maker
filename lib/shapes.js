// Base Shape class defining common properties and methods for all shapes
class Shape {
    constructor(color) {
      // Initialize the color property with an optional color argument
      this.color = color || "";
    }
  
    // Set the color of the shape
    setColor(colorVar) {
      this.color = colorVar;
    }
  
    // Abstract method for rendering the shape as SVG markup
    render() {
      throw new Error("The render method must be implemented by subclasses");
    }
  }
  
  // Triangle class inheriting properties and methods from Shape
  class Triangle extends Shape {
    // Render method for rendering a triangle as SVG markup
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // Square class inheriting properties and methods from Shape
  class Square extends Shape {
    // Render method for rendering a square as SVG markup
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  // Circle class inheriting properties and methods from Shape
  class Circle extends Shape {
    // Render method for rendering a circle as SVG markup
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  
  // Export the shape classes (Triangle, Square, Circle)
  module.exports = { Triangle, Square, Circle };
  