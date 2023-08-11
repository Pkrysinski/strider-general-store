import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const buttonLinks = {
    LinkedIn: "https://www.linkedin.com/in/peterkrysinski/",
    GitHub: "https://github.com/Pkrysinski/",
    Twitter: "https://twitter.com/thatkry"
}

function Footer() {
    return (
        <footer>
            <Link to={buttonLinks.LinkedIn} target="_blank">
                <IconButton aria-label="github" component="span">
                    <LinkedInIcon />
                </IconButton>
            </Link>
            <Link to={buttonLinks.GitHub} target="_blank">
                <IconButton aria-label="openinbrowser" component="span">
                    <GitHubIcon />
                </IconButton>
            </Link>         
        </footer>
      );
};

export default Footer;