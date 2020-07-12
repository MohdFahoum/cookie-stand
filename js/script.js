'use_strict';

var seattle = {
    location: 'seattle',
    maxCustomers: 45,
    minCustomers: 20,
    avgCookies: 8.7,
    workingHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'],
    salesOfToDay: 0,
    salesArray: [],
    cookiesAmount: function () {

        for (let index = 0; index < this.workingHours.length - 1; index++) {
            var numOfSales = Math.round((Math.floor(Math.random() * (this.maxCustomers
         - this.minCustomers + 1)) + this.minCustomers) * this.avgCookies);
            this.salesOfToDay += numOfSales;
            this.salesArray.push(numOfSales);


        } console.log(this.salesOfToDay);
        console.log(this.salesArray);
    },

    render: function () {
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
}
seattle.cookiesAmount();
seattle.render();



var Tokyo = {
    location: 'Tokyo',
    maxCustomers: 15,
    minCustomers: 4,
    avgCookies: 4.2,
    workingHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'],
    salesOfToDay: 0,
    salesArray: [],
    cookiesAmount: function () {

        for (let index = 0; index < this.workingHours.length - 1; index++) {
            var numOfSales = Math.round((Math.floor(Math.random() * (this.maxCustomers
         - this.minCustomers + 1)) + this.minCustomers) * this.avgCookies);
            this.salesOfToDay += numOfSales;
            this.salesArray.push(numOfSales);


        } console.log(this.salesOfToDay);
        console.log(this.salesArray);
    },


    render: function () {
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
}
Tokyo.cookiesAmount();
Tokyo.render();



var Dubai = {
    location: 'Dubai',
    maxCustomers: 48,
    minCustomers: 10,
    avgCookies: 2.1,
    workingHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'],
    salesOfToDay: 0,
    salesArray: [],
    cookiesAmount: function () {

        for (let index = 0; index < this.workingHours.length - 1; index++) {
            var numOfSales = Math.round((Math.floor(Math.random() * (this.maxCustomers
         - this.minCustomers + 1)) + this.minCustomers) * this.avgCookies);
            this.salesOfToDay += numOfSales;
            this.salesArray.push(numOfSales);


        } console.log(this.salesOfToDay);
        console.log(this.salesArray);
    },

    render: function () {
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
}
Dubai.cookiesAmount();
Dubai.render();



var Paris = {
    location: 'Paris',
    maxCustomers: 45,
    minCustomers: 10,
    avgCookies: 2.0,
    workingHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'],
    salesOfToDay: 0,
    salesArray: [],
    cookiesAmount: function () {

        for (let index = 0; index < this.workingHours.length - 1; index++) {
            var numOfSales = Math.round((Math.floor(Math.random() * (this.maxCustomers
         - this.minCustomers + 1)) + this.minCustomers) * this.avgCookies);
            this.salesOfToDay += numOfSales;
            this.salesArray.push(numOfSales);


        } console.log(this.salesOfToDay);
        console.log(this.salesArray);
    },

    render: function () {
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
}
Paris.cookiesAmount();
Paris.render();



var Lima = {
    location: 'Lima',
    maxCustomers: 20,
    minCustomers: 4,
    avgCookies: 2.8,
    workingHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'],
    salesOfToDay: 0,
    salesArray: [],
    cookiesAmount: function () {

        for (let index = 0; index < this.workingHours.length - 1; index++) {
            var numOfSales = Math.round((Math.floor(Math.random() * (this.maxCustomers
         - this.minCustomers + 1)) + this.minCustomers) * this.avgCookies);
            this.salesOfToDay += numOfSales;
            this.salesArray.push(numOfSales);


        } console.log(this.salesOfToDay);
        console.log(this.salesArray);
    },

    render: function () {
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
}
Lima.cookiesAmount();
Lima.render();