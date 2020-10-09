import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <h1>Andy Llactahuamani</h1>
        <h3>Photographer • Developer • Filmmaker</h3>
        <div className='container-socials'>
          <div className="socials">
            <a href="https://www.github.com/andyll96" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/andy-llactahuamani-6386b5164/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin-in fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/andysll" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram fa-2x" />
            </a>
          </div>
          <div className='i-container'>
            <i class="fas fa-grip-lines fa-2x"></i>
          </div>
        </div>
      </header>

      {/* Quote Section */}
      <section className='section-quote'>
        <div>
          <blockquote>
            "The audience knows the truth. The world is simple. It's miserable.
            Solid all the way through. But if you could fool them, even for a
            second... Then you can make them wonder, and then you... Then you got to see something very special"
          </blockquote>
          <h3>~ The Prestige</h3>
        </div>
        <div>
          <iframe width="480" height="270" src="https://www.youtube.com/embed/X_jcE4awpY8">
          </iframe>
        </div>

      </section>

      {/* Photo Section */}
      <section className='section-photo'>
        {/* <h2>Photos</h2> */}
        <div id='featured-photo-gallery-container'>
          <div className='featured-photo-gallery'>

          </div>
          <div className='featured-photo-gallery-nav'>
            <i class="fas fa-minus fa-2x pg-1"></i>
            <i class="fas fa-minus fa-2x pg-2"></i>
            <i class="fas fa-minus fa-2x pg-3"></i>
          </div>
        </div>

        <Link to="/photos"><span className='button'>View Photos</span></Link>
      </section>

      {/* Film Section */}
      <section className='section-film'>
        <iframe width="760" height="450" src="https://www.youtube.com/embed/X_jcE4awpY8">
        </iframe>

        <div>
          <Link to="/film"><span className='button'>View Films</span></Link>
          {/* This will link to the project page of the currently showing project */}
          <Link to='/films/'><span className='button'>View Project</span></Link>
        </div>
      </section>

      {/* Code Section */}
      <section className='section-code'>
        <h2>Code</h2>
        {/* <Link to='/code/d'>View Project</Link> */}
        <Link to="/code"><span className='button'>View More</span></Link>
      </section>
    </div>
  );
};

export default Home;
