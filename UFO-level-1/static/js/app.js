// from data.js
var tableData = data;

// d3 objects
// reference to table body
var tbody = d3.select("tbody");
// reference to button
var button = d3.select("#filter-btn");
// reference to input
var inputField = d3.select("#datetime");

// function for populating table
function dataTable(table){
  // Reset table
  tbody.text("");

  // Populate table
  table.forEach(function(incident) {
  //   console.log(incident);
  var row = tbody.append("tr");
  Object.entries(incident).forEach(function([key, value]) {
    // console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});
};

// populate original table
dataTable(data);

// function for searching date
function searchDate(){
  var searchDate = inputField.property("value");
  // console.log(searchDate);
  var results =
      data.filter(function(incident) { 
          return incident.datetime === searchDate;
      });
  return results;
  // console.log(searchResults);
};


// listen for events, search, update table
// on button click
button.on("click", function() {
    // console.log(this);
    
    // Conduct Search
    var searchResults = searchDate();

    // Update table
    dataTable(searchResults);
});

// update table when "enter" is pressed
inputField.on("keydown", function() { 
  if (event.key === "Enter"){
    event.preventDefault();
     // Conduct Search
     var searchResults = searchDate();

     // Update table
     dataTable(searchResults);
  }
}); 