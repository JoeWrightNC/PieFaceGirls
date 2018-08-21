import React, { Component } from "react";
import "./music.css"
import firstImg from "../../brandStyles/images/albums/first.jpg"
import formativeYearsImg from "../../brandStyles/images/albums/formativeYears.jpg"
import {FirstAlbum} from "./albums"


export class MusicSect extends Component {
    state = {
      audioPlayer : ""
    };

    constructor(props) {
      super(props);
      this.discPlayer = this.discPlayer.bind(this);
    }

    componentDidUpdate() {
      console.log(this.state.audioPlayer)
    }

    discPlayer(playerStateString) {
      console.log("Welcome to discplayer: " + playerStateString)
      if (playerStateString === "first") {
        this.setState({ audioPlayer : playerStateString})
      }
      else if (playerStateString === "formative") {
        console.log("working")
        this.setState({ audioPlayer:"formative"})
      } 
      console.log("Check Your Work Bruh")
    }

    render() {
        let audioState = this.state.audioPlayer
        let audioPlayerJSX
        if (audioState === "first") {
          audioPlayerJSX =
          <FirstAlbum />
        } else if (audioState === "formative") {
          audioPlayerJSX =
          <p> formative </p>
        } else {
          audioPlayerJSX =
          <div></div>
        }
        return (
          <section className="section discography homeCont" id="anchor03">
            <h2 className="title inverse headerGap">Music</h2>

            <div className="container-fluid discoContainerFlex">
              <div className="row">
                <div className="col-md-12">
                  <ul className="carousel-discography">
                  <li className="gallery-cell col-xs-12">
                    <div className="row">
                      <div className="col-xs-12 col-md-6 item-disc carouselCorrector">
                        <div className="info-album whiteyDisco">
                          <div className="cover open-disc">
                            <img src={formativeYearsImg} alt=""/>
                            <div className="rollover">
                              <i className="plus"></i>
                              <p onClick={() => this.discPlayer("formative")}>listen to album</p>
                            </div>
                          </div>
                          <p className="album">Formative Years</p>
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-6 item-disc carouselCorrector">
                        <div className="info-album whiteyDisco">
                          <div className="cover open-disc">
                            <img src={firstImg} alt=""/>
                            <div className="rollover">
                              <i className="plus"></i>
                              <p onClick={() => this.discPlayer("first")}>listen to album</p>
                            </div>
                          </div>
                          <p className="album">First</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="voffset100"></div>
              </div>
            </div>
          </div>
          <div id="project-show"></div>
          <div className="section player-album project-window">
            <div className="project-content">
              {audioPlayerJSX}
            </div>
          </div>
        </section>
        );
    }
}