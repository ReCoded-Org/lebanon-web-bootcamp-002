// No need to change this
const orders = []

/* This excersise will help you work with arrays,
you will use the power of arrays in javascript
to implement the function below.
You won't need to do anything with dom, it was setup so you
won't worry about styling or where to put you html, just use it
as outlined in the descriptions below. */


// Task: Implement search function
document.querySelector('.search-bar').addEventListener('input', handleSearch)

function handleSearch(e) {
  const searchVal = e.target.value.trim().toLowerCase()
  // filter the menu based on the menu item name
  // render the filtered menu using the renderMenu function, it takes an array

  if (searchVal === '') {
    renderMenu(menu)
  } else {
    // Filter and display here
    let filterd = menu.filter(el => el.name.toLowerCase().includes(searchVal));
    renderMenu(filterd)
  }
}

// Task: Implement the function below
function renderInvoice() {
  const items = document.querySelector('.invoice-items')
  const totals = document.querySelector('.totals')


  items.innerHTML = ''
  totals.innerHTML = ''


  /* Task: Render items list with quantities
  - the orders array contain indexes of menu items
    for each order button click
  - use the function getInvoiceItemHTML
    to get html for the item that can be appended to itemsDiv
  - Uncomment the code below to see how
    the function is used */

  //  itemsDiv.innerHTML = getInvoiceItemHTML('01', "Test Item", 5, 25)


    let count = {};

    orders.forEach(el => {
      if (count[el] = count[el]){
        count[el] = count[el]  + 1
      }
      else{
       count[el] = 1
     }
    });

  array = orders.filter(function (item, pos) {
   return orders.indexOf(item) == pos;
 })

 array.forEach(el => {
   let quantity = count[el]
   let name = menu[el]
   let price = quantity * menu[el].price
   items.innerHTML += getInvoiceItemHTML(el, name.name, quantity, price)
 })

  // Task: Calculate totals and render them to the totalsDiv

  //- Each menu item has a type index
    //that corresponds to an item in
    // the TYPES array inside menu.js : TYPES[0] === "Main"

  // - Calculate the totals by type for all orders using the original price

  // - Calculate the subtotal for all orders original price

  // - Calculate the total for all orders using the discountes price

  // - Calculate the total discount using subtotal - total

  // - Render them using the getTotalHTML function like it's usage below */
  let [subtotal, total] = [0, 0]
  // Compute totals by type, subtotal, and total here


// Render totals by type here

let discount = subtotal - total
 orders.forEach((order) => {
        if (menu[order].discount !== undefined) {
          discount += menu[order].price  - getDiscountedPrice(menu[order])
          subtotal = subtotal + getDiscountedPrice(menu[order])
          }
          else {
          subtotal += menu[order].price
          total += subtotal
        }
      return total = subtotal - discount

    })

  totals.innerHTML += getTotalHTML('Subtotal', subtotal, true)

  totals.innerHTML += discount ? getTotalHTML('Discount', discount, true, true) : ''

  totals.innerHTML += getTotalHTML('Total', total, true, false, true)
}


// Keep the below helper methods, they generate the required html and style for you

function handleOrder(e) {
  target = e.target
  let array = []
  itemId = target.dataset['id']
  orders.push(itemId)

  renderInvoice()

}

function getInvoiceItemHTML(index, name, quantity, price) {
  return `
    <div class="p-px w-5 bg-gray-300 rounded text-center">
        ${index}
    </div>
    <div>
        <div class='font-bold'>${name}</div>
        <div class="text-gray-500">
            Quantity: ${quantity}
        </div>
    </div>
    <div class='text-right ml-2'>\$${toFixed(price)}</div>
    `
}

function getTotalHTML(name, cost, bold = false, negative = false, large = false) {
  return `
        <div class="flex justify-between ${bold ? 'font-bold' : ''} ${large ? 'text-lg' : ''}">
            <div>${name}</div>
            <div>${negative ? '-' : ''} \$${(cost).toFixed(2)}</div>
        </div>
    `
}

function toFixed(num) {
  return +num.toString()
    .match(/^-?\d+(?:\.\d{0,2})?/)[0]
}