import React, { Component } from "react";
import "./home.css";



export class HomeNav extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
          <nav class="navbar navbar-default">
      
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Desplegar navegación</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#anchor00"><img src="images/logo-white.png" alt="logo" /></a>
            </div>
      
            <div class="collapse navbar-collapse navbar-ex1-collapse" id="navbar-muziq">
              <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="#anchor00">Home</a></li>
                <li><a href="#anchor03">DISCOGRAPHY</a></li>
                <li><a href="#anchor04">ABOUT</a></li>
                <li><a href="#anchor05">TOUR DATES</a></li>
                <li><a href="#anchor06">GALLERY</a></li>
                <li><a href="#anchor07">NEWS</a></li>
                <li><a href="#anchor08">CONTACT</a></li>
              </ul>
            </div>
      
          </nav>
        );
    }
}