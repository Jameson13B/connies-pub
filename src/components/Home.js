import React, { Component } from "react";
import { Link } from "react-router-dom";
import connie_bar from "../img/connie_bar.jpg";
import friend_bar from "../img/friend_bar.jpg";
import front from "../img/front.jpg";
import "../styles/Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Home">
        <div className="node">
          <img src={front} alt="front" className="img" />
          <p>
            Welcome to Connies Country Western Pub in Negril, Jamaica. This is
            the only place in Jamaica to get that true Texas experience
            including comfort food, drinks, and country western music. Located
            on One Love Drive in the west end, Connies is convenient, delicious,
            and full of amazing vibes. Come visit us!
          </p>
        </div>
        <div className="node">
          <img src={friend_bar} alt="friend bar" className="img" />
          <p>
            Everyone that visits feels the positive vibes and feels right at
            home. Most people leave Connies having made lifelong friends and
            memories that make them return time and time again. Come in and see
            who you may meet, a tourist from USA, Australia, Canada or even
            locals. This is the place to be.
          </p>
        </div>
        <div className="node">
          <img src={connie_bar} alt="connie at bar" className="img" />
          <p>
            Of course at the core of Connies Country Western Pub is Connie
            Jackson herself. With a Texas size personality and a heart of gold,
            Connie truly is a special person to everyone. A goddess in the
            kitchen and the best host around, click
            <Link to="/menu"> here</Link> to check out Connie's menu.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
