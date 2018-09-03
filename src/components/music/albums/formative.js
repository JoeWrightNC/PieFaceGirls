import React, { Component } from "react";
import ReactHowler from 'react-howler'
import "./albums.css"
import formativeImg from "../../../brandStyles/images/albums/formativeYears.jpg"
import trackNine from "../../../brandStyles/sounds/First/fuckyouimpretty.mp3"
import trackEight from "../../../brandStyles/sounds/First/getonthefloor.mp3"
import trackFour from "../../../brandStyles/sounds/First/ohpiss.mp3"
import trackSeven from "../../../brandStyles/sounds/First/theruns.mp3"
import trackOne from "../../../brandStyles/sounds/Formative/washedup.mp3"
import trackTwo from "../../../brandStyles/sounds/Formative/bait.mp3"
import trackThree from "../../../brandStyles/sounds/Formative/easy.mp3"
import trackFive from "../../../brandStyles/sounds/Formative/10000bc.mp3"
import trackSix from "../../../brandStyles/sounds/Formative/dudeyourgfsucks.mp3"
import playImg from "../../../brandStyles/images/playImg.png"
import pauseImg from "../../../brandStyles/images/pauseImg.png"


export class FormativeAlbum extends Component {
    state = {
      playing: true,
      source: trackOne,
      nowPlaying: "Washed Up"
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
        this.setState({nowPlaying:"Washed Up"})
      } else if (newSrcStr === "trackTwo") {
        this.setState({nowPlaying:"Bait"})
      } else if (newSrcStr === "trackThree") {
        this.setState({nowPlaying:"Easy"})
      } else if (newSrcStr === "trackFour") {
        this.setState({nowPlaying:"O Piss"})
      } else if (newSrcStr === "trackFive") {
        this.setState({nowPlaying:"10,000 BC"})
      } else if (newSrcStr === "trackSix") {
        this.setState({nowPlaying:"Dude Yr Girlfriend Sux"})
      } else if (newSrcStr === "trackSeven") {
        this.setState({nowPlaying:"The Runs"})
      } else if (newSrcStr === "trackEight") {
        this.setState({nowPlaying:"Get On The Floor"})
      } else if (newSrcStr === "trackNine") {
        this.setState({nowPlaying:"Fuck You I'm Pretty"})
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
                    <img src={formativeImg} alt=""/>
                  </div>
                  <p className="album album-list">Formative Years</p>
                  <p className="artist">Pie Face Girls</p>
                  <div className="voffset20"></div>
                  <p className="description">Negative Fun Records <br/>March 2017</p>
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
                            <p className="track-title">Washed Up</p>
                            <p className="track-album">Formative Years |<br/> Pie Face Girls</p>
                          </div>
                          </a>
                      </li>
                      <li>
                        <a onClick={() => this.handleSwap(trackTwo, "trackTwo")}>
                          <div className="track-info">
                            <p className="track-title">Bait</p>
                            <p className="track-album">Formative Years |<br/> Pie Face Girls</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a onClick={() => this.handleSwap(trackThree, "trackThree")}>
                          <div className="track-info">
                            <p className="track-title">Easy</p>
                            <p className="track-album">Formative Years |<br/> Pie Face Girls</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a onClick={() => this.handleSwap(trackFour, "trackFour")}>
                          <div className="track-info">
                            <p className="track-title">O Piss</p>
                            <p className="track-album">Formative Years |<br/> Pie Face Girls</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a onClick={() => this.handleSwap(trackFive, "trackFive")}>
                          <div className="track-info">
                            <p className="track-title">10,000 BC</p>
                            <p className="track-album">Formative Years |<br/> Pie Face Girls</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a onClick={() => this.handleSwap(trackSix, "trackSix")}>
                          <div className="track-info">
                            <p className="track-title">Dude Yr Girlfriend Sux</p>
                            <p className="track-album">Formative Years |<br/> Pie Face Girls</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a onClick={() => this.handleSwap(trackSeven, "trackSeven")}>
                          <div className="track-info">
                            <p className="track-title">The Runs</p>
                            <p className="track-album">Formative Years |<br/> Pie Face Girls</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a onClick={() => this.handleSwap(trackEight, "trackEight")}>
                          <div className="track-info">
                          <p className="track-title">Get On The Floor</p>
                            <p className="track-album">Formative Years |<br/> Pie Face Girls</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a onClick={() => this.handleSwap(trackNine, "trackNine")}>
                          <div className="track-info">
                            <p className="track-title">Fuck You I'm Pretty</p>
                            <p className="track-album">Formative Years |<br/> Pie Face Girls</p>
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