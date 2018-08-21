import React, { Component } from "react";
import "./sitewide.css";



export class Footer extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
          <footer>
            <div className="container">
              <p className="copy">© 2018. All Rights Reserved.</p>
              <ul className="menu-footer">
                <li><a href="/">home</a></li>
                <li><a href="/bio">bio</a></li>
                <li><a href="/music">music</a></li>
                <li><a href="/gallery">gallery</a></li>
                <li><a href="/blog">blog</a></li>
                <li><a href="/merch">merch</a></li>
                <li><a href="/press">press</a></li>
                <li><a href="/epk">epk</a></li>
                <li><a href="/contact">contact</a></li>
              </ul>
            </div>
          </footer>
        );
    }
}