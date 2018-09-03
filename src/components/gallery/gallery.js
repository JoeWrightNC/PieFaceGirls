import React, { Component } from "react";
import Masonry from 'react-masonry-component';
import ModalImage from 'react-modal-image'
import "./gallery.css";

import pieImg2 from "../../brandStyles/images/gallery/pfg1.jpg"
import pieImg3 from "../../brandStyles/images/gallery/pfg2.jpg"
import pieImg1 from "../../brandStyles/images/gallery/pfg3.jpg"
import pieImg4 from "../../brandStyles/images/gallery/pfg4.jpg"
import pieImg5 from "../../brandStyles/images/gallery/pfg5.jpg"
import pieImg6 from "../../brandStyles/images/gallery/pfg6.jpg"
import pieImg2sm from "../../brandStyles/images/gallery/pfg1sm.jpg"
import pieImg3sm from "../../brandStyles/images/gallery/pfg2sm.jpg"
import pieImg1sm from "../../brandStyles/images/gallery/pfg3sm.jpg"
import pieImg4sm from "../../brandStyles/images/gallery/pfg4sm.jpg"
import pieImg5sm from "../../brandStyles/images/gallery/pfg5sm.jpg"
import pieImg6sm from "../../brandStyles/images/gallery/pfg6sm.jpg"

const galleryArr = [
  {small: pieImg1sm, large: pieImg1},
  {small: pieImg2sm, large: pieImg2},
  {small: pieImg3sm, large: pieImg3},
  {small: pieImg4sm, large: pieImg4},
  {small: pieImg5sm, large: pieImg5},
  {small: pieImg6sm, large: pieImg6},
]


export class Gallery extends Component {
  state = {
  };

  componentWillMount() {

  };


  render() {
    const childElements = galleryArr.map(function(element,index) {
      return (
        <ModalImage 
          small={element.small}
          large={element.large}
          alt="galleryTile"
          className="image-element-class galleryTile"
          key={index}
        />
      )
    })

    return (
      <section className="section homeCont">
        <h2 className="title inverse headerGap">Photos</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
                    <Masonry
                      className={'galleryClass'} 
                      elementType={'div'} 
                      disableImagesLoaded={false} 
                      updateOnEachImageLoad={true} 
                    >
                      {childElements}
                    </Masonry>
            <div className="voffset100"></div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}