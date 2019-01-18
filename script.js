//Creating h1 element to store our page title text
const title = document.createElement("h1");
//Creating text node to specify the contents of the text for our page title
const textnode = document.createTextNode("Price Checker");
//Putting the  "Price checker to the h1 tag" *The title variable is now complete with all elements*
title.appendChild(textnode);
//Finally putting the title inside tag on the html page so that it will display on the website
document.getElementById("root").appendChild(title);

var requestURL = 'https://storage.googleapis.com/osbuddy-exchange/summary.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
  var data = request.response;

  for (var i in data) {
    var itemTitles = document.createElement("h1");
    var itemNode = document.createTextNode(data[i].name+'\xa0');
    var priceNode = document.createTextNode(data[i].id);
    itemTitles.appendChild(itemNode);
    itemTitles.appendChild(priceNode);
    document.getElementById("content").appendChild(itemTitles);
  }
  console.log(data);
}