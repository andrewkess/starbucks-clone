
let latte = {
  price: 5,
  time: 2
}
let espresso = {
  price: 3,
  time: 2
}

let cappucino = {
  price: 5,
  time: 2
}
// {
//   name: 'frappacino',
//   price: 6,
//   time: 5
// },
// {
//   name: 'cold brew',
//   price: 3,
//   time: 2
// },
// {
//   name: 'americano',
//   price: 5,
//   time: 3
// },
// {
//   name: 'coffee',
//   price: '1',
//   time: 1
// },
// {
//   name: 'macchiato',
//   price: 6,
//   time: 4
// })

// an array to store the current order

function sumObjectsByKey(...objs) {
  return objs.reduce((acc, cur) => {
    for (let prop in invent) {
      if (b.hasOwnProperty(k))
        acc[k] = (cur[k] || 0) + cur[k];
    }
    return a;
  }, {});
}
console.log(sumObjectsByKey(latte, espresso, cappucino))

let addToOrder = document.getElementsByClassName()


// Andrews placeOrder functionfunction placeOrder(){

// //declare 2 counters to track the total price and total time for our order
// let totalPrice = 0;
// let totalTime = 0;

// //for each drink in the order, look up it's price and time, and add those values to the global price and time counters
// for (let i = 0; i < order.length; i++){
  
  
//   //iterate through the inventory array to look up the price and time for the drink whose name matches the drink ordered
//   for (const property in inventory) {  
//     //if the name of the drink in the shoppingCart is found in the inventory array
//     if (shoppingCart[i] === inventory[property].name){
//       //get the price for this drink
//       let price = inventory[property].price;
//       //get the time for this drink
//       let time = inventory[property].time;
    
//       //add the drink's price and time to the 2 total counters 
//       totalPrice += price;
//       totalTime += time;
      
//     //console log each drink's price and time (just a test)  
//     console.log(`Drink ${i+1} in your order is a '${inventory[property].name}' whose price is $${price} and time is ${time} mins.`);
//   }   
// }
  

  
// }
//   //return the order summary
//  return `Total price of your order is $${totalPrice} and total time is ${totalTime} mins.`;

// }