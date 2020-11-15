import React from 'react';
import Title from '../../Components/Title/Title';

const Home = () => {
  return (
      <main className="main-home">
        <Title title="home"/>
        <div className="home" >
          <p>
            "This is demo page, where I exericesise React...
            Main goal is to learn React~ by building projcet, 
            because who can se not so good design, or original data."
          </p>
        </div>
      </main>
      
  );
};

export default Home;