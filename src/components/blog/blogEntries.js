import React, { Component } from "react";
import "./blog.css";
import {blogDataPacket} from "../../dataPackets/blogPosts"

const BlogIteration = blogDataPacket.map((bPost, index) =>
<article class="post-item" key={index}>
  <div class="row">
    <div class="col-sm-6">
      <div class="photo-post" style={{backgroundImage: `url(${bPost.postImg})`}} id="image-post1"></div>
      <p class="date">
        <span class="day">{bPost.dateDay}</span>
        <span class="month">{bPost.dateMonth}</span>
      </p>
    </div>
    <div class="col-sm-6">
      <h4 class="title small"><span>Posted by:</span> {bPost.author}</h4>
      <h3 class="title post">{bPost.blogTitle}'</h3>
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
          <div>
          <div class="section blog list-posts" id="anchor07">
          <div class="container">
      
            <div class="voffset210"></div>
            <div class="row">
              <div class="col-md-12">
                {BlogIteration}
              </div>
            </div>
          </div>
        </div>
        <div class="voffset85"></div>
        </div>
          
        );
    }
}