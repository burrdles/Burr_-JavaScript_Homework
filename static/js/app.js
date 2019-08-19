// from data.js
var tableData = data;

// Select Body of the Table
var tbody = d3.select("tbody");
tbody.html(``);
data.forEach(item => {
    var tr = tbody.append('tr')
    tr.append('td').text(item.datetime)
    tr.append('td').text(item.city)
    tr.append('td').text(item.state)
    tr.append('td').text(item.country)
    tr.append('td').text(item.shape)
    tr.append('td').text(item.durationMinutes)
    tr.append('td').text(item.comments)
});
// Filter Data Based on Data User Selects
var button = d3.select("#filter-btn");

button.on("click", function() {
    var input = d3.select('#datetime')
    var value = input.property("value");
    var filtered = tableData.filter(item => {
      return item.datetime=== value;
    });


var tbody = d3.select("tbody");
tbody.html(``);
filtered.forEach(item => {
    var tr = tbody.append('tr')
    tr.append('td').text(item.datetime)
    tr.append('td').text(item.city)
    tr.append('td').text(item.state)
    tr.append('td').text(item.country)
    tr.append('td').text(item.shape)
    tr.append('td').text(item.durationMinutes)
    tr.append('td').text(item.comments)
    })

});