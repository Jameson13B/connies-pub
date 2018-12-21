import React, { Component } from "react";
import * as typeformEmbed from "@typeform/embed";
import "../styles/Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.el = null;
  }
  componentDidMount() {
    if (this.el) {
      typeformEmbed.makeWidget(
        this.el,
        "https://jamesonbrown1.typeform.com/to/f8E5bm",
        {
          hideFooter: true,
          hideHeaders: true,
          hideScrollbars: true,
          opacity: 0,
          buttonText: "Send a message"
        }
      );
    }
  }
  render() {
    return (
      <div className="About">
        <p>Connie: 876-846-7890</p>
        <p>Mon - Sat 9am-11pm and Sun 4pm-11pm</p>
        <p>*Hours vary in off season</p>
        <a
          className="facebook"
          href="http://www.facebook.com/jconnie65"
          target="blank"
        >
          <div className="facebook" />
        </a>
        <div ref={el => (this.el = el)} className="form" />
      </div>
    );
  }
}

export default Contact;
