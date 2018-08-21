import React, { Component } from "react";
import "./epk.css";
import epkPNG from "../../brandStyles/images/epk/EPK.png"

export class EPKDoc extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
          <div className="inverseBlog container-fluid">
            <h2 className="title inverse headerGap">Electronic Press Kit</h2>
            <div className="row">
              <div className="col-xs-12 col-md-12">
                <img src={epkPNG} alt="epk" id="epkImg"/>
              </div>
            </div>
            <div className="voffset85"></div>
        </div>
          
        );
    }
}