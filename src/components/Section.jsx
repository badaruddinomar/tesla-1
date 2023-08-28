import React from "react";
import "./section.css";
import Fade from "react-reveal/Fade";
import downArrow from "./../images/down-arrow.svg";
const Section = (props) => {
  return (
    <>
      <div className={`wrap ${props.bgImage}`}>
        <Fade bottom>
          <div className="item-text">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
        </Fade>

        <Fade bottom>
          <div className="btn-group">
            <div className="btn">
              <button className="left-btn">{props.leftBtnText}</button>
              {props.rightBtnText && (
                <button className="right-btn">{props.rightBtnText}</button>
              )}
            </div>
            {props.downArrowIcon && <img src={downArrow} alt="downArrow" />}
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Section;
