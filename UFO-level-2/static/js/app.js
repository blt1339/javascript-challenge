// from data.js
var tableData = data;

// select the tbody
var tbody = d3.select("tbody");

// Output the table data initially
outputData(tableData);

// Select the buttons
var filterButton = d3.select("#filter-btn");
var resetButton = d3.select("#reset-btn");

// Select the form
var form = d3.select(".ufo-form");
console.log(form.html());

// Create event handlers 
filterButton.on("click", runEnter);
resetButton.on("click", runReset);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // setup filteredData to store the filtered data
  let filteredData = tableData;
  
  // Select the input element for date and get the raw HTML node
  let dateInputElement = d3.select("#datetime");

  // Get the value property of the date input element
  let dateInputValue = dateInputElement.property("value");

  // If a date was entered then filter the data
  if (dateInputValue !== "") {
      // Filter the data by what was entered
        filteredData = tableData.filter(ufoReport => moment(ufoReport.datetime).format('l') === moment(dateInputValue).format('l'));
  };

  // Clear the displayed data
  tbody.html("");

  // Output the filtered data
  outputData(filteredData);
};

// Complete the event handler function for the form
function runReset() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Clear the displayed data
    tbody.html("");
  
  // Output all of the data to reset
    outputData(tableData);
  };

  function outputData(outputData) {
    outputData.forEach((ufoInfo) => {
        let row = tbody.append("tr");
        Object.entries(ufoInfo).forEach(([key, value]) => {
          let cell = row.append("td");
          cell.text(value);
        });
      });
    };