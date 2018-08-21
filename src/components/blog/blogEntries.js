import React, { Component } from "react";
import "./blog.css";
import {blogDataPacket} from "../../dataPackets/blogPosts"

const BlogIteration = blogDataPacket.map((bPost, index) =>
<article className="post-item whiteBlog" key={index}>
  <div className="row">
    <div className="col-sm-6">
      <div className="photo-post" style={{backgroundImage: `url(${bPost.postImg})`}} id="image-post1"></div>
      <p className="date">
        <span className="day">{bPost.dateDay}</span>
        <span className="month">{bPost.dateMonth}</span>
      </p>
    </div>
    <div className="col-sm-6">
      <h4 className="title small"><span>Posted by:</span> {bPost.author}</h4>
      <h3 className="title post">{bPost.blogTitle}'</h3>
      {bPost.blogParagraphs.map((paragraph, paraIndex) =>
        <p key={paraIndex}>{paragraph}</p>

      )}
    </div>
  </div>
</article>
);


export class BlogEntries extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
          <div className="inverseBlog">
          <div className="section blog list-posts" id="anchor07">
          <div className="container">
          <h2 className="title inverse headerGap">Blog</h2>
            <div className="voffset210"></div>
            <div className="row">
              <div className="col-md-12">
                {BlogIteration}
              </div>
            </div>
          </div>
        </div>
        <div className="voffset85"></div>
        </div>
          
        );
    }
}