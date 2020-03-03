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

    // var pizzaSize =$("#size").val()
    // var pizzaCrust =$("#crust").val()
    // var pizzaToppings =$("#toppings").val()
    // var newDetail = new newDetail(pizzaSize, pizzaCrust, pizzaToppings)
    
    $(".money").show()
    $(".child").show()
    $(".amount").text(newOrder.total());
    prompt("Enter your location")
    alert("Your order will be delivered to your location.")
    // $("ul#price").append("<li><span class='contact'>" + newDetail.price() + "</span></li>");
  

    // $(".child").show()
    $(".amount").text(newOrder.total());
    
    console.log (newOrder.total());
  })
})
