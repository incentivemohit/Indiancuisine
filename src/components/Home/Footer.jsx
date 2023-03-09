import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <>
      <div className="footer container bg-dark text-white mb-2 ">
        <div className="row p-4">
          <div className="col-md-3">
            <div className="footer-logo ">
              <h2 style={{ "font-family": "Pacifico ,cursive" }}>
                Indian Cuisine
              </h2>
              <p style={{ fontSize: "12px" }}>
                Our aim is to serve delicious indian food over the world.
              </p>
              <p>(+800)1234 5678 90</p>
              <p>info@company.com</p>

              <ul className="list-unstyled  d-flex" style={{ gap: "15px" }}>
                <li>
                  <TwitterIcon />
                </li>
                <li>
                  <FacebookIcon />
                </li>
                <li>
                  <YouTubeIcon />
                </li>
                <li>
                  <GitHubIcon />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col">
                <h4 className="footer-headerline ">Information</h4>

                <ul className="footer-list list-unstyled ">
                  <li>About us</li>
                  <li>Delivery information</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
              <div className="col">
                <h4 className="footer-headerline ">Customer Service</h4>

                <ul className="footer-list list-unstyled">
                  <li>Contact us</li>
                  <li>Sitemap</li>
                  <li>Brands</li>
                </ul>
              </div>

              <div className="col">
                <h4 className="footer-headerline ">My Account</h4>

                <ul className="footer-list list-unstyled">
                  <li>My account</li>
                  <li>Order History</li>
                  <li>Wish List</li>
                  <li>Newsletter</li>
                  <li>Returns</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <h4 className="text-center p-1 bg-white text-dark mt-1">
                Developed By Mohit Kumar
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
