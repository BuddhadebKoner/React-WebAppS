import React, { useState } from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import Recent from '../../components/Recent/Recent';

export default function Home() {
    const [backgroundImage, setBackgroundImage] = useState('./heroimage.jpg');

    const handleMenuChange = (menu) => {
      console.log("Menu clicked:", menu);
      switch (menu) {
          case "OurStory":
              setBackgroundImage('./heroimage.jpg');
              break;
          case "Membership":
              setBackgroundImage('./membership.jpg');
              break;
          case "WriteBlog":
              setBackgroundImage('./ourstory.jpg');
              break;
          case "Contactus":
              setBackgroundImage('./write.jpg');
              break;
          default:
              setBackgroundImage('./heroimage.jpg');
      }
  };
  

    return (
        <>
            <Hero backgroundImage={backgroundImage} />
            <Recent />
        </>
    );
}
