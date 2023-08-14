import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

const buttonLinks = {
    GitHub: "https://github.com/Pkrysinski/strider-general-store"
}

// This AboutStrider component houses some basic links to both the reposotiry where the project is maintained as well as a link to the Strider Techonologies website.
function AboutStrider() {
    return (
        <div>
            <p >This website built on React.js has been brought to you in part by <a href="https://www.striderintel.com/" target="_blank" rel="noreferrer">Strider Technologies</a></p>
            <p>Please click the icon below to view Peter Krysinski's GitHub Repo for this project...</p>
            <Link to={buttonLinks.GitHub} target="_blank">
                <IconButton aria-label="openinbrowser" component="span">
                    <GitHubIcon />
                </IconButton>
            </Link>         
        </div>
      );
};

export default AboutStrider;