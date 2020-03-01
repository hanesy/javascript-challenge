// from data.js
var tableData = data;

// d3 objects
// reference to table body
var tbody = d3.select("tbody");
// reference to button
var button = d3.select("#filter-btn");

// Appends a table
data.forEach(function(incident) {
//   console.log(incident);
  var row = tbody.append("tr");
  Object.entries(incident).forEach(function([key, value]) {
    // console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});

// listen for events, search, update table
button.on("click", function() {
    // console.log(this);
    
    // Conduct Search
    var searchDate = d3.select("#datetime").property("value");
    // console.log(searchDate);
    var searchResults =
        data.filter(function(incident) { 
            return incident.datetime === searchDate;
        });
    // console.log(searchResults);

    // Reset table
    tbody.text("")

    // Update table
    searchResults.forEach(function(incident) {
        // console.log(incident);
        var row = tbody.append("tr");
        Object.entries(incident).forEach(function([key, value]) {
        //   console.log(key, value);
          var cell = row.append("td");
          cell.text(value);
        });
      });
});
