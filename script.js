const orderBtn = document.getElementById('order-btn')
const totalPriceDOM = document.getElementById('total-price')
const totalTimeDOM = document.getElementById('total-time')
const orderDetails = document.getElementById('order_details')
const userInput = document.getElementById('user-input')
const addBtn = document.getElementById('add-btn')
const orderList = document.getElementById('order-list')
const clrBtn = document.getElementById('clear-btn')

// Initialize an empty array to store product objects from inventory
let shoppingCart = [];

init();


// Functionalty: called on page load clears out any drink order and hides any current order details. also called when "new order" button is clicked
// Input: none
function init(){
	//emptying out the shoppingCart, which can be an order of drinks
	shoppingCart = [];
	orderList.innerHTML = '';
	orderDetails.classList.remove('visible')
}


// Functionality: adds a drink to the shopping cart
// Input: text from the user (string)
// Output: if text input matches an inventory item, item(object) is added to the shopping list array, otherwise throws errors
function addDrinkToOrder(e) {
	e.preventDefault()
  let error = true;
	let inputItem = userInput.value.toLowerCase().trim()
	// check if there is text in the input
	if(inputItem.length === 0) {
		alert('Please enter a drink')
		return 
	} else {
		inventory.forEach((item) => {
			if (item.name === inputItem) {
				shoppingCart.push(item);				
        addOrderToDOM(item.name)
        error = false;
				console.log(shoppingCart)
			}
		});
	}
  if (error) alert(`sorry we don't carry ${inputItem}`);
	userInput.value = ''
}


// Functionality: Adds an newly ordered item name to the DOM
// Input: string, product name from inventory
// Output: appends html list item
function addOrderToDOM(drink){
 const item = document.createElement("li");
 item.innerHTML = drink;
 orderList.appendChild(item);
}


// Functionality: totals the price and time for all products in the shopping cart, then calls to update the DOM for placing the order,
// Input: none
// Output: calls update dom with new object containing totalTime and totalPrice properties
function placeOrder() {
	if(!shoppingCart.length) {
		alert('Please enter a drink')
	}
	// loop over shopping cart
	// total the total price
	// total the total time 
	// return in a new object 
	if(shoppingCart.length){
		const orderTotals = shoppingCart.reduce((acc, current) => {
			return {
				totalPrice: acc.totalPrice += current.price,
				totalTime: acc.totalTime += current.time
			}

		}, {totalPrice: 0, totalTime: 0})
		console.log(orderTotals)
		//update the dom with order orderTotals
		updateValuesDOM(orderTotals)
		// show order details in the front end
		orderDetails.classList.add('visible')
	}
}


// Functionality: Updates the total time and price values in the DOM
// Input: totals object from the order
function updateValuesDOM(totals){
	totalPriceDOM.innerText = totals.totalPrice
	totalTimeDOM.innerText = totals.totalTime
}


// Event Listeners 
orderBtn.addEventListener('click', placeOrder)
addBtn.addEventListener('click', addDrinkToOrder)
clrBtn.addEventListener('click', init)