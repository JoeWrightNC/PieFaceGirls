import React, { Component } from "react";
import "./bio.css";



export class BioShort extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
            <div className="row biography biographyDark">
              <div className="col-xs-1 col-md-1"></div>
              <div className="col-xs-9 col-md-9 biography-description">
                <h2 className="title inverse">pie face girls</h2>
                <div className="voffset40"></div>
                <p className="cousine">Reared in the basements of the Raleigh punk scene, Pie Face Girls are a self-taught, self-actualized trio who make a habit of disrupting convention. Influenced by the grinding distortion of L7 and the Melvins along with the DIY showmanship of Bikini Kill and the Germs, Pie Face Girls aim to leave an impression. period.</p>
                <div className="voffset40"></div>
                <p className="montserrat extra-bold cita">
                  “Raleigh, NC's Pie Face Girls are one of the most phenomenal, counter-culture groups right now” 
                  <br />
                  <br />
                  -Impose Magazine
                </p>
              </div>
              <div className="col-xs-2 col-md-2"></div>
            </div>
          
        );
    }
}