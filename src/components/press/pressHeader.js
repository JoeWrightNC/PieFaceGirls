import React, { Component } from "react";
import "./press.css";



export class PressHeader extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
          <section className="intro intro-mini full-width jIntro bg-blog" id="anchor00">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-center">
                    <h1 className="primary-title shadowDrop">Press</h1>
                    <h2 className="subtitle-text">Press Reviews of Pie Face Girls</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}