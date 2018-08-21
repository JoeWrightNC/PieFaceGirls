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
                  <h2 className="title-follow">MGMT</h2>
                  <div className="voffset40"></div>
                  <hr className="hidden-xs" />
                  <div className="voffset40"></div>
                  <p className="name">Dani Hoffpair</p>
                  <p className="phone"><a href="tel:+1-456-768-9864">T+1-234-567-8910</a></p>
                  <p className="email"><a href="mailto:mgtm@music.com">mgtm@pfg.com</a></p>
                  <div className="voffset40"></div>

                  <hr className="hidden-xs"/>
                </div>
                <div className="col-xs-12 col-md-3 text-center">
                  <h2 className="title-follow">BOOKING</h2>
                  <div className="voffset40"></div>
                  <hr className="hidden-xs"/>
                  <div className="voffset40"></div>
                  <p className="name">Tiffany Huff</p>
                  <p className="phone"><a href="tel:+1-456-768-9864">T+1-234-567-8910</a></p>
                  <p className="email"><a href="mailto:booking@music.com">booking@pfg.com</a></p>
                  <div className="voffset40"></div>
                  <hr className="hidden-xs"/>
                </div>
                <div className="col-xs-12 col-md-3 text-center">
                  <h2 className="title-follow">press</h2>
                  <div className="voffset40"></div>
                  <hr className="hidden-xs"/>
                  <div className="voffset40"></div>
                  <p className="name">Lee Pressguy</p>
                  <p className="phone"><a href="tel:+1-456-768-9864">T+1-234-567-8910</a></p>
                  <p className="email"><a href="mailto:press@music.com">press@pfg.com</a></p>
                  <div className="voffset40"></div>
                  <hr className="hidden-xs"/>
                </div>
                <div className="col-xs-12 col-md-3 text-center">
                  <h2 className="title-follow">info</h2>
                  <div className="voffset40"></div>
                  <hr className="hidden-xs"/>
                  <div className="voffset40"></div>
                  <p className="name">Klay Misenheimer</p>
                  <p className="phone"><a href="tel:+1-456-768-9864">T+1-234-567-8910</a></p>
                  <p className="email"><a href="mailto:info@music.com">info@pfg.com</a></p>
                  <div className="voffset40"></div>
                  <hr className="hidden-xs"/>
                </div>
              </div>
              <div className="voffset80"></div>
            </div>
          </section>
          
        );
    }
}