// Get the country name from the html page
var country = document.querySelector('#country').innerText;
// Change the name to lower case
// And replace any white spaces with an underscore
var usable_country_name = country.toLowerCase().replace(/\s+/g, '_');
// Form the endpoint URL
var endpoint = '/data_samples/' + usable_country_name + '.json';

fetch(endpoint)
  .then(function(response) {
    return response.json();
  })
  .then(function(country_data) {
    document.querySelector('#fullname').innerText = country_data.names.full;


    for (let i = 0; i < country_data.language.length; i++) {
      var li = document.createElement("li");

      // Check which listed lanague is official
      // If it is, state 'Offical' at the end
      if (country_data.language[i].official == "Yes") {
        li.appendChild(document.createTextNode(`${country_data.language[i].language} (Official)`));
      } else {
        li.appendChild(document.createTextNode(`${country_data.language[i].language}`));
      }
      document.querySelector('#lang').appendChild(li);
    }

/*
    var electricity_p = document.createElement("p");
    var electricity_text = document.createTextNode(`A voltage of ${country_data.electricity.voltage} V and a frequency of ${country_data.electricity.frequency} Hz is used in ${country}.`);
    electricity_p.appendChild(electricity_text);
    document.querySelector('#electricity').appendChild(electricity_p);
*/
    document.querySelector('#voltage_and_frequency').innerText = `A voltage of ${country_data.electricity.voltage} V and a frequency of ${country_data.electricity.frequency} Hz is used in ${country}.`;
    for (let i = 0; i < country_data.electricity.plugs.length; i++) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(`${country_data.electricity.plugs[i]}`));
      document.querySelector('#plugs').appendChild(li);
    }


    document.querySelector('#calling_code').innerText += " " +country_data.telephone.calling_code;
    document.querySelector('#police').innerText += " " +country_data.telephone.police;
    document.querySelector('#ambulance').innerText += " " +country_data.telephone.ambulance;
    document.querySelector('#fire').innerText += " " +country_data.telephone.fire;


    document.querySelector('#water_safety').innerText = `Drinking tap water in ${country} is ${country_data.water.short}.`


    for (let i = 0; i < country_data.vaccinations.length; i++) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(`${country_data.vaccinations[i].name}: ${country_data.vaccinations[i].message}`));
      document.querySelector('#requirements').appendChild(li);
    }


    document.querySelector('#name_and_code').innerText = `The currency in ${country} is ${country_data.currency.name} (${country_data.currency.code})`;
    document.querySelector('#rate').innerText = `1 ${country_data.currency.name} = ${country_data.currency.rate} US Dollar`


    for (let i = 0; i < country_data.neighbors.length; i++) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(`${country_data.neighbors[i].name}`));
      document.querySelector('#neighbor_country').appendChild(li);
    }
  })
