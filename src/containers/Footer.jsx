import React from "react";
import "../assets/styles/Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-item">
        <a href="#top">
          <span>A</span>
        </a>
        <p>Alejandro Arra</p>
      </div>
      <div className="footer-social">
        <a href="mailto:alejandroarradev@gmail.com">
          <img src="https://img.icons8.com/ios/50/ffffff/filled-message.png" />
        </a>
        <a
          href="https://www.linkedin.com/in/alejandroarra-projectmanager-dev/"
          target="_blank"
        >
          <img src="https://img.icons8.com/ios/50/ffffff/linkedin.png" />
        </a>
        <img src="https://img.icons8.com/ios/50/ffffff/instagram-new--v1.png" />
        <img src="https://img.icons8.com/ios/50/ffffff/twitter-squared.png" />
      </div>
    </footer>
  );
};
