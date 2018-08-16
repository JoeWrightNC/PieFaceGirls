import React, { Component } from "react";
import "./epk.css";
import epkPDF from "../../brandStyles/images/epk/EPK.pdf"



export class EPKHeader extends Component {
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
                    <h1 className="primary-title shadowDrop">Electronic Press Kit</h1>
                    <a href={epkPDF} download>
                      <button className="epkBtn">
                        <h2 className="subtitle-text">Click to Download</h2>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}