// from data.js
var tableData = data;

// reference to table body
var tbody = d3.select("tbody");
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

// populate default table
dataTable(data);

// refernce to reset btn
var resetbtn = d3.select("#reset-btn");
// reset search
resetbtn.on("click", function() {
  dataTable(data);
  datesearch.property("value", "");
  citysearch.property("value", "");
  statesearch.property("value", "");
  countrysearch.property("value", "");
  shapesearch.property("value", "");
  commentsearch.property("value", "");
});

// reset search defaults
function resetSearch(query) {

  if (query !== "date"){
    datesearch.property("value", "");
  }
  if (query !== "city"){
    citysearch.property("value", "");
  }
  if (query !== "state"){
    statesearch.property("value", "");
   }
  if (query !== "country"){
    countrysearch.property("value", "");
   }
  if (query !== "shape"){
    shapesearch.property("value", "");
  }
  if (query !== "comment"){
    commentsearch.property("value", "");
  }
}

// reset search defaults
function searchString(query) {
  if (query === "date"){
    var searchstring = datesearch.property("value");
    var results =
    data.filter(function(incident) { 
        return incident.datetime === searchstring;
      });
    return results;
  }

  else if (query === "city"){
    var searchstring = citysearch.property("value").toLowerCase();
    var results =
    data.filter(function(incident) { 
        return incident.city.toLowerCase() === searchstring;
      });
    return results;
  }

  else if (query === "state"){
    var searchstring = statesearch.property("value").toLowerCase();
    var results =
    data.filter(function(incident) { 
        return incident.state.toLowerCase() === searchstring;
      });
    return results;
   }

   else if (query === "country"){
    var searchstring = countrysearch.property("value").toLowerCase();
    var results =
    data.filter(function(incident) { 
        return incident.country.toLowerCase() === searchstring;
      });
    return results;
   }
 
  else if (query === "shape"){
    var searchstring = shapesearch.property("value").toLowerCase();
    var results =
    data.filter(function(incident) { 
        return incident.shape.toLowerCase() === searchstring;
      });
    return results;
  }

  else if (query === "comment"){
    var searchstring = commentsearch.property("value").toLowerCase();
    var results =
    data.filter(function(incident) { 
        return incident.comments.toLowerCase().includes(searchstring);
      });
    return results;
  }
};

// date search
var datesearch = d3.select("#datesearch");
var datebutton = d3.select("#date-btn");

// on button click
datebutton.on("click", function() {
  var searchType = "date"
  var searchResults = searchString(searchType);

  // Update table
  dataTable(searchResults);

  // update searchbars
  resetSearch(searchType);
});

// update table when "enter" is pressed
datesearch.on("keydown", function() { 
if (event.key === "Enter"){
  event.preventDefault();
  var searchType = "date"
  var searchResults = searchString(searchType);

   // Update table
   dataTable(searchResults);

  // update searchbars
  resetSearch(searchType);
}
}); 


// city search
var citysearch = d3.select("#citysearch");
var citybutton = d3.select("#city-btn");

// on button click
citybutton.on("click", function() {
  var searchType = "city"
  var searchResults = searchString(searchType);

  // Update table
  dataTable(searchResults);

  // update searchbars
  resetSearch(searchType);
});

// update table when "enter" is pressed
citysearch.on("keydown", function() { 
if (event.key === "Enter"){
  event.preventDefault();
  var searchType = "city"
  var searchResults = searchString(searchType);

   // Update table
   dataTable(searchResults);

  // update searchbars
  resetSearch(searchType);
}
}); 


// state search
var statesearch = d3.select("#statesearch");
var statebutton = d3.select("#state-btn");

// on button click
statebutton.on("click", function() {
  var searchType = "state"
  var searchResults = searchString(searchType);

  // Update table
  dataTable(searchResults);

  // update searchbars
  resetSearch(searchType);
});

// update table when "enter" is pressed
statesearch.on("keydown", function() { 
if (event.key === "Enter"){
  event.preventDefault();
  var searchType = "state"
  var searchResults = searchString(searchType);

   // Update table
   dataTable(searchResults);

  // update searchbars
  resetSearch(searchType);
}
}); 


// country search
var countrysearch = d3.select("#countrysearch");
var countrybutton = d3.select("#country-btn");

// on button click
countrybutton.on("click", function() {
  var searchType = "country"
  var searchResults = searchString(searchType);

  // Update table
  dataTable(searchResults);

  // update searchbars
  resetSearch(searchType);
});

// update table when "enter" is pressed
countrysearch.on("keydown", function() { 
if (event.key === "Enter"){
  event.preventDefault();
  var searchType = "country"
  var searchResults = searchString(searchType);

   // Update table
   dataTable(searchResults);

  // update searchbars
  resetSearch(searchType);
}
}); 



// shape search
var shapesearch = d3.select("#shapesearch");
var shapebutton = d3.select("#shape-btn");

// on button click
shapebutton.on("click", function() {
  var searchType = "shape"
  var searchResults = searchString(searchType);

  // Update table
  dataTable(searchResults);

  // update searchbars
  resetSearch(searchType);
});

// update table when "enter" is pressed
shapesearch.on("keydown", function() { 
if (event.key === "Enter"){
  event.preventDefault();
  var searchType = "shape"
  var searchResults = searchString(searchType);

   // Update table
   dataTable(searchResults);

  // update searchbars
  resetSearch(searchType);
}
}); 


// comment search
var commentsearch = d3.select("#commentsearch");
var commentbutton = d3.select("#comment-btn");

// on button click
commentbutton.on("click", function() {
  var searchType = "comment"
  var searchResults = searchString(searchType);

  // Update table
  dataTable(searchResults);

  // update searchbars
  resetSearch(searchType);
});

// update table when "enter" is pressed
commentsearch.on("keydown", function() { 
if (event.key === "Enter"){
  event.preventDefault();
  var searchType = "comment"
  var searchResults = searchString(searchType);

   // Update table
   dataTable(searchResults);

  // update searchbars
  resetSearch(searchType);
}
}); 
