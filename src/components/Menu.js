import React, { Component } from "react";
import menu from "../img/menu.jpg";
import macNCheese from "../img/mac_n_cheese.jpg";
import jennyCake from "../img/chicken.jpg";
import happyHour from "../img/jenny_cake.jpg";
import "../styles/Menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Menu">
        <p>
          Connie has some of the most delicious western comfort foods, amazing
          Jenny's cakes, and the best happy hour in Jamaica (beers served in a
          koozie). Everything is cooked to order with the best ingredients and
          with lots of love. Best known for homemade Mac n Cheese, fried
          chicken, and
          <span style={{ fontStyle: "oblique" }}> special cake*</span>.
        </p>
        <img src={menu} alt="menu board" className="menu" />
        <p>
          In addition, Connie can cook any custom meal you want or crave. Just
          reach out at 876-846-7890 a day in advance and she will work her
          magic.
        </p>
        <div className="meals">
          <img src={macNCheese} alt="Mac \& Cheese" className="menu-img" />
          <img src={jennyCake} alt="Jenny Cakes" className="menu-img" />
          <img src={happyHour} alt="Happy Hour" className="menu-img" />
        </div>
        <p className="disclaimer">
          *If you are interested in trying some special cake or treats, this is
          the place. Come visit Connie and she will help you get started and
          answer any questions you may have.
        </p>
      </div>
    );
  }
}

export default Menu;
