// an array with all of our cart items
var cart = [];
var $total = $('.total');
var $cartList = $('.cart-list');

var CartItem = function (name, price) {
	this.name = name;
	this.price = price;
}

var updateCart = function () {
	var total = 0;
	

  $('.cart-list').empty();
  for (var i = 0; i < cart.length; i++) {
  	var source = $('#cart-template').html();
  	var template = Handlebars.compile(source);
  	var html = template(cart[i]);
  	$cartList.append(html);
  	total += cart[i].price;
  }
  $total.text(total);
}

var addItem = function (item) {
  cart.push(item);
}

var clearCart = function () {
  $cartList.empty();
  $total.text(0);
  cart = [];
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggle();
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var datt = $(this).closest('div[item]').data();
  var item = new CartItem(datt.name,datt.price);
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();