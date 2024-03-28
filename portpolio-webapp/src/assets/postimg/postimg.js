import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';

import facebook from './mediaimg/facebook.png'
import instagram from './mediaimg/instagram.png'
import x from './mediaimg/x.png'
import linkedin from './mediaimg/linkedin.png'

export const assets = {
    post1: {
        title: "Ubantu 22.10",
        date: "March 28, 2024",
        image: img1,
        description: "Discover your coding potential with Ubuntu 23.10! Elevate your skills with its seamless interface, simplified setup, bulletproof security, and abundant toolset including Python and Java. Benefit from community support and personalize your coding environment. Join us in conquering the coding realm together!🚀💻",
        links: "https://www.linkedin.com/posts/buddhadeb-koner-8501b3231_unleash-your-coding-potential-with-ubuntu-activity-7177013167292657664-uucE?utm_source=share&utm_medium=member_desktop",
        profilelink: "https://www.linkedin.com/in/buddhadeb-koner-8501b3231/",
        media: linkedin,
    },
    post2: {
        title: "Demo Post",
        date: "March 28, 2024",
        image: img2,
        description: "Demo description for the second post.",
        links: "https://www.linkedin.com/in/buddhadeb-koner-8501b3231/",
        profilelink: "https://www.instagram.com/buddhadeb.exe/",
        media: instagram,
    },
    post3: {
        title: "Demo Post",
        date: "March 28, 2024",
        image: img3,
        description: "Demo description for the third post.",
        links: "https://www.linkedin.com/in/buddhadeb-koner-8501b3231/",
        profilelink: "https://www.linkedin.com/in/buddhadeb-koner-8501b3231/",
        media: linkedin,
    },
    post4: {
        title: "Demo Post",
        date: "March 28, 2024",
        image: img4,
        description: "Demo description for the fourth post.",
        links: "https://www.linkedin.com/in/buddhadeb-koner-8501b3231/",
        profilelink: "https://twitter.com/buddhadeb_koner",
        media: x,
    },
};

export const numberOfAssets = Object.keys(assets).length;
