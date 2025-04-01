// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.
//
// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./door-policy.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Good luck with that door policy!

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
    let frontDoorResponse = line[0];
    return frontDoorResponse
  }
  
  /**
   * Format the password for the front-door, given the response
   * letters.
   *
   * @param {string} word the letters you responded with before
   * @returns {string} the front door password
   */
  export function frontDoorPassword(word) {
    let wordAlt1 = word;
    let wordAlt2 = wordAlt1.toLowerCase();
    let wordAlt3 = wordAlt2.slice(1);
    let wordAlt4 = wordAlt1.charAt(0).toUpperCase();
    let frontDoorPassword = wordAlt4 + wordAlt3;
    return frontDoorPassword;
    // I believe there is a simpler way than this, but as a beginner, it's the best I could do
  } 
  
  /**
   * Respond with the correct character, given the line of the
   * poem, if this were said at the back door.
   *
   * @param {string} line
   * @returns {string}
   */
  export function backDoorResponse(line) {
   let trimmedLine = line.trim();
   let lastLetter = trimmedLine.length - 1;
   return trimmedLine.charAt(lastLetter);
  }
  
  /**
   * Format the password for the back door, given the response
   * letters.
   *
   * @param {string} word the letters you responded with before
   * @returns {string} the back door password
   */
  export function backDoorPassword(word) {
    let password = word.charAt(0).toUpperCase() + word.slice(1);
    return `${password}, please`;
  }
  