'use_strict';


var Hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total'];

function BranchLocation(location, minCustomer, maxCustomer, avgCookies, totalSales, salesArray) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.totalSales = totalSales;
    this.salesArray = salesArray;
}
BranchLocation.prototype.CookiesAmount = function () {
    for (var index = 0; index < Hours.length - 1; index++) {
        var numOfSales = Math.round((Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer) * this.avgCookies);
        this.totalSales += numOfSales;
        this.salesArray.push(numOfSales);

    }
}
var Seattle = new BranchLocation('Seattle', 23, 65, 6.3, 0, []);
console.log(Seattle);
var Tokyo = new BranchLocation('Tokyo', 3, 24, 1.2, 0, []);
console.log(Tokyo);
var Dubai = new BranchLocation('Dubai', 11, 38, 3.7, 0, []);
console.log(Dubai);
var Paris = new BranchLocation('Paris', 20, 38, 2.3, 0, []);
console.log(Paris);
var Lima = new BranchLocation('Lima', 2, 16, 4.6, 0, []);
console.log(Lima);
var locations = [Seattle, Tokyo, Dubai, Paris, Lima];

for (let i = 0; i < locations.length; i++) {
    locations[i].CookiesAmount();
}

BranchLocation.render = function () {

    var parentElement = document.getElementById('salmonTable');
    var table = document.createElement('table');
    table.setAttribute('border','table-style');

    //////////////////////////
    //////TABLE///////////////
    //////////////////////////
    
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    tr.appendChild(th1);
    for (var index = 0; index < Hours.length; index++) {
        var th = document.createElement('th');
        th.innerHTML = Hours[index];
        tr.appendChild(th);
        table.appendChild(tr);

    }

    for (var i = 0; i < locations.length; i++) {
        var tr2 = document.createElement('tr');
        tr2.innerHTML = locations[i].location;
        tr2.setAttribute('class', 'location');
        console.log(locations[i].location);

        for (var index = 0; index < Hours.length; index++) {
            var td = document.createElement('td');
            if (index === Hours.length - 1) {
                td.innerHTML = locations[i].totalSales;
            } else {
                td.innerHTML = locations[i].salesArray[index];

            }
            tr2.appendChild(td);
            table.appendChild(tr2);
        }
    }
    var tr3 = document.createElement('tr');
    tr3.innerHTML = 'Totals';

    for (var i = 0; i < Hours.length; i++) {
        var td = document.createElement('td');
        var timeFrame = 0;

        for (var y = 0; y < locations.length; y++) {
            if (i === Hours.length - 1) {
                timeFrame += locations[y].totalSales;
            } else {
                timeFrame += locations[y].salesArray[i];
            }
        }
        td.innerText = timeFrame;
        tr3.appendChild(td);
    }
    table.appendChild(tr3);

    parentElement.appendChild(table);
}

console.log(locations[0].salesArray);
BranchLocation.render();