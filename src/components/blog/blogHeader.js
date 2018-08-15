import React, { Component } from "react";
import "./blog.css";



export class BlogHeader extends Component {
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
                    <h1 className="primary-title shadowDrop">Blog</h1>
                    <h2 className="subtitle-text">Latest music news and reviews</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}