# StoreUs - Assesment Project

## Description

This project is a simple e-commerce application that displays a list of products and allows the user to add them to a shopping cart. The user can also view the shopping cart and remove items from it. The application is built using React.js. The application is responsive and works on mobile devices as well. The application persists the shopping cart data using the browser's local storage. The application also uses a fake API to fetch the products data.
Could not deploy the application due to the fake API.

I used Zustand for state management because it is a simple and lightweight state management library that is easy to use and does not require a lot of boilerplate code.

I used CSS Modules for styling because it is a simple and easy to use solution for styling React components. It also allows you to write CSS code that is scoped to a specific component and does not affect other components.

I used JSON Server to create a fake API to fetch the products data from. I used Axios to make the HTTP requests to the API with the help of custom hook that I created (useRequest).

I used React Router to handle the routing in the application and to create the navigation bar.

I used React Icons to add icons to the application.

I used React Toastify to display toast messages to the user.

I used React Select to create a custom select component.

I used Swiper.js to create a custom slider component to display the products (on the home page).

I used Framer Motion to add animations to the application.

I've used some images from storeus.com, sorry for that 😅😅

## Installation

_Make sure you have Node.js installed on your machine version 16 or higher (18 is recommended)._

1. Clone the repository
2. Run `npm install` or `yarn install` or `pnpm install` to install the dependencies.
3. To run the json server, you have two options:
   1. Run `npm run start:server` or `yarn start:server` or `pnpm start:server` to start the json server on port 3001.
   2. Run `npm run start:server:delay` or `yarn start:server:delay` or `pnpm start:server:delay` to start the json server on port 3001 in delay mode (to simulate a real API).
4. Run `npm run dev` or `yarn dev` or `pnpm dev` to start the development server on port 5173.
5. Open your browser and navigate to `http://localhost:5173` to view the application.

## Technologies Used

- React.js
- React Router
- Zustand (State Management)
- CSS Modules
- JSON Server
- Axios
- React Icons
- React Toastify
- React Select
- Swiper.js
- Framer Motion

## Screenshots

![Home Page](/screenshots/home.png)
![Product Page](/screenshots/products.png)
![Cart](/screenshots/cart.png)
![Contact](/screenshots/contact.png)

## Author

- [Mohamed Tanash]("https://github.com/Mtanash")
