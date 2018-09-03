import React, { Component } from "react";
import ReactHowler from 'react-howler'
import "./albums.css"
import firstImg from "../../../brandStyles/images/albums/first.jpg"
import trackOne from "../../../brandStyles/sounds/First/fuckyouimpretty.wav"
import trackTwo from "../../../brandStyles/sounds/First/getonthefloor.wav"
import trackThree from "../../../brandStyles/sounds/First/ohpiss.wav"
import trackFour from "../../../brandStyles/sounds/First/theruns.wav"
import playImg from "../../../brandStyles/images/playImg.png"
import pauseImg from "../../../brandStyles/images/pauseImg.png"


export class FirstAlbum extends Component {
    state = {
      playing: true,
      source: trackOne,
      nowPlaying: "Fuck You, I'm Pretty"
    };

    constructor(props) {
      super(props);
      this.handleSwap = this.handleSwap.bind(this)
      this.handlePlay = this.handlePlay.bind(this)
      this.handlePause = this.handlePause.bind(this)
    }

    handleSwap(newSrc, newSrcStr) {
      this.setState({source: newSrc})
      this.setState({playing: true})
      if (newSrcStr === "trackOne") {
        this.setState({nowPlaying:"Fuck You, I'm Pretty"})
      } else if (newSrcStr === "trackTwo") {
        this.setState({nowPlaying:"Get On The Floor"})
      } else if (newSrcStr === "trackThree") {
        this.setState({nowPlaying:"Oh-Piss"})
      } else if (newSrcStr === "trackFour") {
        this.setState({nowPlaying:"The Runs"})
      }
    }
  
    handlePlay () {
      this.setState({
        playing: true
      })
    }
  
    handlePause () {
      this.setState({
        playing: false
      })
    }

    componentDidUpdate() {
      console.log(this.state.source)
    }

    render() {
        let PlayState = this.state.playing
        let PlayerCTRL
        if (PlayState === true) {
          PlayerCTRL =
          <img src={pauseImg} alt="pause" onClick={this.handlePause} className="playStateImg"/>
        }
        else {
          PlayerCTRL = 
          <img src={playImg} alt="play" onClick={this.handlePlay} className="playStateImg"/>
        }
        return (
          <div className="container playerCont">
            <div className="voffset90"></div>
            <div className="row rowFixa">
              <div className="col-md-4">
                <div className="info-album">
                  <div className="cover">
                    <img src={firstImg} alt=""/>
                  </div>
                  <p className="album album-list">First</p>
                  <p className="artist">Pie Face Girls</p>
                  <div className="voffset20"></div>
                  <p className="description">Self-Released <br/>February 20, 2014</p>
                  <p className="buyalbum">
                    <a href="https://www.apple.com/itunes/?cid=OAS-US-DOMAINS-itunes.com" className="btn square inverse icon">buy album</a>
                  </p>
                  <ul className="links">
                    <li><a href="https://www.apple.com/itunes/?cid=OAS-US-DOMAINS-itunes.com">iTunes</a></li>
                    <li><a href="https://bandcamp.com">BandCamp</a></li>
                    <li><a href="https://soundcloud.com">Soundcloud</a></li>
                    <li><a href="https://reverb.com">Reverb</a></li>
                  </ul>
                  <div className="voffset80"></div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row playerControls">
                  <div className="col-md-8">
                    <div>
                      <div className="nowPlaying">
                        <div className="track-info">
                          <p className="track-album">Currently Playing:</p>
                          <p className="track-title">{this.state.nowPlaying}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <a>
                      {PlayerCTRL}
                    </a>
                  </div>
                </div>
                <div className="disc-tracklist">
                    <ReactHowler
                      playing={this.state.playing}
                      src={this.state.source}
                    />
                    <ol className="playlist0">
                      <li>
                        <a onClick={() => this.handleSwap(trackOne, "trackOne")}>
                          <div className="track-info">
                            <p className="track-title">Fuck You, I'm Pretty</p>
                            <p className="track-album">First | Pie Face Girls</p>
                          </div>
                          </a>
                      </li>
                      <li>
                      <a onClick={() => this.handleSwap(trackTwo, "trackTwo")}>
                          <div className="track-info">
                            <p className="track-title">Get On The Floor</p>
                            <p className="track-album">First | Pie Face Girls</p>
                          </div>
                        </a>
                      </li>
                      <li>
                      <a onClick={() => this.handleSwap(trackThree, "trackThree")}>
                          <div className="track-info">
                            <p className="track-title">Oh-Piss</p>
                            <p className="track-album">First | Pie Face Girls</p>
                          </div>
                        </a>
                      </li>
                      <li>
                      <a onClick={() => this.handleSwap(trackFour, "trackFour")}>
                          <div className="track-info">
                            <p className="track-title">The Runs</p>
                            <p className="track-album">First | Pie Face Girls</p>
                          </div>
                        </a>
                      </li>
                    </ol>
                </div>
              </div>
            </div>
          </div>
        );
    }
}