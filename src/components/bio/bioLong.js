import React, { Component } from "react";
import "./bio.css";



export class BioLong extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
          <div className="container-fluid">
            <div className="row biography biographyDark">
              <div className="col-xs-2 col-md-2"></div>
              <div className="col-xs-8 col-md-8 biography-description">
                <h2 className="title inverse">BIO</h2>
                <div className="voffset40"></div>
                <p className="cousine">Reared in the basements of the Raleigh punk scene, Pie Face Girls are a self-taught, self-actualized trio who make a habit of disrupting convention. Influenced by the grinding distortion of L7 and the Melvins along with the DIY showmanship of Bikini Kill and the Germs, Pie Face Girls aim to leave an impression. period.</p>
                <br />
                <p className="cousine">Probably another paragraph here, for now just copying the last one.  Reared in the basements of the Raleigh punk scene, Pie Face Girls are a self-taught, self-actualized trio who make a habit of disrupting convention. Influenced by the grinding distortion of L7 and the Melvins along with the DIY showmanship of Bikini Kill and the Germs, Pie Face Girls aim to leave an impression. period.</p>
                <br />
                <p className="cousine">You know that thing I did above where I just copied the old paragraph?  Here I am.  Doing it again.  Reared in the basements of the Raleigh punk scene, Pie Face Girls are a self-taught, self-actualized trio who make a habit of disrupting convention. Influenced by the grinding distortion of L7 and the Melvins along with the DIY showmanship of Bikini Kill and the Germs, Pie Face Girls aim to leave an impression. period.</p>
                <div className="voffset100"></div>
                <br />
                  <br />
                <p className="montserrat extra-bold cita">
                  “Raleigh, NC's Pie Face Girls are one of the most phenomenal, counter-culture groups right now” 
                  <br />
                  <br />
                  -Impose Magazine
                </p>
              </div>
              <div className="col-xs-2 col-md-2"></div>
            </div>
          </div>
        );
    }
}