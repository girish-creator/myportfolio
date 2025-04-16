import React from 'react';
import { Row } from "react-bootstrap";

export function Popup({ projectName, startDate, endDate, description, onClose }) {
    return (
        <div className="popup">
            <div className="popup-inner">
                <div className="popup-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="popup-dates" style={{ textAlign: 'left' }}>
                        <div>Start: {startDate}</div>
                        <div>End  : {endDate}</div>
                    </div>
                    <div className="popup-title" style={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}>
                        {projectName}
                    </div>
                    <div className="popup-close" style={{ textAlign: 'right' }}>
                        <button className="close-btn" onClick={onClose}>Close</button>
                    </div>
                </div>
                <div className="popup-description" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', padding: '20px', height: 700, width: 1157, borderRadius: 10 }}>
                    <div className="popup-inline-des-tool-box" style={{ backgroundColor: '#AA367C ', borderRadius: 25, boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)", textAlign: 'center', marginTop: '20px', marginLeft: '20px', marginBottom: '20px', marginRight: '20px', alignItems: 'center' }}>
                        <h4>{description}</h4>
                    </div>
                    <Row size={12} sm={6} md={4}>
                    <div className="popup-inline-des-tool-box" style={{ backgroundColor: '#AA367C ', borderRadius: 25, boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)", textAlign: 'center', marginTop: '20px', marginLeft: '20px', marginBottom: '20px', marginRight: '20px', alignItems: 'center', width: 800 }}>
                        <p>{description}</p>
                    </div>
                    <div className="popup-inline-des-tool-box" style={{ backgroundColor: '#AA367C ', borderRadius: 25, boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)", textAlign: 'center', marginTop: '20px', marginLeft: '20px', marginBottom: '20px', marginRight: '20px', alignItems: 'center', width: 800  }}>
                        <p>{description}</p>
                    </div>
                    </Row>
                </div>
            </div>
        </div>
    );
}