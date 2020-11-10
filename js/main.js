(function () {

"use strict"

function renderCoffee(coffee) {
    var html = '<div class="divTableRow">';
    html += '<h3 id="name" class="info name-info">' + coffee.name + '</h3>';
    html += '<p id="roast" class="info roast-info">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}


function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault();
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(searchValue.value.toLowerCase())) {
            filteredCoffees.push(coffee);
        }   else if(selectedRoast === "all" && coffee.name.toLowerCase().includes(searchValue.value.toLowerCase())){
            filteredCoffees.push(coffee);
        }
    });
    divBody.innerHTML = renderCoffees(filteredCoffees);
}


var searchValue = document.querySelector("#userSearch")


function addCoffee(e) {
    e.preventDefault();
    console.log(e);
    var coffeeObj = {
        id: coffees.length + 1,
        name: newCoffee.value,
        roast: addedRoast.value
    }
    coffees.push(coffeeObj);
}


var newCoffee = document.querySelector("#userAdd")
var addedRoast = document.querySelector("#roast-creation")
document.querySelector("#submitButton").addEventListener('click', addCoffee)
document.querySelector("#submitButton").addEventListener('click', updateCoffees)

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var divBody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');

divBody.innerHTML = renderCoffees(coffees);

newCoffee.addEventListener('submit', addCoffee);
addedRoast.addEventListener('submit', addCoffee);
roastSelection.addEventListener('change', updateCoffees);
searchValue.addEventListener('keyup' , updateCoffees);

})();