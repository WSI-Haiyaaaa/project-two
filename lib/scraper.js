/** @module */

/** Extract simple text from the child of a parent element
@function extractText
@param {object} element
@param {string} selector
@returns {string}
*/

function extractText(element, selector) {
  return element.find(selector).text();
}

module.exports = {
  extractText
}
