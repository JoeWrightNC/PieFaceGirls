import React, { Component } from "react";
import ReactHowler from 'react-howler'
import "./albums.css"
import firstImg from "../../../brandStyles/images/albums/first.jpg"
import trackOne from "../../../brandStyles/sounds/firstTracks/01.mp3"
import trackTwo from "../../../brandStyles/sounds/firstTracks/02.mp3"
import trackThree from "../../../brandStyles/sounds/firstTracks/03.mp3"




export class FirstAlbum extends Component {
    state = {
      playing: false,
      source: trackOne
    };

    constructor(props) {
      super(props);
      this.handleSwap = this.handleSwap.bind(this)
      this.handlePlay = this.handlePlay.bind(this)
      this.handlePause = this.handlePause.bind(this)
    }

    handleSwap(newSrc) {
      // Just switch back and forth between 0 and 1
      this.setState({source: newSrc})
      this.setState({
        playing: true
      })
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
        return (
          <div className="container">
            <div className="voffset90"></div>
            <div className="row">
              <div className="col-md-4">
                <div className="info-album">
                  <div className="cover">
                    <img src={firstImg} alt=""/>
                  </div>
                  <p className="album album-list">First</p>
                  <p className="artist">Pie Face Girls</p>
                  <div className="voffset20"></div>
                  <p className="description">some sort of album bio type info here.  release year, some notes on it, w/e or nothing really </p>
                  <p className="buyalbum">
                    <a href="#" className="btn square inverse icon">buy album</a>
                  </p>
                  <ul className="links">
                    <li><a href="#">iTunes</a></li>
                    <li><a href="#">band camp</a></li>
                    <li><a href="#">other</a></li>
                  </ul>
                  <div className="voffset80"></div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="disc-tracklist">
                    <ReactHowler
                      playing={this.state.playing}
                      src={this.state.source}
                    />
                    <ol className="playlist0">
                      <li>
                        <a onClick={() => this.handleSwap(trackOne)}>
                          <div className="track-info">
                            <p className="track-title">Fuck You, I'm Pretty</p>
                            <p className="track-album">First | Pie Face Girls</p>
                          </div>
                          </a>
                      </li>
                      <li>
                      <a onClick={() => this.handleSwap(trackTwo)}>
                          <div className="track-info">
                            <p className="track-title">Get On The Floor</p>
                            <p className="track-album">First | Pie Face Girls</p>
                          </div>
                        </a>
                      </li>
                      <li>
                      <a onClick={() => this.handleSwap(trackThree)}>
                          <div className="track-info">
                            <p className="track-title">Oh-Piss</p>
                            <p className="track-album">First | Pie Face Girls</p>
                          </div>
                        </a>
                      </li>
                      <li>
                      <a onClick={() => this.handleSwap(trackOne)}>
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