import React, { Component } from "react";
import "./blog.css";



export class BlogEntries extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
            <div className="row biography biographyDark">
              <div className="col-xs-1 col-md-1"></div>
              <div className="col-xs-9 col-md-9 biography-description">
                <div className="voffset40"></div>
                <p className="cousine">Blog Posts Go Here, Soon</p>
                <div className="voffset40"></div>
              </div>
              <div className="col-xs-2 col-md-2"></div>
            </div>
          
        );
    }
}