"use strict";
/* global document, fetch */
// Get the country name from the html page
var country = document.querySelector("#country").innerText;
/* Change the name to lower case
   And replace any white spaces with an underscore */
var usable_country_name = country.toLowerCase().replace(/\s+/g, "_");

/* Fetch dos and don'ts data */
let path = "/data_samples/dos_and_donts.json";
fetch(path)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    // Get element with id "dos"
    let dos_ul = document.querySelector("#dos");
    // Get element with id "donts"
    let donts_ul = document.querySelector("#donts");
    // Loop through all elements of object to get their keys and values
    for (const [key, value] of Object.entries(data)) {
      // If key equals to coutry name then display data
      if (key === usable_country_name) {
        // Iterate through values of object
        for (let i = 0; i < value.length; i++) {
          let list = value[i].list;
          // Display data based on type of do's or don'ts
          if (value[i].type === "Do’s") {
            for (let i = 0; i < list.length; i++) {
              appendText(dos_ul, list[i]);
            }
          } else {
            for (let i = 0; i < list.length; i++) {
              appendText(donts_ul, list[i]);
            }
          }
        }
      }
    }
  });

/** Append a list of texts to the parent elements (ul).
  @function
  @param {object} element An ul parent element
  @param {string} text Contains the data to be put in the text node
*/
function appendText(element, text) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  element.appendChild(li);
}
