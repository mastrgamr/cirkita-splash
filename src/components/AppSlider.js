import React, { Component } from "react";
import Slider from "react-slick";

import screen1 from '../images/screen1.png';
import screen2 from '../images/screen2.png';
import screen3 from '../images/screen3.png';
import screen4 from '../images/screen4.png';
import screen5 from '../images/screen5.png';
import screen6 from '../images/screen6.png';

// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

export default class AppSlider extends Component {

  render() {
    
    const settings = {
      className: "App-logo",
      centerPadding: "60px",
      fade: true,
      infinite: true,
      speed: 250,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div
        style={{
          width: 354,
          height: 684,
          display: "block"
        }}> 
        <Slider {...settings}>
          <div>
            <img src={screen1} alt="" className="App-slide" />
          </div>
          <div>
            <img src={screen2} alt="" style={{ height: "684px", width: "354px" }} />
          </div>
          <div>
            <img src={screen3} alt="" style={{ height: "684px", width: "354px" }} />
          </div>
          <div>
            <img src={screen4} alt="" style={{ height: "684px", width: "354px" }} />
          </div>
          <div>
            <img src={screen5} alt="" style={{ height: "684px", width: "354px" }} />
          </div>
          <div>
            <img src={screen6} alt="" style={{ height: "684px", width: "354px" }} />
          </div>
        </Slider>
      </div>
    );
  }
}