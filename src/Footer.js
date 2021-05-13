import React from "react";
import "./Footer.css";

function Footer() {
  function GoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <div className="footer_backToTop" onClick={GoTop}>
        Back to top
      </div>
      <div className="footer_info">
        <div className="footer_infoInner">
          <div className="footer_infoHeading">Get to Know</div>
          <a href="" className="footerpart">
            About Us
          </a>
          <a href="" className="footerpart">
            Careers
          </a>
          <a href="" className="footerpart">
            Press Releases
          </a>
          <a href="" className="footerpart">
            Amazon Cares
          </a>
          <a href="" className="footerpart">
            Gift a Smile
          </a>
        </div>
        <div className="footer_infoInner">
          <div className="footer_infoHeading">Connect with Us</div>
          <a href="" className="footerpart">
            Facebook
          </a>
          <a href="" className="footerpart">
            Twitter
          </a>
          <a href="" className="footerpart">
            Instagram
          </a>
        </div>
        <div className="footer_infoInner">
          <div className="footer_infoHeading">Make Money with Us</div>
          <a href="" className="footerpart">
            Sell on Amazon
          </a>
          <a href="" className="footerpart">
            Sell under Amazon Accelerator
          </a>
          <a href="" className="footerpart">
            Amazon Global Selling
          </a>
          <a href="" className="footerpart">
            Become an Affiliate
          </a>
          <a href="" className="footerpart">
            Fulfilment by Amazon
          </a>
          <a href="" className="footerpart">
            Advertise Your Products
          </a>
          <a href="" className="footerpart">
            Amazon Pay on Merchants
          </a>
        </div>
        <div className="footer_infoInner">
          <div className="footer_infoHeading">Let Us Help You</div>
          <a href="" className="footerpart">
            COVID-19 and Amazon
          </a>
          <a href="" className="footerpart">
            Your Account
          </a>
          <a href="" className="footerpart">
            Returns Centre
          </a>
          <a href="" className="footerpart">
            100% Purchase Protection
          </a>
          <a href="" className="footerpart">
            Help
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
