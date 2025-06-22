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


  const showsData = [
    {
      id: 1,
      name: 'Fullmetal Alchemist Brotherhood',
      imageBg: 'https://i.postimg.cc/rmfNxD1H/full-metal-alchemistbg.jpg',
      logo: 'https://i.postimg.cc/L4ZVn8qx/fullmetal.png',
      audio: '/assets/Audio/Fmab.mp3',
      link: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood?q=fullmeta&cat=anime',
    },
    {
      id: 2,
      name: 'One Punch Man',
      imageBg: 'https://i.postimg.cc/76ZQF8Xp/onepunchmanbg.jpg',
      logo: 'https://i.postimg.cc/8PpsxyVL/one-punch-man-logo.png',
      audio: '/assets/Audio/One-Punch-Man.mp3',
      link: 'https://myanimelist.net/anime/30276/One_Punch_Man?q=one%20punch&cat=anime',
    },
    {
      id: 3,
      name: 'Attack On Titan',
      imageBg: 'https://i.postimg.cc/ncgg6KcF/attackontitanbg.png',
      logo: 'https://i.postimg.cc/xTztNwnQ/Attack-On-Titan-Logo.png',
      audio: '/assets/Audio/Attack-On-Titan.mp3',
      link: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin?q=attack%20on%20tit&cat=anime',
    },
    {
      id: 4,
      name: 'Steins Gate',
      imageBg: 'https://i.postimg.cc/Pr5Y1fNG/stiensgateclocks.jpg',
      logo: 'https://i.postimg.cc/8zD5LtZ7/Steins-Gate.png',
      audio: '/assets/Audio/Steins-Gate.mp3',
      link: 'https://myanimelist.net/anime/9253/Steins_Gate?q=steins%20gate&cat=anime',
    },
    {
      id: 5,
      name: 'Kekkei Sensen',
      imageBg: 'https://i.postimg.cc/brNgGQ4W/bloodblockadebattlefront.png',
      logo: 'https://i.postimg.cc/MpCwJYLW/kekkeisensen.png',
      audio: '/assets/Audio/Kekkei-Sensen.mp3',
      link: 'https://myanimelist.net/anime/24439/Kekkai_Sensen?q=blood%20blockade&cat=anime',
    },
    {
      id: 6,
      name: 'Dr Stone',
      imageBg: 'https://i.postimg.cc/pT01RWdD/dr-stonebg.jpg',
      logo: 'https://i.postimg.cc/k4tf3xkd/Dr-Stone-Logo.png',
      audio: '/assets/Audio/Dr-Stone.mp3',
      link: 'https://myanimelist.net/anime/38691/Dr_Stone?q=dr%20stone&cat=anime',
    },
    {
      id: 7,
      name: 'Jujutsu Kisen',
      imageBg: 'https://i.postimg.cc/J007zz5m/Jujutsu-Kisenbg.png',
      logo: 'https://i.postimg.cc/jS513JdR/jujutsu-Kisen.png',
      audio: '/assets/Audio/Jujutsu-Kisen.mp3',
      link: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen?q=jujutsu&cat=anime',
    },
    {
      id: 8,
      name: 'Nichijou',
      imageBg: 'https://i.postimg.cc/R00nH4Rs/nichijoubg.png',
      logo: 'https://i.postimg.cc/vBBDchGp/Nichijou-logo.png',
      audio: '/assets/Audio/Nichijou.mp3',
      link: 'https://myanimelist.net/anime/10165/Nichijou?q=nichi&cat=anime',
    },
    {
      id: 9,
      name: "Jojo's Bizzare Adventure",
      imageBg: 'https://i.postimg.cc/FRWpLT3c/Stardust-Crusadersbg.png',
      logo: 'https://i.postimg.cc/Bv8n36N0/bizarre-adventure-jojo-bizarre-adventure-title-removebg-preview.png',
      audio: "/assets/Audio/Jojo's-Bizzare-Adventure.mp3",
      link: 'https://myanimelist.net/anime/14719/JoJo_no_Kimyou_na_Bouken_TV?q=jojo&cat=anime',
    },
    {
      id: 10,
      name: 'One Piece',
      imageBg: 'https://i.postimg.cc/1zTcR8Qc/Onepiecebg.avif',
      logo: 'https://i.postimg.cc/bvbdbrnR/one-piece.png',
      audio: '/assets/Audio/One-Piece.mp3',
      link: 'https://myanimelist.net/anime/21/One_Piece',
    },
    {
      id: 11,
      name: 'Demon Slayer',
      imageBg: 'https://i.postimg.cc/pLkMSHHt/demon-slayer.png',
      logo: 'https://i.postimg.cc/Rh8NKHgX/demon-slayertitle.png',
      audio: '/assets/Audio/Demon-Slayer.mp3',
      link: 'https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba?q=demon&cat=anim',
    },
    {
      id: 12,
      name: 'Tokyo Ghoul',
      imageBg: 'https://i.postimg.cc/QCLMM3Cy/tokyo-ghoulbg.jpg',
      logo: 'https://i.postimg.cc/fRbMDL5b/tokyo-ghoul-logo.png',
      audio: '/assets/Audio/Tokyo-Ghoul.mp3',
      link: 'https://myanimelist.net/anime/1535/Death_Note?q=deathnote&cat=anime"',
    },
    {
      id: 13,
      name: 'Death Note',
      imageBg: 'https://i.postimg.cc/g09t4twP/Death-Notebg.png',
      logo: 'https://i.postimg.cc/Hkt34WCb/death-note-removebg-preview.png',
      audio: '/assets/Audio/Death-Note.mp3',
      link: 'https://myanimelist.net/anime/22319/Tokyo_Ghoul?q=tok&cat=anime',
    }
  ];


  return (
    <ShowSection id="Shows">
      <div className="box">
      <h1 className="title"> Shows </h1>
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
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {showsData.map((show) => (
            <SwiperSlide key={show.id} onClick={() => window.open(show.link, '_blank')}
            onMouseEnter={() => {
              const audio = new Audio(show.audio);
              audio.play();
              show._audio = audio; // store for later use
            }}
            onMouseLeave={() => {
              if (show._audio) {
                show._audio.pause();
                show._audio.currentTime = 0;
              }
            }}
            >
              <SlideContent style={{ backgroundImage: `url(${show.imageBg})` }} id="SlideContent">
                <Logo src={show.logo} alt={`Logo for Show ${show.id}`} />
              </SlideContent>
            </SwiperSlide>
          ))}

          <SliderController id="SliderController">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline" ></ion-icon>
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

  .title{
  padding-bottom: 10px;
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
  width: 100%;
  height:100%;
  border-radius: 10px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
`;

const SliderController = styled.div`
  position: relative;
  bottom: 2rem;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin-top: 2rem;

  .swiper-pagination {
    position: relative;
    width: auto;
    bottom: auto;
    margin: 20px 0 0 0;
    
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
    width: 2rem;
    height: 2rem;
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
      background: rgba(0, 0, 113, 0.4);
    }
    
    ion-icon {
      font-size: 0.5rem;
    }
  }


  .swiper-button-prev::after, .swiper-button-next::after {
  font-size: 20px;
`;



const Logo = styled.img`
  width: 220px;
  height: auto;
  margin-bottom: 10px;
  transition: all 0.3s ease;

`;
