import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import IconButton from '@mui/material/IconButton';

function Portfolio() {

    const projects = [
        {
            id: 1,
            title: "MVC Tech Blog",
            desc: "The purpose of this app is to showcase our understanding of the Model-View-Controller (MVC) architecture.",
            website: "https://mvc-tech-blog-app-production.up.railway.app/",
            github: "https://github.com/Pkrysinski/MVC-Tech-Blog-app",
            img: "/portfolio/mvc-tech-blog-img.JPG",
            alt: "mvc-tech-blog.JPG"
        },
        {
            id: 2,
            title: "Cat Meme Generator",
            desc: "A fun cat meme generator showcasing understanding of 3rd party API's and local storage for historical searches.",
            website: "https://pkrysinski.github.io/cat-meme-generator/",
            github: "https://github.com/Pkrysinski/cat-meme-generator",
            img: "/portfolio/cat-meme-generator-img.JPG",
            alt: "cat-meme-generator-img.JPG"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            desc: "A recreation of weather.com's 5-day outlook, utilizing API provided by api.openweathermap.org based on city/state/zip search criteria.",
            website: "https://pkrysinski.github.io/weather-dashboard-app/",
            github: "https://github.com/Pkrysinski/weather-dashboard-app",
            img: "/portfolio/weather-dashboard-img.JPG",
            alt: "weather-dashboard-img.JPG"
        },
        {
            id: 4,
            title: "Workday Scheduler",
            desc: "A simple workday scheduler app that allow users to save calendar/schedule-based events into hours of the day, with data that saves and persists in local storage. The app will be connected to the DayJS library which gives the ability to have time-based styling depending on what time of day it is (past events will be grey, current will be red, and future will be green).",
            website: "https://deft-sunshine-82cf3c.netlify.app/",
            github: "https://github.com/Pkrysinski/workday-scheduler-app",
            img: "/portfolio/worksday-scheduler-app-img.JPG",
            alt: "worksday-scheduler-app-img.JPG"
        },
        {
            id: 5,
            title: "JavaScript Quiz",
            desc: "A quiz game app based on JavaScript fundamentals. The quiz will prompt a user to start via button, which will trigger a timer to start in the top-right via an event listener. The user will then be promped through a series of basic multiple-choice questions, and depending if the user is correct or not, will either reset the timer back to 10 seconds, or decriment it by some time. The user will also be able to view their previous high scores in the upper-left hand corner.",
            website: "https://pkrysinski.github.io/javascript-quiz-app/",
            github: "https://github.com/Pkrysinski/javascript-quiz-app",
            img: "/portfolio/javascript-quiz-img.JPG",
            alt: "javascript-quiz-img.JPG"
        },
        {
            id: 6,
            title: "The Mealer Dealer",
            desc: "A meal prep app that allows users to input various criteria, which has the app select a meal based on the criteria. When a user logs in they are directed to the homepage. Then they can click the create a meal button or the view all meals button. The create a meal button takes them to the build your meal page, and they enter the following criteria: Total Time, Quanity of Meals, Quantity of People and Choose a Protein. When they submit the form, they will see all the results that match that their input. When they click on the recipe, they will then find ingredients and instructions for that meal.",
            website: "https://the-mealer-dealer-production.up.railway.app/",
            github: "https://github.com/Pkrysinski/The-Mealer-Dealer",
            img: "/portfolio/mealer-dealer-img.JPG",
            alt: "mealer-dealer-img.JPG"
        },
        {
            id: 7,
            title: "InsuLink",
            desc: "A social media app that allows prospective college students with Type 1 Diabetes to look for other T1D potential roommates who have committed to the school and allow them to connect and entertain living together before arrival. The benefit of the app is so that they can assist each other in the event of diabetes complications at any given time.",
            website: "https://insulink-develop.up.railway.app/",
            github: "https://github.com/brachtco/InsuLink",
            img: "/portfolio/insulink.JPG",
            alt: "insulink.JPG"
        }
    ]

    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={6} alignItems="center">
                {projects.map(project => {
                    return (
                        <Card sx={{ maxWidth: 345 }} key={project.id}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={project.img}
                                    alt={project.alt}
                                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.desc}
                                    </Typography>
                                    <br></br>
                                    <Link to={project.github} target="_blank">
                                        <IconButton aria-label="github" component="span">
                                            <GitHubIcon />
                                        </IconButton>
                                    </Link>
                                    <Link to={project.website} target="_blank">
                                        <IconButton aria-label="openinbrowser" component="span">
                                            <OpenInBrowserIcon />
                                        </IconButton>
                                    </Link>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </Stack>
        </Box>
    )
};

export default Portfolio;