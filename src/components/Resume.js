import React from 'react';

function Resume() {

    return (
        <div id="resume" style={{ height: "100vh", position: "relative" }}>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="/resume/01PeterKrysinskiResume-IMG.JPG" alt="Peter Krysinski Resume" style={{ height: "500px"}}/>
            </div>
            <br></br>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <a href='/resume/01PeterKrysinskiResume.pdf' download>Click to download PDF</a>
            </div>

        </div>
    )
};

export default Resume;