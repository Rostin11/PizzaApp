//
//console.log("Pizzas", pizzaList);
//
//var divContent = "";
//
//
//for (i=0; i<pizzaList.length; i++) {
//
//    var pizza = pizzaList[i];
//    var description = pizza.description;
//    var pizzaName = description.name;
//    var longtext = description.longText;
//    var pizzaPrice = pizza.price;
//    var id = pizza.id;
//    var htmlId = "pizza-" + i;
//    console.log("i", i, pizzaName, pizzaPrice, longtext, id)
//
//    var pizzaHtmlContent = "<div id='"+ htmlId + "'>" + pizzaName + "</div>";
//    divContent = divContent + " " + pizzaHtmlContent;
//
//}
//
//
//
//
//document.getElementById("pizzaliste").innerHTML = divContent;

var divContent = "";

for (i=1; i<=pizzaList.length; i++) {

    var pizza = pizzaList[(i - 1)];
    var pizzaId = pizza.k_name;
    var pizzaName = pizza.g_name;
    var number = "pz" + i;
    var pizzaPrice = pizza.price;
    var pizzaNumber = (i - 1);

    var pizzaHtmlContent =

    `<a name="${pizzaId}">
    <label for="${number}">
    <div class="container_in_box">
    <div class="box1">
        <div class="radio-button">
        <input type="radio" id="${number}"name="auswahl" value="${pizzaNumber}">
    </div>
    <div class="bild">
        <img src="pizza_icon.png" height="233pt" alt="${pizzaId}">
    </div>
    </div>
    <div class="box2">
    <h3 class="pizzaname">${pizzaName}</h3>
    </div>
    <div class="box3">
    <h4 class="preis">${pizzaPrice}</h4>
    </div>
    </div>
    </label>
    </a>`

    divContent = divContent + " " + pizzaHtmlContent;


}


document.getElementById("pizzas").innerHTML = divContent;

