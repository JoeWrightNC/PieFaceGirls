import React, { Component } from "react";
import "./noMatch.css";
import noMatchImg from "../../brandStyles/images/noMatch.gif"


export class NoMatch extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
          <div className="inverseBlog container-fluid">
            <div className="row">
              <div className="col-xs-12 col-md-12">
              <h2 className="title inverse headerGap">404 | The Page Was Not Found</h2>
              <br />
                <img src={noMatchImg} alt="404" id="noMatchImg"/>
              </div>
            </div>
            <div className="voffset85"></div>
        </div>
        );
    }
}