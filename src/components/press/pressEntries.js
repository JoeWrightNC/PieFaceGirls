import React, { Component } from "react";
import "./press.css";
import {pressDataPacket} from "../../dataPackets/pressCoverage.js"

const PressIteration = pressDataPacket.map((press, index) =>
<article className="post-item whiteBlog" key={index}>
  <div className="row">
    <div className="col-sm-6">
      <div className="photo-post" style={{backgroundImage: `url(${press.postImg})`}} id={"image-post"+index}></div>
      <p className="date">
        <span className="day">{press.dateMonth}</span>
        <span className="month">{press.dateYear}</span>
      </p>
    </div>
    <div className="col-sm-6">
      <h4 className="title small"><span>From:</span> {press.pressSource}</h4>
      <h3 className="title post">{press.articleTitle}</h3>
      <p>{press.articleExcerpt}</p>
      <a href={press.articleLink} className="btn square inverse">Read more</a>
      <div className="voffset20"></div>
    </div>
  </div>
</article>
);


export class PressEntries extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
          <div className="inverseBlog">
          <div className="section blog list-posts" id="anchor07">
          <div className="container">
            <h2 className="title inverse headerGap">Press</h2>
            <div className="voffset210"></div>
            <div className="row">
              <div className="col-md-12">
                {PressIteration}
              </div>
            </div>
          </div>
        </div>
        <div className="voffset85"></div>
        </div>
          
        );
    }
}