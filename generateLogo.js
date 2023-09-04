// generateLogo.js
function generateLogo(userInput) {
  const { text, textColor, shape, shapeColor } = userInput;

  // Create an SVG string based on the user's input
  if (shape === 'square') {
    const svgString = `
      
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="150" x='75' y='65' fill="${shapeColor}" />
      <text x="150" y="125" text-anchor="middle" dominant-baseline="middle" font-size="48" fill="${textColor}">
          ${text}
      </text>
      </svg>
        `;
    return svgString;
  }
}

module.exports = generateLogo;
