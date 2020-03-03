// Business logic
function Order(pSize, pCrust, pToppings, pNumber){
  this.Size = pSize
  this.Crust = pCrust
  this.Toppings = pToppings
  this.Quantity = pNumber
}
Order.prototype.total = function () {
  this.totalPrice = parseInt(this.Size) + parseInt(this.Toppings) + parseInt(this.Crust);
  return this.totalPrice * parseInt(this.Quantity);

} 

// User logic
$(document).ready(function() {
  $("form#order").submit(function(event){
    event.preventDefault()
  
    var inputPizzaSize = $('#size').attr('value');
    var inputPizzaCrust = $('#crust').attr('value');
    var inputPizzaToppings = $('#toppings').attr('value');
    var inputPizzaQuantity = $('#number').val();
    var newOrder = new Order(inputPizzaSize, inputPizzaCrust, inputPizzaToppings, inputPizzaQuantity)

    
  
    // $(".child").show()
    $(".amount").text(newOrder.total());
    
    console.log (newOrder.total());
  })
})
