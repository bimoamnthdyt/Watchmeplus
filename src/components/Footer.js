import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-white main-footer">
      <div className="container">
        <h5 className="question">
          Any Question? <br /> Contact +62 838 983 312 98
        </h5>
        <div className="row">
          <div className="col-md-4 col-sm-6 ">
            <div className="rowone">
              <ul className="list-unstyled">
                <li>FAQ</li>
                <li>Whays to Watch</li>
                <li>Corporate Information</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 ">
            <div className="rowone">
              <ul className="list-unstyled">
                <li>Help Center</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 ">
            <div className="rowone">
              <ul className="list-unstyled">
                <li>Account</li>
                <li>Privacy</li>
                <li>Media Center</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-buttom">
          <p>&copy;{new Date().getFullYear()} WatchMe Plus - All Rights Reserveds</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
