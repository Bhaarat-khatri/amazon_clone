import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slide.css";

export class Slide extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="wdt">
            <img
              className="img"
              src={
                "https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Household_1500x600._CB669572629_.jpg"
              }
              className="img"
            />
          </div>
          <div className="wdt">
            <img
              src={
                "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/May21/Covid_Hero/Coid_Pantry_MH__1500x600._CB669212531_.jpg"
              }
              className="img"
            />
          </div>
          <div className="wdt">
            <img
              className="img"
              src={
                "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Javed/GTM/HeroPC_1500x600_CBCC._CB669049594_.jpg"
              }
              className="img"
            />
          </div>
          <div className="wdt">
            <img
              className="img"
              src={
                "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Diwali2019/Rishab/Auto_Biss/BISS_GW_Hero/Feb_21/PC_Hero_1500x600-._CB658822030_.jpg"
              }
              className="img"
            />
          </div>
          <div className="wdt">
            <img
              className="img"
              src={
                "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/milaap/Milaap_Hero_pc1x._CB669734096_.jpg"
              }
              className="img"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slide;
