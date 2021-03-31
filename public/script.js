"use strict";
/* global document, fetch */
// Get the country name from the html page
var country = document.querySelector("#country").innerText;
/* Change the name to lower case
   And replace any white spaces with an underscore */
var usable_country_name = country.toLowerCase().replace(/\s+/g, "_");
// Form the endpoint URL
var endpoint = `/data_samples/${ usable_country_name }.json`;

fetch(endpoint)
  .then(function (response) {
    return response.json();
  })
  .then(function (country_data) {
    // Retrieve country full name
    document.querySelector("#fullname").innerText = country_data.names.full;

    // Retrieve country language
    for (let i = 0; i < country_data.language.length; i++) {
      var li = document.createElement("li");

      /* Check which listed lanague is official
         If it is, state 'Offical' at the end */
      if (country_data.language[i].official === "Yes") {
        li.appendChild(
          document.createTextNode(
            `${ country_data.language[i].language } (Official)`
          )
        );
      } else {
        li.appendChild(
          document.createTextNode(`${ country_data.language[i].language }`)
        );
      }
      document.querySelector("#lang").appendChild(li);
    }

    // Retrieve electricity info
    document.querySelector(
      "#voltage_and_frequency"
    ).innerText = `A voltage of ${ country_data.electricity.voltage } V and a frequency of ${ country_data.electricity.frequency } Hz is used in ${ country }.`;
    for (let i = 0; i < country_data.electricity.plugs.length; i++) {
      var li = document.createElement("li");
      li.appendChild(
        document.createTextNode(`${ country_data.electricity.plugs[i] }`)
      );
      document.querySelector("#plugs").appendChild(li);
    }

    // Retrieve emergency telephone info
    document.querySelector(
      "#calling_code"
    ).innerText += ` ${ country_data.telephone.calling_code }`;
    document.querySelector(
      "#police"
    ).innerText += ` ${ country_data.telephone.police }`;
    document.querySelector(
      "#ambulance"
    ).innerText += ` ${ country_data.telephone.ambulance }`;
    document.querySelector(
      "#fire"
    ).innerText += ` ${ country_data.telephone.fire }`;

    // Retrieve drinking water safety info
    document.querySelector(
      "#water_safety"
    ).innerText = `Drinking tap water in ${ country } is ${ country_data.water.short }.`;

    for (let i = 0; i < country_data.vaccinations.length; i++) {
      var li = document.createElement("li");
      li.appendChild(
        document.createTextNode(
          `${ country_data.vaccinations[i].name }: ${ country_data.vaccinations[i].message }`
        )
      );
      document.querySelector("#requirements").appendChild(li);
    }

    // Retrieve currency info
    document.querySelector(
      "#name_and_code"
    ).innerText = `The currency in ${ country } is ${ country_data.currency.name } (${ country_data.currency.code })`;
    document.querySelector(
      "#rate"
    ).innerText = `1 ${ country_data.currency.name } = ${ country_data.currency.rate } US Dollar`;

    // Retrieve country neighbors
    for (let i = 0; i < country_data.neighbors.length; i++) {
      var li = document.createElement("li");
      li.appendChild(
        document.createTextNode(`${ country_data.neighbors[i].name }`)
      );
      document.querySelector("#neighbor_country").appendChild(li);
    }
  });

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
