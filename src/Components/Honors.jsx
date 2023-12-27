import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SchoolLogo from '../assets/images/school logo.png';
import medal from '../assets/images/medal.jpg';
import biramar from '../assets/images/biramarsingh.jpg'

const Honors = () => {
  return (
    <>
      <h1 className="thefont text-center pt-5 pb-3">
        Nevertheless, some honored moments
      </h1>

      <div
        className="p-5 mb-4 rounded-3"
        style={{
          backgroundImage: 'linear-gradient(to right, #000, #000), url("your-background-image.jpg")',
          color: '#ffd046',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-fluid py-5">
          <img src={SchoolLogo} alt="School Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />

          <h1 className="display-5 fw-bold ">Principal Merit List</h1>
          <p className="col-md-8 fs-4 top-text">
            To secure a position on the merit list of Bir Amar Singh, a GPA of 3.6 or higher is required, and one must maintain a class rank within the top 3.
          </p>
          <div className="class-info stylish-font">
            <p>Class 9, 11, 12</p>
            <p>Bir Amar Singh Secondary School</p>
        <div style={{ marginLeft: 'auto' }}>
      <img
        src={biramar}
        alt="Bir Amar Singh"
        style={{
          width: '100%',
          height: 'auto',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          border: '4px solid #fff',
          marginTop: '20px', // Add margin top as needed
        }}
      />
    </div>
    </div>
    </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-white rounded-3" style={{ backgroundColor: 'black' }}>
            <h2>Perfect Attendance Award</h2>
            <p className='top-text'>
              Given to the student with the highest attendance in his stream ~ Prize Money of NRS 5000.
            </p>
            <div className='stylish-font'>
              <p>Bir Amar Singh 63rd annual program</p>
              <p>Jan 15, 2021</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 rounded-3" style={{ backgroundColor: '#ffd046', border: '2px solid black' }}>
            <h2>Man of the tournament</h2>
            <p className='top-text'>
              Given to the player with the best performance demonstration in the whole tournament.
            </p>
            <div className='stylish-font' style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <p>Inter-school cricket, Birtamod</p>
                <p>December 27 , 2022</p>
              </div>
              <div style={{ marginLeft: 'auto', maxWidth: '150px' }}>
                <img
                  src={medal}
                  alt="Inter-school Cricket, Birtamod"
                  style={{
                    width: '100%',
                    height: 'auto',
                   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    border: '4px solid #fff',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Honors;



