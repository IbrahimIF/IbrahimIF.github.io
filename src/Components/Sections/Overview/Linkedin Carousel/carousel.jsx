import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';



function central() {
    return (
        <CarouselSection>
            <Carousel infiniteLoop showStatus={false} set showThumbs={false}>
              <div>
              <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7307746793004421121" height="992" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
              </div>

              <div>
              <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7239314455870803970" height="929" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
              </div>

            </Carousel>
        </CarouselSection>
    );
}
export default central


const CarouselSection = styled.div` 
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;

  .carousel-root{
    width: 100%;
    height: 500%;
  }
  .carousel{
    width: 100%;
    height: 100%;
  }

  .carousel .slider-wrapper {
    overflow:hidden;
    height: 100%;
  }

  .buttons {
    cursor: pointer;
    background-color: transparent;
    border: 10px solid transparent;
  }

  .hover {
    background-color: transparent;
    border: 10px solid transparent;
  }

  .carousel .control-next.control-arrow:before {
    position: relative;
    content: '}'; /*changes arrow to a }*/
    font-size: 40px; 
    color:rgb(255, 255, 255); 
    border: none; 
    top: -50px;
  }
.carousel .control-prev.control-arrow:before {
    position: relative;
    content: '{'; /*changes arrow to a }*/
    font-size: 40px; 
    color:rgb(255, 255, 255); 
    border: none; 
    top: -50px;
  }

`;
