import React from 'react';
import ReceiptData from "./ReceiptData";

function AboutTheStore() {

    return (
        <div id="aboutthestore" style={{ height: "100vh", position: "relative" }}>
            <h1>
                Hello, and welcome to the Strider General Store!
            </h1>
            <p>
                Below you can find some high-level information about past orders placed...
            </p>
            <ReceiptData style={{paddingBottom:'20px', paddingTop:'20px'}} />
        </div>
    )
};

export default AboutTheStore;