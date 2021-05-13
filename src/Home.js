import React from "react";
import "./Home.css";
import Product from "./Product.js";
import Slide from "./Slide";
function Home() {
  return (
    <>
      <div className="home">
        <div className="home_container">
          {/* <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/GW/SMP_Desktop_1x._CB669047907_.jpg"
          className="home_image"
        /> */}
          <Slide />
          <div className="home_row">
            <Product
              title="ZOTAC GAMING GeForce RTX 3090 Trinity 24GB GDDR6X 384-bit 19.5 Gbps PCIE 4.0 Gaming Graphics Card, IceStorm 2.0 Advanced Cooling, SPECTRA 2.0 RGB Lighting, ZT-A30900D-10P"
              price={17999}
              ratings={4}
              image="https://m.media-amazon.com/images/I/61uXRT1mgsL._AC_UY218_.jpg"
            />
            <Product
              title="Philips BT3211/15 corded & cordless Beard Trimmer with Fast Charge; 20 settings; 60 min run time"
              price={1699.0}
              ratings={5}
              image="https://m.media-amazon.com/images/I/811xFHHgiPL._AC_UL320_.jpg"
            />
          </div>
          <div className="home_row">
            <Product
              title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
              image="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg"
              price={179990}
              ratings={5}
            />
            <Product
              title="New Apple iPhone 11 (128GB) - Black"
              price={59900}
              ratings={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._AC_SX522_.jpg"
            />
            <Product
              image="https://m.media-amazon.com/images/I/61Ree+7fLOL._AC_UL320_.jpg"
              title="Designer Slub Rayon Fully Stitched Anarkali Kurti for Women & Girls on Jeans Palazzo or Skirt (Plus Size Upto 2XL)"
              price={409}
              ratings={5}
            />
          </div>
          <div className="home_row">
            <Product
              image="https://images-na.ssl-images-amazon.com/images/I/81V%2BhqDbomL._AC_SL1500_.jpg"
              title="Samsung 138 cm (55 inches) 4K Ultra HD Smart LED TV 55Q8CN (Black) (2018 model)"
              ratings={4}
              price={274900}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
