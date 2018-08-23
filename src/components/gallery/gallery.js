import React, { Component } from "react";
import Masonry from 'react-masonry-component';
import ModalImage from 'react-modal-image'
import "./gallery.css";

import pieImg1 from "../../brandStyles/images/gallery/pie1.jpg"
import pieImg2 from "../../brandStyles/images/gallery/pie2.jpg"
import pieImg3 from "../../brandStyles/images/gallery/pie3.jpg"
import pieImg4 from "../../brandStyles/images/gallery/pie4.jpg"
import pieImg5 from "../../brandStyles/images/gallery/pie5.jpg"
import pieImg6 from "../../brandStyles/images/gallery/pie6.jpg"
import pieImg7 from "../../brandStyles/images/gallery/pie7.jpg"
import pieImg8 from "../../brandStyles/images/gallery/pie8.jpg"
import pieImg9 from "../../brandStyles/images/gallery/pie9.jpg"
import pieImg10 from "../../brandStyles/images/gallery/pie10.jpg"
import pieImg1sm from "../../brandStyles/images/gallery/pie1sm.jpeg"
import pieImg2sm from "../../brandStyles/images/gallery/pie2sm.jpg"
import pieImg3sm from "../../brandStyles/images/gallery/pie3sm.jpg"
import pieImg4sm from "../../brandStyles/images/gallery/pie4sm.jpg"
import pieImg5sm from "../../brandStyles/images/gallery/pie5sm.jpg"
import pieImg6sm from "../../brandStyles/images/gallery/pie6sm.jpg"
import pieImg7sm from "../../brandStyles/images/gallery/pie7sm.jpg"
import pieImg8sm from "../../brandStyles/images/gallery/pie8sm.jpg"
import pieImg9sm from "../../brandStyles/images/gallery/pie9sm.jpg"
import pieImg10sm from "../../brandStyles/images/gallery/pie10sm.jpg"

const galleryArr = [
  {small: pieImg1sm, large: pieImg1},
  {small: pieImg2sm, large: pieImg2},
  {small: pieImg3sm, large: pieImg3},
  {small: pieImg4sm, large: pieImg4},
  {small: pieImg5sm, large: pieImg5},
  {small: pieImg6sm, large: pieImg6},
  {small: pieImg7sm, large: pieImg7},
  {small: pieImg8sm, large: pieImg8},
  {small: pieImg9sm, large: pieImg9},
  {small: pieImg10sm, large: pieImg10},
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
        <h2 className="title inverse headerGap">Gallery</h2>
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