'use_strict';


var storeHours  = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total'];
allStores = [];


function BranchLocation(name, minCustomer, maxCustomer, avgCookies) {
    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.cookiesPerHour=[];


    allStores.push(this);
    this.calcCookiesPerHour();
    this.rowTotal();
    removerFooter();
    this.render();
    columnTotal();
    
}


var tblEl = document.createElement('table');
createTable();


BranchLocation.prototype.calcCustomersPerHour = function () {
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
};


BranchLocation.prototype.calcCookiesPerHour = function () {
  for (var i = 0; i < storeHours.length - 1; i++) {
    this.cookiesPerHour.push(Math.round(this.calcCustomersPerHour(this.minCustomer, this.maxCustomer) * this.avgCookies));
  }
};

BranchLocation.prototype.rowTotal = function () {
  var thisStoresTotal = this.avgCookies;
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    thisStoresTotal += this.cookiesPerHour[i];
  }
  this.cookiesPerHour.push(Math.round(thisStoresTotal));
};

BranchLocation.prototype.render = function () {
  
  var trStoreEl = document.createElement('tr');
  var tdNameEl = document.createElement('td');
  tdNameEl.textContent = this.name;
 
  trStoreEl.appendChild(tdNameEl);
  for (var i = 0; i < storeHours.length; i++) {
    
    var tdDataEl = document.createElement('td');
    tdDataEl.textContent = this.cookiesPerHour[i];
    trStoreEl.appendChild(tdDataEl);
  }
  
  tblEl.appendChild(trStoreEl);
};

function columnTotal() {
  
  var trFootEl = document.createElement('tr');
  trFootEl.setAttribute('id', 'tfooter');
  var totalFootEl = document.createElement('td');
  totalFootEl.textContent = 'total';
  trFootEl.appendChild(totalFootEl);
  for (var hours in storeHours ) {
    var hourTotal = 0;
    for (var store in allStores) {
      hourTotal += allStores[store].cookiesPerHour[hours];
    }
    var dataEl = document.createElement('td');
    dataEl.textContent = hourTotal;
    trFootEl.appendChild(dataEl);
  }
  tblEl.appendChild(trFootEl);
}

function createTable() {
  
  var trHeaderEl = document.createElement('tr');
  var thBlankEl = document.createElement('th');
  thBlankEl.textContent = '';
  trHeaderEl.appendChild(thBlankEl);


  for (var i = 0; i < storeHours .length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = storeHours [i];
    trHeaderEl.appendChild(thEl);
  }
  
  tblEl.appendChild(trHeaderEl);
  document.getElementById('main-content').appendChild(tblEl);
}

function removerFooter() {
  var totalrow = document.getElementById('tfooter');
  if (totalrow) {
    totalrow.remove();
  }
}

var formEl = document.getElementById('form1');

formEl.addEventListener('submit', function (event) {
  event.preventDefault();

  var name = event.target.name.value;
  var minCustomer = event.target.minCustomer.value;
  var maxCustomer = event.target.maxCustomer.value;
  var avgCookies = event.target.avgCookies.value;

  new BranchLocation(name, parseInt(minCustomer), parseInt(maxCustomer), parseInt(avgCookies));
});
