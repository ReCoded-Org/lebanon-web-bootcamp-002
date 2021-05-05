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
    const searchVal = e.target.value.trim().toLowerCase();
    // filter the menu based on the menu item name
    // render the filtered menu using the renderMenu function, it takes an array

    if (searchVal === '') {
        renderMenu(menu)
    } else {
        // Filter and display here
        const searchResult = menu.filter(item => {
            return item.name.toLowerCase().includes(searchVal)
        })
        renderMenu(searchResult);
    }
    
}

// Task: Implement the function below
function renderInvoice() {
    const itemsDiv = document.querySelector('.invoice-items');
    const totalsDiv = document.querySelector('.totals');
    const nameDiv = itemsDiv.getElementsByClassName('font-bold');
    const quantityDiv = itemsDiv.getElementsByClassName('text-gray-500');
    itemsDiv.innerHTML = '';
    totalsDiv.innerHTML = '';
    

    /* Task: Render items list with quantities

    - the orders array contain indexes of menu items 
      for each order button click
    
    - use the function getInvoiceItemHTML 
      to get html for the item that can be appended to itemsDiv

    - Uncomment the code below to see how 
      the function is used */

    
    let orderObj = {};
    let typePrices = {};
    let total = 0;
    let totalOriginalPrice = 0;
    let quantityCount = keys => {
        orderObj[keys] = ++orderObj[keys] || 1;
    }
    orders.forEach(quantityCount);
    console.log(orderObj);
    let arr = Object.entries(orderObj);
    for(let i= 0; i< arr.length; i++){
        console.log(arr[i]);
        let index = arr[i][0];
        let quantity = arr[i][1];
        let itemName = menu[index].name;
        let discount = menu[index].discount
        let orginalPrice = menu[index].price * quantity;
        let discountedPrice = ((menu[index].price) - (menu[index].price * discount)) * quantity;
        let type = menu[index].type;
        typePrices[type] = orginalPrice;
        console.log(typePrices);
        itemsDiv.innerHTML += getInvoiceItemHTML(index, itemName, quantity, orginalPrice);
        totalOriginalPrice += orginalPrice; 
        total += discountedPrice;
        totalsDiv.innerHTML = totalOriginalPrice;
    }

    // getInvoiceItemHTML(index, name, quantity, price)


    /* Task: Calculate totals and render them to the totalsDiv

    - Each menu item has a type index 
      that corresponds to an item in 
      the TYPES array inside menu.js : TYPES[0] === "Main"

    - Calculate the totals by type for all orders using the original price

    - Calculate the subtotal for all orders original price

    - Calculate the total for all orders using the discountes price

    - Calculate the total discount using subtotal - total

    - Render them using the getTotalHTML function like it's usage below */

    // Compute totals by type, subtotal, and total here

    let discount = totalOriginalPrice - total

    // Render totals by type here

    totalsDiv.innerHTML += getTotalHTML('Subtotal', totalOriginalPrice, true)

    totalsDiv.innerHTML += discount? getTotalHTML('Discount', discount, true, true):''

    totalsDiv.innerHTML += getTotalHTML('Total', total, true, false, true)
}

// Keep the below helper methods, they generate the required html and style for you

function handleOrder(e) {
    target = e.target
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

function getTotalHTML(name, cost, bold=false, negative=false, large=false) {
    return `
        <div class="flex justify-between ${bold? 'font-bold':''} ${large? 'text-lg':''}">
            <div>${name}</div>
            <div>${negative? '-':''} \$${(cost).toFixed(2)}</div>
        </div>
    `
}

function toFixed(num) {
    return +num.toString()
        .match(/^-?\d+(?:\.\d{0,2})?/)[0]
}