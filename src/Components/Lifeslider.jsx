import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import LifeCard from './LifeCard';
import USM from '../assets/images/USM.png';
import Baby from '../assets/images/Baby.jpg';
import PrimaryEducation from '../assets/images/UnitedSchool2011.jpg';
import MiddleSchool from '../assets/images/groupphoto.jpg';
import Highschool from '../assets/images/highschool.jpg';
import FirstWebsite from '../assets/images/firstwebsite.jpg'
import Card2Horizontal from '../assets/images/Card2Horizontal.jpg'
import Astrology from '../assets/images/JHora.jpg'
import TTclub from '../assets/images/TTclub.jpg'
import qualitycomputers from '../assets/images/qualitycomputers.jpg'
import gradaution from '../assets/images/graduation.jpg'
import dad from '../assets/images/dad.jpg'
import reactandgit from '../assets/images/reactandgit.jpg'
import portfoilo from '../assets/images/leadingedgefinal.jpg'
import digitalsat from '../assets/images/dsat.jpg'
import honors from '../assets/images/honorscollegelogo.jpg'
import savesoil from '../assets/images/savesoil.jpg'

const Lifeslider = () => {
  const linkElement1 = (
    <a href="https://en.wikipedia.org/wiki/January_7" target="_blank">
      January 7
    </a>
  );
  const linkElement2 = (
    <a href="https://school.united.edu.np/" target="_blank">
      United.edu.np
    </a>
  );
  const linkElement3 = (
    <a
      href="https://www.google.com/maps/place/Newton's+Education+Academy/@26.6392016,87.9954126,15z/data=!4m6!3m5!1s0x39e5ba8a457fe447:0x5e89ded8c443f58!8m2!3d26.6392016!4d87.9954126!16s%2Fg%2F1hc573hpb?entry=ttu"
      target="_blank"
    >
      On Google Maps
    </a>
  );
  const linkElement4 = (
    <a href="https://biramarsingh.edu.np/" target="_blank">
      Bir AmarSingh.edu.np
    </a>
  );
  const linkElement5 = (
    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9356123/" target="_blank">
      Article on typing speed i found interesting
    </a>
  );
  const linkElement6 = (
    <a href="https://en.wikipedia.org/wiki/Nepal_Scouts" target="_blank">
      What is Nepal Scouts?
    </a>
  );
  const linkElement7 = (
    <a href="https://en.wikipedia.org/wiki/Nepal_Scouts" target="_blank">
      Details on what club did
    </a>
  );
  const linkElement8 = (
    <a href="https://www.vedicastrologer.org/jh/" target="_blank">
      Jagganath Hora Software
    </a>
  );
  const linkElement9 = (
    <a href="https://www.vedicastrologer.org/jh/" target="_blank">
      On map
    </a>
  );
  const linkElement10 = (
    <a href="https://www.w3schools.com/" target="_blank">
      Learning Source: W3 Schools
    </a>
  );
  const linkElement11 = (
    <a href="https://github.com/Barsat-Khadka/barsat.github.io" target="_blank">
      Source Code
    </a>
  );
  const linkElement12 = (
    <a href="https://www.youtube.com/watch?v=33jFcagTHpc&t=452s" target='_blank'>
      What is the digital SAT?
    </a>
  )
  const linkElement13 = (
    <a href="https://consciousplanet.org/en/save-soil" target='_blank'>
      Save Soil
    </a>
  )
  const linkElement14 = (
    <a href="https://www.usm.edu/" target='_blank'>
      USM.edu
    </a>
  )
  const linkElement15 = (
    <a href="https://en.wikipedia.org/wiki/Barhadashi_Rural_Municipality" target='_blank'>
      Our Rural Municipality
    </a>
  )


  const cards = [
    {
      Image: Baby,
      Title: 'Birthday 0',
      Description:
        'The day i was born, according to my father, mother and some legal documents',
      Date: 'January 7, 2006',
      Extra: 'Poush 23 , 2062 in Nepali Calender',
      Link: linkElement1,
    },
    {
      Image: PrimaryEducation,
      Title: 'Primary Education',
      Description: 'United Academy',
      Date: '2009-2012',
      Extra:
        'I vividly recall the moments when my school friends and I would come together to share the lunches we brought from home.',
      Link: linkElement2,
    },
    {
      Image: MiddleSchool,
      Title: 'Middle School',
      Description: 'Newtons education academy',
      Date: '2013-2018',
      Extra:
        'Forging lasting friendships to overcoming academic challenges, these transformative years laid the foundation for the person I am today.',
      Link: linkElement3,
    },
    {
      Image: Highschool,
      Title: 'High School',
      Description: 'Bir AmarSingh Secondary School',
      Date: '2019-2023',
      Extra:
        'Can Never Thank BirAmar Singh enough. The opportunities it provided me - from the internship to the exposure ,i am always indebt of this valuable institution',
      Link: linkElement4,
    },
    {
      Image: FirstWebsite,
      Title: 'Joined various CS communities',
      Description: 'FreecodeCamp and Codewars',
      Date: "May 2019 - Present",
      Extra:
        'Got my first personal computer , a i3 lenovo laptop and made myself familiar with the world of computer science.',
      Link: linkElement5,
    },
    {
      Image: Card2Horizontal,
      Title: 'Volunteer Member',
      Description: 'Nepal Scouts',
      Date: "July 2019 - March 2020",
      Extra:"Participated in clean-up campaigns at various schools, volunteered in remote localities to support irrigation, and served as an instructor in the Scouts assembly.",
      Link: linkElement6
    },
    {
      Image: TTclub,
      Title: 'President/Founder',
      Description: 'Table Tennis Club, BAMS',
      Date: "September 2019 - August 2022",
      Extra:"Formed and initiated the first proper table tennis club in school. Participated in the Presidents cup on a regional level for the first time.",
      Link: linkElement7
    },
    {
      Image: Astrology,
      Title: 'Student',
      Description: 'Navneet Astrology Center',
      Date: "February 2020 - April 2020",
      Extra:"Learned basics of astrology and Vedic chart reading. Worked with astrology software like Jagannatha Hora in Zoom meetings with other online students.",
      Link: linkElement8
    },
    {
      Image: qualitycomputers,
      Title: 'Intern',
      Description: 'Quality Computers',
      Date: "October 6, 2021 - December 1, 2021",
      Extra:" Learned laptop and CPU hardware repair skills. Networked with different people in the field and gained referrals for another internship.",
      Link: linkElement9
    },
    {
      Image: reactandgit,
      Title: ' Tutor',
      Description: 'Self-Tutoring',
      Date: "January 5, 2022 - March 5, 2022",
      Extra:"Tutored juniors in technical courses, web development, and learned HTML, CSS, React, and Git together.",
      Link: "Learning source: W3 Schools"
    },
    {
      Image: portfoilo,
      Title: 'Leading Edge Softwares',
      Description: 'Junior Technician',
      Date: "July 3, 2022 - September 24, 2022",
      Extra:"Worked on frontend web projects with seniors. Reviewed codebase and learned industry practices in software engineering.",
      Link: linkElement10
    },
    {
      Image: dad,
      Title: 'Family Responsibilites',
      Description: 'Helping father in his business to keep records.',
      Date: "May 2020 - November 2023",
      Extra:"Kept records of daily business transactions in a notebook and tracked monthly expenses and rental house income.",
      Link: linkElement15
    },
    {
      Image: digitalsat,
      Title: 'SAT',
      Description: 'Standarized Test',
      Date: "October 7,2023",
      Extra:"Travelled to kathmandu(capital city) with a friend(who is also applying USM) to give the test ",
      Link: linkElement12
    },
    {
      Image: gradaution,
      Title: 'Graduation',
      Description: 'Thank you Bir Amar Singh!',
      Date: "October 20, 2023",
      Extra:"On the job training marks were released and final transcripts attested! Graduation from high scool ",
      Link: linkElement4
    },
    {
      Image: savesoil,
      Title: 'Volunteer',
      Description: 'Giri Bandhu Tea Garden',
      Date: "October 20, 2023 - Present",
      Extra:"As a volunteer for cultivation of tea plants. Gardening and animal care. ",
      Link: linkElement13
    },
    {
      Image: honors,
      Title: 'USM Honors?',
      Description: 'Future.',
      Date: "August 2024",
      Extra:"Hello Honors college. ",
      Link: linkElement14
    },

  ];
  const [isPlaying, setIsPlaying] = useState(false);
  const [marqueeDirection, setMarqueeDirection] = useState('left'); 

  const handlePause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSlideReverse = () => {
    setMarqueeDirection(marqueeDirection === 'left' ? 'right' : 'left'); 
  };


  
    return (
      <div className="App" id="Lifeslider">
        <div className="title top-text-before">
          <h1>Life Slider</h1>
          <p>A look back at significant moments.</p>
        </div>
        <Marquee pauseOnHover={true} play={isPlaying} direction={marqueeDirection} speed="80">
          {cards.map((card, index) => (
            <div className="image-wrapper" key={index}>
              <LifeCard {...card} />
            </div>
          ))}
        </Marquee>
        <div className="info-section">
          <button className="info-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg>
          </button>
          <div className="info-text">
            <p>The slider stops when hovering on the card for PC/laptop users. For Mobile users, the slider stops when you press on the card. You can press anywhere except the cards to resume it</p>
          </div>
        </div>
        <div className="navigation-buttons">
          <button onClick={handlePause}>{isPlaying ? 'Pause' : 'Play'}</button>
          <button onClick={handleSlideReverse}>Slide Reverse</button>
        </div>
      </div>
    );
    
          }

  
  export default Lifeslider;




