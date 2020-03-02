// Business logic
function Order(size, crust, topping, number){
  this.pizzaSize = size
  this.pizzaCrust = crust
  this.pizzaToppings = toppings
  this.pizzaQuantity = number
}
Order.prototype.totalPrice = function () {
  return this.parseInt(pizzaSize) + this.parseInt(pizzaToppings) + this.parseInt(pizzaCrust)
  var amount = this.totalPrice * this.pizzaQuantity
}
 
// User logic
$(document).ready(function() {
  $("form#order").submit(function(event){
    event.preventDefault()
  
    var inputtedPizzaSize = $("#size").attr("value");
    var inputtedPizzaCrust = $("#crust").attr("value");
    var inputtedPizzaToppings = $("#toppings").attr("value");
    var inputtedPizzaQuantity = $("#number").val();

    var size =$("#size").val()
    var crust =$("#crust").val()
    var toppings =$("#toppings").val()
    
    var newOrder = new Order(inputtedPizzaSize, inputtedPizzaCrust, inputtedPizzaToppings, inputtedPizzaQuantity)

    
  
    $("#child#size").text(size);
    $("#crust").text(crust);
    $("#topping").text(toppings);
    
  })
})

  

