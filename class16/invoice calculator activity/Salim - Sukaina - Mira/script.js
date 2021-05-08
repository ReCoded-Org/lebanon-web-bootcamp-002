const orders = [];

document.querySelector(".search-bar").addEventListener("input", handleSearch);

function handleSearch(e) {
  const searchVal = e.target.value.trim().toLowerCase();

  if (searchVal === "") {
    renderMenu(menu);
  } else {
    const filteredItems = menu.filter((item) => {
      return item.name.toLowerCase().includes(searchVal);
    });
    renderMenu(filteredItems);
  }
}

// Task: Implement the function below
function renderInvoice() {
  const itemsDiv = document.querySelector(".invoice-items");
  const totalsDiv = document.querySelector(".totals");
  itemsDiv.innerHTML = "";
  totalsDiv.innerHTML = "";

  let totalPrice = 0;
  let subTotal = 0;
  let discount = 0;

  let quantity = orders.reduce(function (obj, index) {
    if (index in obj) {
      obj[index] += 1;
    } else {
      obj[index] = 1;
    }
    return obj;
  }, {});

  Object.keys(quantity).forEach(function (index) {
    itemsDiv.innerHTML += getInvoiceItemHTML(
      index,
      menu[index].name,
      quantity[index],
      quantity[index] * menu[index].price
    );
    subTotal += quantity[index] * menu[index].price;
    if (menu[index].discount) {
      discount += menu[index].price * menu[index].discount;
    }
  });

  totalPrice = subTotal - discount;

  totalsDiv.innerHTML += getTotalHTML("Subtotal", subTotal, true);
  totalsDiv.innerHTML += discount
    ? getTotalHTML("Discount", discount, true, true)
    : "";
  totalsDiv.innerHTML += getTotalHTML("Total", totalPrice, true, false, true);
}

function handleOrder(e) {
  let target = e.target;
  let itemId = target.dataset["id"];
  orders.push(itemId);
  renderInvoice();
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
    `;
}

function getTotalHTML(
  name,
  cost,
  bold = false,
  negative = false,
  large = false
) {
  return `
        <div class="flex justify-between ${bold ? "font-bold" : ""} ${
    large ? "text-lg" : ""
  }">
            <div>${name}</div>
            <div>${negative ? "-" : ""} \$${cost.toFixed(2)}</div>
        </div>
    `;
}

function toFixed(num) {
  return +num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
}

//==================================
function calculateTotal(item) {
  let price = item.price.value;
  let total = parseFloat(price);
}

function addItems(item) {
  let name = item.name;
  let price = item.price;
  let sub = item.price * item.discount;
}

function render(json) {
  let item = json.Episodes.map((data) => data);
  buttonClicked(item);
}

let clicks = 0;
let button = document.getElementsByTagName("button");

function buttonClicked(item) {
  clicks += 1;
  let modifiedPrice = item.price.value * clicks;
  button.innerHTML = modifiedPrice;
}
