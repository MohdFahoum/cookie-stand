'use_strict';

//['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'],
var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];


function BranchLocation(location, maxCustomers, minCustomers, avgCookies, workingHours, salesOfToDay, salesArray) {
    var salesArray = [];
    salesArray.push(salesOfToDay);


    this.location = location;
    this.maxCustomers = maxCustomers;
    this.minCustomers = minCustomers;
    this.avgCookies = avgCookies;
    this.workingHours = workingHours;// will be defined as array in the object 
    this.salesOfToDay = salesOfToDay; //first 
    this.salesArray = salesArray; // array pushed in line 9

    
}


BranchLocation.prototype.cookiesAmount = function (maxCustomers, minCustomers) {

    for (let index = 0; index < this.workingHours.length - 1; index++) {

        var numOfSales = Math.round((Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgCookies);
        this.salesOfToDay += numOfSales;
        this.salesArray.push(numOfSales);


    } console.log(this.salesOfToDay);
    console.log(this.salesArray);

}

BranchLocation.prototype.render = function () {
    var parentElement = document.getElementById('salesTabel');

    var shopLocation = document.createElement('p');
    shopLocation.innerHTML = this.location;
    parentElement.appendChild(shopLocation);



    var ul = document.createElement('ul');
    parentElement.appendChild(ul);
    for (let index = 0; index < this.workingHours.length; index++) {
        var li = document.createElement('li');
        li.innerHTML = this.workingHours[index];
        ul.appendChild(li);

    if (this.workingHours[index] == 'Total') {
        var span = document.createElement('span');
        span.innerHTML = (' :  ' + this.salesOfToDay);
        li.appendChild(span);
    } else {

        var span = document.createElement('span');
        span.innerHTML = ('  :  ' + this.salesArray[index] + ' cookies');
        li.appendChild(span);
    }

}

}

var Tokyo = new BranchLocation('Tokyo', '15', '4', '4.2', ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'], 44);
var Seattle = new BranchLocation('Seattle', '12', '6', '1.2', ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'], 50);
var Lima = new BranchLocation('Lima', '20', '2', '0.4', ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'], 63)
var Dubai = new BranchLocation('Dubai', '40', '8', '3.4', ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'], 80)
var Paris = new BranchLocation('Paris', '14', '3', '1.4', ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'], 73)

Tokyo.cookiesAmount();
Tokyo.render();

Seattle.cookiesAmount();
Seattle.render();

Lima.cookiesAmount();
Lima.render();

Dubai.cookiesAmount();
Dubai.render();

Paris.cookiesAmount();
Paris.render();


