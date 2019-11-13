
var auswahl = getUrlVars()["auswahl"];

var encodedName = getUrlVars()["name"];
var name = decodeURIComponent(encodedName);

console.log(name + auswahl);


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
if (auswahl == undefined) {

    window.location = "pizza.html";

}
var pizza = pizzaList[auswahl];
var pizzaName = pizza.g_name;;
var price = pizza.price;

document.getElementById("bestellung").innerHTML = `Du hast eine Pizza ${pizzaName} für ${price} bestellt.`;



