import React, { Component } from "react";
import "./epk.css";
import epkPNGHeader from "../../brandStyles/images/epk/pfgEPKHeader.jpg"
import epkInsta from "../../brandStyles/images/epk/epkIcons/instaEPK.png"
import epkTweet from "../../brandStyles/images/epk/epkIcons/tweetEPK.png"
import epkFB from "../../brandStyles/images/epk/epkIcons/fbEPK.png"
import epkEmail from "../../brandStyles/images/epk/epkIcons/emailEPK.png"
import epkPNG from "../../brandStyles/images/epk/EPK.png"

export class EPKDoc extends Component {
    state = {
    };

    componentWillMount() {

    }

    handlePressClick(destination) {
      console.log(destination)
    }

    render() {
        return (
          <div className="inverseBlog container-fluid relativeContainer">
            <h2 className="title inverse headerGap">Electronic Press Kit</h2>
            <br/>
            <a href={epkPNG} download><button className="epkBtn">Download EPK</button></a>
            <div className="row">
              <div className="col-xs-12 col-md-12">
                <div id="epkBigBody">
                  <img src={epkPNGHeader} alt="epk"/>
                  <div className="epkBlockOne">
                    <p className="epkGenText">Reared in the basements of the Raleigh punk scene, Pie Face Girls are a self-taught, self-actualized trio who make a habit of disrupting convention. Influenced by the grinding distortion of L7 and the Melvins along with the DIY showmanship of Bikini Kill and the Germs, Pie Face Girls aim to leave an impression. period.</p>
                  </div>
                  <div className="iconBanner">
                    <a href="https://www.instagram.com/piefacegirls" target="_blank" rel="noopener noreferrer">
                      <img className="epkIcons" src={epkInsta} alt="instagram"/>
                    </a>
                    <a href="https://twitter.com/piefacegirls" target="_blank" rel="noopener noreferrer">
                      <img className="epkIcons" src={epkTweet} alt="twitter"/>
                    </a>
                    <a href="https://www.facebook.com/piefacegirls" target="_blank" rel="noopener noreferrer">
                      <img className="epkIcons" src={epkFB} alt="facebook"/>
                    </a>
                    <a href="mailto:piefacegirls@gmail.com">
                      <img className="epkIcons" src={epkEmail} alt="email"/>
                    </a>
                  </div>
                  <div className="epkBlockTwo">
                    <div className="onlineMusicBlock">
                      <h3 className="onlineMusHeader">MUSIC ONLINE</h3>
                      <a href="https://goo.gl/kLCnMh" target="_blank" rel="noopener noreferrer">
                        <p className="onlineMusText">SPOTIFY</p>
                      </a>
                      <a href="https://goo.gl/wYAEpd" target="_blank" rel="noopener noreferrer">
                        <p className="onlineMusText">TIDAL</p>
                      </a>
                      <a href="https://piefacegirlsband.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                        <p className="onlineMusText">BANDCAMP</p>
                      </a>
                    </div>
                    <div className="playedWithBlock">
                      <h3 className="playedWithHeader">We've Played With:</h3>
                      <p className="playedWithText">
                        The Descendents ° Talib Kweli ° Cherry Glazerr ° Shannon and the Clams ° The Coat Hangers ° Mykki Blanco ° Downtown Boys ° The Worriers ° Priests ° Shilpa Ray ° Chain and the Gang °  Pale Hound ° Birds of Avalon ° Zack Mexico ° ZenSoFly
                      </p>
                    </div>
                  </div>
                  <div className="epkBlockThree">
                    <div className="onlinePressBlock">
                      <h3 className="onlinePressHeader">
                        <a href="/press" className="dontHov">Press</a>
                      </h3>
                    </div>
                  </div>
                  <div className="epkBlockFour">
                    <ul className="onlineBlogs">
                      <li className="onlineBlogsText">
                        <a href="http://www.thelesigh.com/2017/02/premiere-pie-face-girls-fuck-you-im.html" target="_blank" rel="noopener noreferrer">
                          <p className="onlineBlogsText">
                            The LeSigh
                          </p>
                        </a>
                      </li>
                      <li className="onlineBlogsText">
                        <a href="http://recountmagazine.com/pie-face-girls/" target="_blank" rel="noopener noreferrer">
                          <p className="onlineBlogsText">
                            Recount Magazine
                          </p>
                        </a>
                      </li>
                      <li className="onlineBlogsText">
                        <a href="http://thesparkmag.com/artists/pie-face-girls-fight-for-north-carolina-and-beyond/" target="_blank" rel="noopener noreferrer">
                          <p className="onlineBlogsText">
                            The Spark Mag
                          </p>
                        </a>
                      </li>
                      <li className="onlineBlogsText">
                        <a href="http://www.imposemagazine.com/bytes/chatter/week-in-pop-communions-jasper-lee-donovan-blanc-false-priest-old-smile-pie-face-girls" target="_blank" rel="noopener noreferrer">
                          <p className="onlineBlogsText">
                            Impose Magazine
                          </p>
                        </a>
                      </li>
                      <li className="onlineBlogsText">
                        <a href="http://blog.wknc.org/post/170351717921/the-local-beat-pie-face-girls-dj-sparrow-and" target="_blank" rel="noopener noreferrer">
                          <p className="onlineBlogsText">
                            WKNC Blog
                          </p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="epkBlockFive">
                    <ul className="onlineBlogs">
                      <li className="onlineBlogsText">
                        <p className="onlineBlogsText2">
                          PodCasts:
                        </p>
                      </li>
                      <li className="onlineBlogsText3">
                        <a href="http://www.damagedgoodsradio.com/blog/pie-face-girls-on-the-grey-estates-podcast" target="_blank" rel="noopener noreferrer">
                          <p className="onlineBlogsText">
                            Damaged Goods Radio
                          </p>
                        </a>
                      </li>
                      <li className="onlineBlogsText3">
                        <a href="http://podbay.fm/show/434095730/e/1471297289" target="_blank" rel="noopener noreferrer">
                          <p className="onlineBlogsText">
                            Homeground Podcast
                          </p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="epkTextHeader"> 
                  <p className="epkText">PIE FACE GIRLS</p>
                </div>
                
              </div>
            </div>
            <div className="voffset85"></div>
        </div>
          
        );
    }
}