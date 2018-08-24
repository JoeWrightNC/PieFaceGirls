import React, { Component } from "react";
import Masonry from 'react-masonry-component';
import Modal from 'react-modal';
import "../../../node_modules/react-modal-video/scss/modal-video.scss"
import "./videos.css";

import vid1Scrn from "../../brandStyles/images/gallery/pie1sm.jpeg"
import vid2Scrn from "../../brandStyles/images/gallery/pie2sm.jpg"
import vid3Scrn from "../../brandStyles/images/gallery/pie3sm.jpg"
import vid4Scrn from "../../brandStyles/images/gallery/pie4sm.jpg"
import vid5Scrn from "../../brandStyles/images/gallery/pie5sm.jpg"
import vid6Scrn from "../../brandStyles/images/gallery/pie6sm.jpg"
import vid7Scrn from "../../brandStyles/images/gallery/pie7sm.jpg"
import vid8Scrn from "../../brandStyles/images/gallery/pie8sm.jpg"
import vid9Scrn from "../../brandStyles/images/gallery/pie9sm.jpg"
import vid10Scrn from "../../brandStyles/images/gallery/pie10sm.jpg"
import demoVid from "../../brandStyles/images/homeVideo.mp4"

const videoArr = [
  {videoID: demoVid, screen: vid1Scrn, title: "Sample Title 1"},
  {videoID: demoVid, screen: vid2Scrn, title: "Sample Title 2"},
  {videoID: demoVid, screen: vid3Scrn, title: "Sample Title 3"},
  {videoID: demoVid, screen: vid4Scrn, title: "Sample Title 4"},
  {videoID: demoVid, screen: vid5Scrn, title: "Sample Title 5"},
  {videoID: demoVid, screen: vid6Scrn, title: "Sample Title 6"},
  {videoID: demoVid, screen: vid7Scrn, title: "Sample Title 7"},
  {videoID: demoVid, screen: vid8Scrn, title: "Sample Title 8"},
  {videoID: demoVid, screen: vid9Scrn, title: "Sample Title 9"},
  {videoID: demoVid, screen: vid10Scrn, title: "Sample Title 10"},
]

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export class Videos extends Component {
  state = {
  };

  constructor () {
    super()
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal (screen) {
    this.setState({modalIsOpen: {[screen]: true}})
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const videoElements = videoArr.map((element, index) => 
      <div className="image-element-class videoTile">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="vidModal" onClick={this.closeModal}>
            <video className="modalVideo" controls>
              <source src={element.videoID} type="video/mp4" />
            </video>
          </div>
        </Modal>
        <img className="vidScreenImg" src={element.screen} onClick={this.openModal.bind(this, element.screen)} alt="tile"/>
        <span className="vidTitles">{element.title}</span>
      </div>
    )

    return (
      <section className="section homeCont">
        <h2 className="title inverse headerGap">Videos</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
                    <Masonry
                      className={'galleryClass'} 
                      elementType={'div'} 
                      disableImagesLoaded={false} 
                      updateOnEachImageLoad={true} 
                    >
                      {videoElements}
                    </Masonry>
            <div className="voffset100"></div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}