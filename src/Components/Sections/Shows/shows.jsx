import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper modules correctly (for Swiper v8+)
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function Show() {
  return (
    <ShowSection id="Shows">
      <div className="box">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ 
            el: '.swiper-pagination', 
            clickable: true,
            dynamicBullets: true
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <SwiperSlide key={item}>
              <SlideContent>SHOW {item}</SlideContent>
            </SwiperSlide>
          ))}

          <SliderController>
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </SliderController>
        </Swiper>
      </div>
    </ShowSection>
  )
}

export default Show;

const ShowSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
  padding: var(--section-padding);
  margin-bottom: var(--section-gap);
  margin-top: calc(-1 * var(--section-gap));
  background-image: radial-gradient(
    circle at center,
    rgb(0, 0, 2) 0%,
    rgb(0, 0, 0) 40%,
    rgba(0, 0, 0, 0.7) 60%,
    rgba(0, 0, 0, 0.5) 80%,
    rgba(0, 0, 0, 0.74) 95%,
    rgb(0, 0, 0) 100%
  );

  .box {
    width: 100%;
    overflow: hidden;
    min-height: 55vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    transition: 1s;
    padding: 20px;
    margin: 10px;
    z-index: 0;
    
    background-color: rgba(3, 1, 14, 0.2);
    box-shadow: 
      rgba(0, 24, 72, 0.2) 0px 54px 55px,  
      rgba(40, 60, 110, 0.1) 0px -12px 30px,  
      rgba(40, 60, 120, 0.1) 0px 4px 6px,  
      rgba(24, 33, 53, 0.15) 0px 12px 13px,  
      rgba(255, 255, 255, 0.08) 0px -3px 5px;
  }

  .swiper_container {
    width: 100%;
    height: 100%;
    
    .swiper-slide {
      width: 300px;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 10px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
`;

const SlideContent = styled.p`
  color: white;
  font-size: 2rem;
  text-align: center;
`;

const SliderController = styled.div`
  position: relative;
  bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  .swiper-pagination {
    position: relative;
    width: auto;
    bottom: auto;
    
    .swiper-pagination-bullet {
      background: white;
      opacity: 0.5;
      width: 12px;
      height: 12px;
      margin: 0 8px;
      
      &-active {
        opacity: 1;
        background: #007aff;
      }
    }
  }

  .slider-arrow {
    color: white;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 1rem;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }
    
    ion-icon {
      font-size: 1.5rem;
    }
  }
`;