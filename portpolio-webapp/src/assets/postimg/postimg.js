import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';

export const assets = {
    post1: {
        title: "Ubantu 22.10",
        date: "March 28, 2024",
        image: img1,
        description: "Demo description for the first post.",
        links: "https://www.linkedin.com/in/buddhadeb-koner-8501b3231/",
    },
    post2: {
        title: "Demo Post",
        date: "March 28, 2024",
        image: img2,
        description: "Demo description for the second post.",
        links: "https://www.linkedin.com/in/buddhadeb-koner-8501b3231/",
    },
    post3: {
        title: "Demo Post",
        date: "March 28, 2024",
        image: img3,
        description: "Demo description for the third post.",
        links: "https://www.linkedin.com/in/buddhadeb-koner-8501b3231/",
    },
    post4: {
        title: "Demo Post",
        date: "March 28, 2024",
        image: img4,
        description: "Demo description for the fourth post.",
        links: "https://www.linkedin.com/in/buddhadeb-koner-8501b3231/",
    },
};

export const numberOfAssets = Object.keys(assets).length;
