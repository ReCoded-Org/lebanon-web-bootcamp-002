// Don't change this file, it simply renders the orders

const TYPES = ['Main', 'Drink', 'Side', 'Desert', 'Other']

const menu = [
    {
        name: 'Hommous',
        type: 2,
        price: 2.99,
        discount: null
    },
    {
        name: 'Taboule',
        type: 2,
        price: 2.99,
        discount: null
    },
    {
        name: 'Falafel',
        type: 2,
        price: 4.99,
        discount: null
    },
    {
        name: 'Caesar Salad',
        type: 2,
        price: 9.99,
        discount: 0.25
    },
    {
        name: 'Fattoush',
        type: 2,
        price: 3.99,
        discount: null
    },
    {
        name: 'Greek Salad',
        type: 2,
        price: 8.99,
        discount: null
    },
    {
        name: 'Juliene Salad',
        type: 2,
        price: 4.99,
        discount: null
    },
    {
        name: 'Mushrom Soup',
        type: 2,
        price: 3.99,
        discount: null
    },
    {
        name: 'Chicken Soup',
        type: 2,
        price: 3.99,
        discount: null
    },
    {
        name: 'Lentil Soup',
        type: 2,
        price: 2.99,
        discount: null
    },
    {
        name: 'Shrimp with Dips',
        type: 2,
        price: 11.99,
        discount: null
    },
    {
        name: 'Potato Wedges',
        type: 2,
        price: 5.99,
        discount: null
    },
    {
        name: 'French Fries',
        type: 2,
        price: 4.99,
        discount: 0.5
    },
    {
        name: 'Spicy Chicken',
        type: 0,
        price: 14.99,
        discount: null
    },
    {
        name: 'Fish on Rice',
        type: 0,
        price: 19.99,
        discount: 0.3
    },
    {
        name: 'Pepsi',
        type: 1,
        price: 0.99,
        discount: null
    },
    {
        name: 'Cola',
        type: 1,
        price: 0.99,
        discount: null
    },
    {
        name: 'Yogurt',
        type: 1,
        price: 1.99,
        discount: null
    },
    {
        name: 'Coffee',
        type: 1,
        price: 3.99,
        discount: null
    },
    {
        name: 'Tea',
        type: 1,
        price: 0.99,
        discount: null
    },
    {
        name: 'Green Tea',
        type: 1,
        price: 0.99,
        discount: null
    },
    {
        name: 'Orange Juice',
        type: 1,
        price: 1.99,
        discount: null
    },
    {
        name: 'Pomegranate Juice',
        type: 1,
        price: 1.99,
        discount: null
    },
    {
        name: 'Cocktail',
        type: 1,
        price: 1.99,
        discount: null
    },
    {
        name: 'Machiato',
        type: 1,
        price: 3.99,
        discount: null
    },
    {
        name: 'American Coffee',
        type: 1,
        price: 3.99,
        discount: null
    },
    {
        name: 'Water',
        type: 1,
        price: 0.99,
        discount: null
    },
    {
        name: 'Sparkling Water',
        type: 1,
        price: 0.99,
        discount: null
    },
    {
        name: 'Havana Mix',
        type: 1,
        price: 4.99,
        discount: null
    },
    {
        name: 'Hawaii Bonata',
        type: 1,
        price: 4.99,
        discount: null
    },
    {
        name: 'Chicken Escalope',
        type: 0,
        price: 11.99,
        discount: null
    },
    {
        name: 'Alfredo Chicken',
        type: 0,
        price: 12.99,
        discount: null
    },
    {
        name: 'Fajita Chicken',
        type: 0,
        price: 11.99,
        discount: null
    },
    {
        name: 'Filet De Manzo',
        type: 0,
        price: 13.99,
        discount: null
    },
    {
        name: 'T Bone',
        type: 0,
        price: 18.99,
        discount: null
    },
    {
        name: 'Salmon Grilled',
        type: 0,
        price: 19.99,
        discount: 0.25
    },
    {
        name: 'Beef Roll',
        type: 0,
        price: 10.99,
        discount: null
    },
    {
        name: 'Jumpo Shrimps',
        type: 0,
        price: 14.99,
        discount: null
    },
    {
        name: 'Beef Lasagna',
        type: 0,
        price: 9.99,
        discount: null
    },
    {
        name: 'Chicken Lasagna',
        type: 0,
        price: 7.99,
        discount: null
    },
    {
        name: 'Swiss Burger',
        type: 0,
        price: 7.99,
        discount: null
    },
    {
        name: 'Classic Burger',
        type: 0,
        price: 6.99,
        discount: null
    },
    {
        name: 'Mexican Burger',
        type: 0,
        price: 7.99,
        discount: null
    },
    {
        name: 'Penne Arabiata',
        type: 0,
        price: 9.99,
        discount: null
    },
    {
        name: 'Fettuccini',
        type: 0,
        price: 8.99,
        discount: null
    },
    {
        name: 'Lenguine De Mare',
        type: 0,
        price: 11.99,
        discount: null
    },
    {
        name: 'Twix Cake',
        type: 3,
        price: 4.99,
        discount: null
    },
    {
        name: 'Nutella Cake',
        type: 3,
        price: 4.99,
        discount: 0.5
    },
    {
        name: 'Lotus',
        type: 3,
        price: 4.99,
        discount: null
    },
    {
        name: 'Trwa',
        type: 3,
        price: 4.99,
        discount: null
    },
    {
        name: 'Chocco',
        type: 3,
        price: 4.99,
        discount: null
    },
    {
        name: 'Red Velvet',
        type: 3,
        price: 4.99,
        discount: 0.25
    },
    {
        name: 'Ice Cream Scope',
        type: 3,
        price: 0.99,
        discount: 0.25
    },
    {
        name: 'Italian Ice Cream Roll',
        type: 3,
        price: 1.99,
        discount: null
    },
    {
        name: 'Baklawa',
        type: 3,
        price: 2.99,
        discount: null
    },
    {
        name: 'Hookah Classic',
        type: 4,
        price: 9.99,
        discount: null
    },
    {
        name: 'Hookah Natural',
        type: 4,
        price: 14.99,
        discount: null
    },
    {
        name: 'Cubian Cigar',
        type: 4,
        price: 3.99,
        discount: null
    },
    {
        name: 'Falvored Cigar',
        type: 4,
        price: 4.99,
        discount: null
    }
]

renderMenu(menu)

function renderMenu(menu) {
    const menuDiv = document.querySelector('.menu')
    menuDiv.innerHTML = ''

    menu.map((item, idx) => {
        const div = document.createElement('div')
        div.dataset['id'] = idx
        div.className = 'bg-gray-100 m-1 p-2 rounded-xl text-center w-32 flex flex-col justify-between shadow-xl'

        div.innerHTML = `
        <h3 class="text-md font-bold">${item.name}</h3>
        <div class="mt-4">
        <p class="text-gray-500">
        <span class="${item.discount ? `line-through text-sm text-red-300` : ""}">\$${item.price}</span>
        ${item.discount ? `<span>\$${getDiscountedPrice(item)}</span>` : ""}
        </p>

        <button data-id=${idx} class="uppercase bg-blue-200 rounded px-3 py-1 m-2 text-sm shadow-sm hover:bg-blue-300 font-semibold">Order</button>
        </div>
        `
        div.querySelector('button').addEventListener('click', handleOrder)

        return div
    }).forEach(div => menuDiv.appendChild(div))
}

function getDiscountedPrice(item) {
    return +toFixed((item.price - item.price * item.discount))
}
