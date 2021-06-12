# The Wallet App

This project will help you cover most of the knowledge you've learned so far in React into practice.

## Functionality

- The app should be able to manage multiple wallets
- A wallet has a name, starting balance, a list of Transactions, and description
- The wallets should be saved and loaded from a storage (with thier data)
- There should be 2 types of transactions (Income and Expense)
- A transaction should have a date, tags, and a note
- a user can jump between the wallets and create wallets

## Mockups

Wallet View
![No Wallet View](https://github.com/ReCoded-Org/iq-bootcamp-wallet-project-students/blob/master/mockups/no-wallet-view.jpg?raw=true)

No Wallet View
![Wallet View](https://github.com/ReCoded-Org/iq-bootcamp-wallet-project-students/blob/master/mockups/wallet-view.jpg?raw=true)

Create Wallet Form
![Create Wallet Form](https://github.com/ReCoded-Org/iq-bootcamp-wallet-project-students/blob/master/mockups/create-wallet-form.jpg?raw=true)

## Components

You are recommended to have these components:

- Main or App
- Create Wallet Form
- Transaction Form
- Transactions List
- Transaction Item
- Navbar
- No wallets error page

## State management

use context api with useReducer to manage the state in this app and pass the state as a prop where you think it should be passed.

use this graph as a reference

![State graph](https://i.ibb.co/wWYFPHK/image.png)

## Style

it is recommended that you use a css library, so check-out [react-bootsrap](https://react-bootstrap.netlify.app/), [tailwind](https://tailwindcss.com/), ...etc.

## Bonus

add routing to the app, for example each wallet has its own route like '/wallets/:name' or for the error page '/noWalletsFound'.

### General tip

Try to make your state effiecent and your code and components reusable as much as you can.
