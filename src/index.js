import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// React before v18
// import ReactDOM from "react-dom";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <div className="menu">
      <h2>Our menu</h2>
      <Pizza
        name="Pizza Spinaci"
        photoLink="pizzas/spinaci.jpg"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={10}
      />
      <Pizza
        name="Pizza funghi"
        photoLink="pizzas/funghi.jpg"
        ingredients="Tomato, mozarella"
        price={12}
      />
    </div>
  );
}
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoLink} alt={props.name} />
      <div>
        <h1>{props.name}</h1>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 11;
  const closeHour = 22;
  let status;
  if (hour >= openHour && hour < closeHour) {
    status = "open";
  } else {
    status = "close";
  }
  return (
    <footer className="footer">
      {new Date().toLocaleDateString()} we're currently {status}!
    </footer>
  );
  // return React.createElement("footer", null, "we're currently open!");
}
// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// React before v18
// React.render(<App />);
