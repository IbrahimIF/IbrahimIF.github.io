import React from 'react';
import styled from 'styled-components';
import 'swiper/css';

function EventCarousel () {
    const logos = [
        { name: 'AWS Summit', imgUrl: '/assets/Events/AWS_Summit.png' },
        { name: 'Anticipate London', imgUrl: '/assets/Events/Anticipate-London.png' },
        { name: 'Bright Network Festival', imgUrl: '/assets/Events/Bright_Network.png' },
        { name: 'Brunel university Careers Event', imgUrl: '/assets/Events/Brunel_University.png' },
        { name: 'Black Tech Fest', imgUrl: '/assets/Events/BTF.png' },
        { name: 'DeenEngineers', imgUrl: '/assets/Events/DeenEngineers.png' },
        { name: 'Kings College Events', imgUrl: '/assets/Events/Kings_College_London.png' },
        { name: 'London Tech Week', imgUrl: '/assets/Events/London_Tech_Week.png' },
        { name: 'Salesforce Tower', imgUrl: '/assets/Events/Salesforce.png' },
        { name: 'Snowflake', imgUrl: '/assets/Events/Snowflake.png' },
        { name: 'Somalis In Tech', imgUrl: '/assets/Events/somalis_in_tech.png' },
        { name: 'TECHEX', imgUrl: '/assets/Events/TECHEX.png' },
        { name: 'The Orange Trust', imgUrl: '/assets/Events/the_orange_trust.png' },
        { name: 'AI for the rest of us', imgUrl: '/assets/Events/AI_For_The_Rest_Of_Us.png' },
        { name: '01 Founders', imgUrl: '/assets/Events/01_Founders.png' },
        { name: '10000 Interns Foundation', imgUrl: '/assets/Events/10k_Interns_Foundation.png' },
      ]
  return (
    <Carousel>
        <div className="Track">
          {logos.map((logos, index) => (
            <div key={index} className="Logos">
              <img src={logos.imgUrl} alt={logos.name} style={{ height: '70px' }} />
            </div>
          ))}
          {logos.map((logos, index) => (
            <div key={index} className="Logos">
              <img src={logos.imgUrl} alt={logos.name} style={{ height: '70px' }} />
            </div>
          ))}
        </div>
    </Carousel>
  );
}

export default EventCarousel



const Carousel = styled.div`
    display:flex;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;

.Track {
    display: inline-block;
    animation: scroll 30s linear infinite;
    white-space: nowrap;
}

.Logos {
    display: inline-block;
    margin: 0 40px;
    vertical-align: middle;
}

.Logos img {
    height: 50px;
    width: auto;
    max-width: none;
}

@keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
}

`;