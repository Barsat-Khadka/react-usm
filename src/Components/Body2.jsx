import React, { useState, useEffect } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import ClipLoader from "react-spinners/ClipLoader";
import Card1 from '../assets/images/Card1.jpg';
import Card2 from '../assets/images/Card2.jpg';
import Card3 from '../assets/images/Card3.jpg';
import Card4 from '../assets/images/Tutorrayesmajhukyo.jpg'
import Card5 from '../assets/images/FCC.jpg'
import Card6 from '../assets/images/QC.jpg'
import Card7 from '../assets/images/LeadingEdge.jpg'
import Card8 from '../assets/images/Astrology.jpg'
import Card9 from '../assets/images/Journal.jpg'


const cardsData = [
  {
   id: 6,
   title: 'Position Held: Founder/President',
   subtitle: 'Organization Name: Table Tennis Club, BAMS',
   description:
     'We formed and initiated the first proper table tennis club in school. As a team, we also participated on Presidents cup on a regional level for the first time.',
   time: 'September 2019 - August 2022',
   image: Card1,
 },
 {
   id: 1,
   title: 'Position Held: Volunteer Member',
   subtitle: 'Organization Name: Nepal Scouts',
   description:
     'Participated in clean-up campaigns at various schools, volunteered in remote localities to support irrigation, and an instructor in the Scouts assembly.',
   time: 'July 2019 - March 2020',
   image: Card2,
 },
 {
   id: 3,
   title: 'Position Held: Junior Technician ',
   subtitle: 'Organization Name: Namo Buddha Computer Service center',
   description:
     'Repaired laptops and computers, Installed CCTVs and engineered basic electrical devices.',
   time: 'Jun 2, 2023, - Oct 14,2023',
   image: Card3,
 },
 {
     id: 4,
     title: 'Position Held: Tutor',
     subtitle: 'Organization Name: Self-Tutoring',
     description: 'Tutored my juniors our technical courses, web development and together we learned html, css , react and git.',
     time: 'January 5 2022 - March 5 2022',
     image: Card4
   },
   {
     id: 5,
     title: 'Position Held: Learner and Problem Solver',
     subtitle: 'Organization Name: FreeCodeCamp and Codewars community',
     description: 'Completed FreeCodeCamp Certifications and i help begineers regarding Javascript and front-end problems in freeCodeCamp threads and other similar platforms like Codewars',
     time: 'May 2019 - November 2023',
     image: Card5
   },
   {
     id: 10,
     title: 'Position Held: Intern',
     subtitle: 'Organization Name: Quality Computers',
     description: 'I learned laptop and CPU hardware repair skills. Networked with different peoples on the field and gained referral for my another internship.',
     time: 'October 6, 2021 - December 1, 2021',
     image: Card6
   },
   {
     id: 25,
     title: 'Position Held: Student',
     subtitle: 'Organization Name: Navneet Astrology Center',
     description: 'Learned basics of astrology and Vedic chart reading. Worked with astrology software like Jagannatha Hora on zoom meetings with other online students.',
     time: 'February 2020 - April 2020',
     image: Card8
   },
   {
     id: 267,
     title: 'Position Held: Junior Technician',
     subtitle: 'Organization Name: Leading Edge Software',
     description: 'Did frontend web projects with seniors. Reviewed codebase and learned industry practices in software engineering.',
     time: 'July 3, 2022 - September 24 2022',
     image: Card7
   },
   {
     id: 86,
     title: 'Position Held: Helping father in his business to keep records.',
     subtitle: 'Organization Name: Bahradashi Nirman Sewa',
     description: 'To keep records of daily business transactions in a notebook and track of monthly expenses and rental house income.',
     time: 'May 2020 - November 2023',
     image: Card9
   }
];
const Body2 = () => {
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);


  const [cardLoading, setCardLoading] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        await new Promise(resolve => setTimeout(resolve, 500));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
      setCardLoading(new Array(cardsData.length).fill(true));
  }, [cardsData]);

  const handleImageLoad = (index) => {
  
    setCardLoading((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };

  const visibleCards = showAll ? cardsData : cardsData.slice(0, 3);

  return (
    <div className="Body2" id="ECS" style={{ border: '2px solid black' }}>
      <div className="container px-4 py-5">
        <h2 className="pb-5 display-5 fw-bold text-center top-text-before">Extracurriculars</h2>
        {loading && (
          <div className="text-center stylish-loader-container">
            <div className="stylish-loader"></div>
          </div>
        )}
        {!loading && (
          <div className="row">
            {visibleCards.map((card, index) => (
              <div className="col-md-4" key={card.id}>
                <div className="card mb-4 box-shadow">
                  {cardLoading[index] && (
                    <div className="card-img-loading">
                      <div className="stylish-loader"></div>
                    </div>
                  )}
                  <img
                    className={`card-img-top ${cardLoading[index] ? 'hidden' : ''}`}
                    src={card.image}
                    alt="Card image cap"
                    onLoad={() => handleImageLoad(index)}
                  />
                  <div className="card-body">
                    <p className="card-text fw-bold thefont">{card.title}</p>
                    <p className="card-text fw-bold">{card.subtitle}</p>
                    <p className="card-text">{card.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">{card.time}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-3">
          {showAll ? (
            <button
              type="button"
              className="btn btn-outline-primary btn-lg"
              onClick={() => {
                setShowAll(false);
                document.getElementById("ECS").scrollIntoView({ behavior: "smooth" });
              }}>
              <BsArrowLeft />View Less<BsArrowRight />
            </button>
          ) : (
           
            <button
              type="button"
              className="btn btn-outline-dark btn-lg"
              onClick={() => setShowAll(true)}
            >
              <BsArrowRight /> View More <BsArrowLeft />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body2;