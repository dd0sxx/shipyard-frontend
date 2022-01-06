import React from 'react';
import dd0sxx from './assets/rei.jpeg';
import Logan from './assets/Logan.jpeg';
import Shipyard from './assets/shipyard.jpeg';

function About() {
  return (
    <div className="about">
      <div className="big-text assistant">Shipyard Studios</div>
      <div className="small-text abel">
        We work with creators of all mediums and enable them to take control of their intellectual
        property by giving them true ownership of their creations. Whether you are a musician,
        visual artist, film-maker, or brand we give you the tools + strategy you need to begin
        creating in web3.
      </div>
      <div className="medium-text assistant">The Team:</div>
      <div className="flex circle-flex" style={{ margin: 'auto', paddingTop: '5vh' }}>
        <a
          href="https://twitter.com/dd0sxx"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div
            className="background-center circle"
            style={{ backgroundImage: `url("${dd0sxx}")`, borderRadius: '50%' }}
          />
          <div
            className="small-text assistant circle-text"
            style={{ textAlign: 'center', color: 'rgb(225, 218, 207)', padding: 0, marginTop: 15 }}
          >
            dd0sxx
          </div>
          <div
            className="small-text abel circle-text"
            style={{
              textAlign: 'center',
              fontSize: 16,
              marginTop: 10,
              padding: 0,
              paddingBottom: 5
            }}
          >
            Dev
          </div>
        </a>
        <a
          href="https://twitter.com/logan_larkin"
          target="_blank"
          style={{ textDecoration: 'none' }} rel="noreferrer"
        >
          <div
            className="background-center circle"
            style={{ backgroundImage: `url("${Logan}")`, borderRadius: '50%' }}
          />
          <div
            className="small-text assistant circle-text"
            style={{ textAlign: 'center', color: 'rgb(225, 218, 207)', padding: 0, marginTop: 15 }}
          >
            Logan
          </div>
          <div
            className="small-text abel circle-text"
            style={{
              textAlign: 'center',
              fontSize: 16,
              marginTop: 10,
              padding: 0,
              paddingBottom: 5
            }}
          >
            Wizard
          </div>
        </a>
        <a href="https://twitter.com/hackerdao_" target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer">
          <div
            className="background-center circle"
            style={{ backgroundImage: `url("${Shipyard}")`, borderRadius: '50%' }}
          />
          <div
            className="small-text assistant circle-text"
            style={{ textAlign: 'center', color: 'rgb(225, 218, 207)', padding: 0, marginTop: 15 }}
          >
            Shipyard DAO
          </div>
          <div
            className="small-text abel circle-text"
            style={{
              textAlign: 'center',
              fontSize: 16,
              marginTop: 10,
              padding: 0,
              paddingBottom: 5
            }}
          >
            Parent
          </div>
        </a>
      </div>
    </div>
  );
}

export default About;
