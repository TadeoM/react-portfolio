import React from 'react'
import Carousel from '../components/Carousel';

export const Projects = () => {
  const items = [
    {
      title: "Darkpaw Games",
      description: "Some Description that is really cool.",
      summary: "Summary Text",
      images: [require("../images/Logo.png"), require("../images/Logo.png"), require("../images/Logo.png")],
      gameUrl: "https://www.everquest2.com/news/eq2-kael-drakkel-now-live"
    },
    {
      title: "Gamebreaking Studios Prototype",
      description: "Some Description that is really cool. longer and further",
      summary: "Summary Text",
      images: [require("../images/everquest2.jpg")],
      gameUrl: "https://gamebaking.com/prototypes/Summer2020Prototype/"
    },
    {
      title: "Hit 'em",
      description: "Some Description that is really cool. longer and further",
      summary: "Summary Text",
      images: [require("../images/me.jpg")]
    },
    {
      title: "Gamebreaking Studios Prototype",
      description: "Some Description that is really cool. longer and further",
      summary: "Summary Text",
      images: [require("../images/everquest2.jpg")]
    },
    {
      title: "Gamebreaking Studios Prototype",
      description: "Some Description that is really cool. longer and further",
      summary: "Summary Text",
      images: [require("../images/everquest2.jpg")]
    },
    {
      title: "Gamebreaking Studios Prototype",
      description: "Some Description that is really cool. longer and further",
      summary: "Summary Text",
      images: [require("../images/everquest2.jpg")]
    },
  ];
  return (
    <div className=''>
      <Carousel items={items} imgSize={288}/>
    </div>
  )
}

export default Projects;
