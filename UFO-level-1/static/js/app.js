// from data.js
var tableData = data;

// select the tbody
var tbody = d3.select("tbody");

// Output the table data initially
// tableData.forEach((ufoReport) => {
//     var row = tbody.append("tr");
//     Object.entries(ufoReport).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
outputData(tableData);

// Select the button
var filterButton = d3.select("#filter-btn");
var resetButton = d3.select("#reset-btn")

// Select the form
var form = d3.select(".form-group");


// Create event handlers 
filterButton.on("click", runEnter);
resetButton.on("click", runReset);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");


  // Get the value property of the input element
  var inputValue = inputElement.property("value");

 // Filter the data by what was entered
  var filteredData = tableData.filter(ufoReport => ufoReport.datetime === inputValue);

  // Clear the displayed data
  tbody.html("");

//   filteredData.forEach((ufoReport) => {
//     var row = tbody.append("tr");
//     Object.entries(ufoReport).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
  outputData(filteredData);
};


// Complete the event handler function for the form
function runReset() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    

    // Clear the displayed data
    tbody.html("");
  
    // tableData.forEach((ufoReport) => {
    //   var row = tbody.append("tr");
    //   Object.entries(ufoReport).forEach(([key, value]) => {
    //     var cell = row.append("td");
    //     cell.text(value);
    //   });
    // });

    outputData(tableData);
  };

  function outputData(outputData) {
    outputData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    };