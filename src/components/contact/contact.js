import React, { Component } from "react";
import "./contact.css";


export class ContactSect extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
          <section className="section contact" id="anchor08">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <div className="voffset70"></div>
                  <div className="title-wrapper">
                    <h2 className="title inverse headerGap">contact</h2>
                  </div>
                  <div className="voffset100"></div>
                </div>
              </div>
              <div className="row no-gutter">
                <div className="col-xs-12 col-md-3 text-center">
                </div>
                <div className="col-xs-12 col-md-3 text-center">
                  <h2 className="title-follow">BOOKING</h2>
                  <div className="voffset40"></div>
                  <hr className="hidden-xs"/>
                  <div className="voffset40"></div>
                  <p className="name"><br/></p>
                  <p className="phone"><br/></p>
                  <p className="email"><a href="mailto:Piefacegirls@gmail.com">Piefacegirls@gmail.com</a></p>
                  <div className="voffset40"></div>
                  <hr className="hidden-xs"/>
                </div>
                <div className="col-xs-12 col-md-3 text-center">
                  <h2 className="title-follow">press</h2>
                  <div className="voffset40"></div>
                  <hr className="hidden-xs"/>
                  <div className="voffset40"></div>
                  <p className="name">Lee Elliot</p>
                  <p className="phone">Unicursal PR</p>
                  <p className="email"><a href="mailto:unicursalpr@gmail.com">Unicursalpr@gmail.com</a></p>
                  <div className="voffset40"></div>
                  <hr className="hidden-xs"/>
                </div>
                <div className="col-xs-12 col-md-3 text-center">
                </div>
              </div>
              <div className="voffset80"></div>
            </div>
          </section>
          
        );
    }
}