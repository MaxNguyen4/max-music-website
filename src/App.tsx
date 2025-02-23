import React from 'react';
import './App.css';
import maxImage from './assets/max.jpg';
import maxImage2 from './assets/max2.jpg';

const App: React.FC = () => {
  return (
    <>
      <section className="landing">
        <div>
          <h1>Max Nguyen</h1>
          <p>Composer, Producer and Musician</p>
          <a href="#">Have a listen!</a>
        </div>

        <div className="landing-img-div">
          <img src={maxImage} alt="Me!" className="landing-img" />
          <img src={maxImage2} alt="Me again!" className="landing-img" />
        </div>
      </section>
    </>
  );
};

export default App;
