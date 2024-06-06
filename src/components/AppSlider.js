import React, { Component } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Image } from 'semantic-ui-react'

// Import Swiper styles
import 'swiper/css';

import screen1 from '../images/screen1.png';
import screen2 from '../images/screen2.png';
import screen3 from '../images/screen3.png';
import screen4 from '../images/screen4.png';
import screen5 from '../images/screen5.png';
import screen6 from '../images/screen6.png';

export default class AppSlider extends Component {

  render() {
    const slideStyle = {
      height: "584px",
      width: "302px"
    };
  return (
    <div
        style={{
          ...slideStyle,
          display: "block",
          margin: "auto",
          paddingLeft: "8px",
        }}> 
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      effect={'fade'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, EffectFade]}
    >
      <SwiperSlide>
        <Image src={screen1} centered alt="Preview Screenshot of the App Explore Screen in dark mode" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={screen2} centered alt="Preview Screenshot of the App Explore Screen in dark mode"  />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={screen3} centered alt="Preview Screenshot of the App Search Screen in light mode"  />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={screen4} centered alt="Preview Screenshot of the App Route Info Screen in light mode"  />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={screen5} centered alt="Preview Screenshot of the App Station Info Screen in light mode"  />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={screen6} centered alt="Preview Screenshot of the App Station Info Screen in dark mode"  />
      </SwiperSlide>
    </Swiper>
    </div>
  );
  }
}
