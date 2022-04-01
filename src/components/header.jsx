import React from "react";

const Header = () => {
  return (
    <div>
      <div className="head">
        <div className="name-brande">
          <h1>
            <div className="name-text irs">
              {" "}
              <span className="colorred">MAD</span>Sense
            </div>
          </h1>
        </div>
        <div className="name-brande4"></div>
        <div className="name-brande3">
          <a href="#home" className="selectors-text irs">
            {" "}
            خانه
          </a>
        </div>
        <div className="name-brande2">
          <a href="#sec3" className="selectors-text irs">
            بسته های اشتراکی
          </a>
        </div>
        <div className="login">
          <div className="text-login irs"> ورود </div>
        </div>
        <div className="hrmoshe" />
      </div>
    </div>
  );
};

export default Header;
