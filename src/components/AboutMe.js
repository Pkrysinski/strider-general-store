import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const itemData = [
    {
        img: '/aboutMe/selfie.JPEG',
        title: 'Peter',
        rows: 2,
        cols: 2,
    },
    {
        img: '/aboutMe/pottery.JPEG',
        title: 'Pottery',
        rows: 2,
        cols: 2,
    },
    {
        img: '/aboutMe/cactus.JPEG',
        title: 'cactus',
        rows: 2,
        cols: 2,
    },
    {
        img: '/aboutMe/dese-oakley.JPEG',
        title: 'dese-oakley',
        rows: 2,
        cols: 2,
    },
    {
        img: '/aboutMe/focus-st.JPEG',
        title: 'car',
        rows: 2,
        cols: 4,
    },
    {
        img: '/aboutMe/filly.jpg',
        title: 'Filly',
        rows: 2,
        cols: 2,
    },
    {
        img: '/aboutMe/mtn-biking.JPEG',
        title: 'biking',
        rows: 4,
        cols: 2,
    },
    {
        img: '/aboutMe/two-hearted.JPEG',
        title: 'two-hearted',
        rows: 2,
        cols: 2,
    },
    {
        img: '/aboutMe/capitol-reef.jpg',
        title: 'capitol-reef',
        rows: 4,
        cols: 2,
    },
    {
        img: '/aboutMe/scallops.JPEG',
        title: 'scallops',
        rows: 2,
        cols: 2,
    },
    {
        img: '/aboutMe/nala.jpeg',
        title: 'nala',
        rows: 2,
        cols: 2,
    },
    {
        img: '/aboutMe/touring.JPEG',
        title: 'touring',
        rows: 4,
        cols: 4,
    },
];

function AboutMe() {

    return (
        <div id="aboutme" style={{ height: "100vh", position: "relative" }}>
            <h1>
                Hi, my name is Peter!
            </h1>
            <p>
                I'm a Michigan transplant who came to SLC 6 years ago, and this is my portfolio built with React.js !
            </p>
            <p>
                Outdoor interests:  skiing, snowboarding, disc golf, mtn biking, hiking, camping, travel, restaurants/breweries, any new adventure!  Also enjoy doing maintenance on my car, going for a canyon drive, and a simple neighborhood walk.
            </p>
            <p>
                Indoor interests: Cooking, pottery and making ceramics for friends, spending time with my family/pets, video games, music, and of course...coding!
            </p>

            <div id="imageList" style={{ display: "flex", justifyContent: "center" }}>
                <ImageList
                    sx={{ width: 500, height: 450 }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </div>
    )
};

export default AboutMe;