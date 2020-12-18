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
filterButton.on("click", filterData);
resetButton.on("click", resetData);
form.on("submit",filterData);

//------------------------------------------------------------ 
// When you either submit or click on Filter Table, filter it
//------------------------------------------------------------ 
function filterData() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");

  // Get the value property of the input element
  let inputValue = inputElement.property("value");
  
  // If a date was entered then filter the data
  if (inputValue !== "") {
      // Filter the data by what was entered
        let filteredData = tableData.filter(ufoReport => moment(ufoReport.datetime).format('l') === moment(inputValue).format('l'));
        
        // Clear the displayed data
        tbody.html("");

        // Output the filtered data
        outputData(filteredData);
    };
};

//------------------------------------------------------------ 
// Reset the data so it shows all data agein
//------------------------------------------------------------ 
function resetData() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Clear the displayed data
    tbody.html("");
  
  // Output all of the data to reset
    outputData(tableData);
  };

//------------------------------------------------------------ 
// Output the passed in data, either original or filtered
//------------------------------------------------------------ 
function outputData(outputData) {
  outputData.forEach((ufoInfo) => {
    let row = tbody.append("tr");
    Object.entries(ufoInfo).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
};