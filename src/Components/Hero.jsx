import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroImage from '../assets/images/USM.png';
import Barsat from '../assets/images/honored.png';
import Nepal from '../assets/images/Nepal.png';
import { Link } from 'react-scroll';
import Lifeslider from './Lifeslider'
import ECS from './Body2'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="container-fluid col-xxl-8 px-4 py-4">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 col-sm-8 col-lg-5">
            <img
              src={Barsat}
              className="d-block mx-lg-auto img-fluid honored"
              alt="Barsat Themes"
              width="700"
              height="500"
              loading="lazy"
              style={{
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0.5, 0, 0.5)',
              }}
            />
          </div>
          <div className="col-lg-6 py-2 hero-text">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              <span>Honors Applicant: Barsat Khadka</span>
            </h1>
            <div className="d-flex align-items-center my-5">
              <img src={Nepal} className="nepallogo mb-2 me-2" />
              <p className="fw-bold">
                I am Barsat Khadka from Nepal.
                <div>An aspiring international freshman</div>
              </p>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-warning btn-outline-dark btn-lg px-4 me-md-2"
              >
                <Link to="Lifeslider" smooth={true} duration={200}>
    Visualize
  </Link>
              </button>
              <button type="button" className="btn btn-outline-dark btn-lg px-4">
              <Link to="ECS" smooth={true} duration={200}>
    ECS
  </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
