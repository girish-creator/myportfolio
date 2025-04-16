// JavaScript
import React, { useState, useRef, useEffect } from 'react';
import { Col } from "react-bootstrap";
import { Popup } from "./Popup";

export const ProjectCard = ({ title, description, imgUrl, projectName, startDate, endDate, fulldesc }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }
    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  return (
    <>
      <Col size={12} sm={6} md={4}>
      <button className="proj-imgbx-btn" onClick={handleButtonClick}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
        </button>
      </Col>
      {// showPopup && (
        // <div ref={popupRef}>
          // <Popup projectName={projectName} startDate={startDate} endDate={endDate} description={fulldesc} onClose={handleClosePopup} />
        // </div>
      // )
      }
    </>
  );
};