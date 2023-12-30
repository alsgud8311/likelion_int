import * as Styles from './mainStyleForMobile.jsx';
import TypeIt from 'typeit-react';
import Lottie from 'lottie-react';
import computerLottie from '../../assets/computer.json';
import Header from '../../components/Header/header.jsx';
import { useEffect, useRef, useState } from 'react';
import hackerthon from '../../assets/hackerthon.jpg';
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/project5.png';
import viewBackground from "../../assets/viewBackground.jpg";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useInViewport from '../../hooks/useInViewport.jsx';
import usePrallaxScroll from '../../hooks/useParallaxScroll.jsx';
import Track from '../../components/track/track.jsx';
import Footer from '../../components/footer/footer.jsx';
import TrackForMob from '../../components/trackformobile/trackForMobile.jsx';
import HeaderForMob from '../../components/HeaderForMob/headerForMob.jsx';

export default function MainForMobile() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInViewport = useInViewport(ref1);
  const isInViewportSec = useInViewport(ref2);
  const scroll = usePrallaxScroll();

  const backgroundStyle = {
    backgroundPositionY: `${200 + scroll / -13}px`,
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Styles.Container>
      <HeaderForMob/>
      <Styles.ViewWrapper style={{height: '100vh'}}>
        <Styles.FirstViewImage>
            <Lottie animationData={computerLottie} style={{maxWidth: '100%'}}/>
          </Styles.FirstViewImage>
        <Styles.FirstViewText>
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                    .type("POSSIBILIYT")
                    .pause(750)
                    .delete(2)
                    .type("TY")
                    .pause(500)
                    .type(" TO REALITY</br>")
                    .pause(400)
                    .type("내 아이디어를</br>내 손으로 실현하다")
                return instance;
            }}/>
          </Styles.FirstViewText>
      </Styles.ViewWrapper>
      <Styles.ViewWrapper style={{height: '80vh', backgroundColor: 'white', color: 'black'}}>
        <Styles.TextWrapper className={isInViewport ? "frame-in-slide" : ""} ref={ref1}>
          <Styles.MainText style={{color: 'black', fontSize: '35px', paddingBottom: '10px'}}>우리는 도전합니다</Styles.MainText>
          <Styles.SubText style={{fontSize: '1.3rem'}}>문과라서 개발자로서의 길이 힘들다는 생각에서 벗어나, 처음의 마음가짐으로 웹 개발의 처음부터 공부하고, 도전하며 성장합니다.</Styles.SubText>
        </Styles.TextWrapper>
        <Styles.ImageWrapper className={isInViewport ? "frame-in-fadeout":""}>
          <img src={hackerthon} style={{width: '100%',height: '100%'}}/>
        </Styles.ImageWrapper>
      </Styles.ViewWrapper>
      <Styles.ViewWrapper style={{height: '70vh',marginBottom:"40px"}}>
            <Styles.TextWrapper className={isInViewportSec ? "frame-in-fadeout" : ""} style={{width: '100%', padding: "0px 15% 0px 20%"}} ref={ref2}>
              <Styles.MainText style={{fontSize: "35px", paddingBottom: '10px'}}>우리는 실현합니다</Styles.MainText>
              <Styles.SubText style={{fontSize: '1.2rem'}}>'POSSIBILITY TO REALITY'라는 멋사의 슬로건처럼, 우리는 만들고 싶었던 창의적인 서비스들을 직접 계획하고, 이를 실현시키는데에 목표를 두고 있습니다.</Styles.SubText>
            </Styles.TextWrapper>
            <Styles.CarouselWrapper>
            <div style={{fontSize: '20px', paddingBottom: '20px'}}>멋쟁이사자처럼 11기가 진행한 프로젝트</div>
              <Styles.StyledSlider {...sliderSettings}>
                <Styles.CarouselImgWrapper>
                  <img src={project4} style={{maxWidth: '100%'}}/>
                  <Styles.Description className='description'>
                    <div style={{fontSize: '30px', marginBottom: '20px'}}>오아시스</div>
                    <div>맞춤형 일기장 및 고민상담 ai 서비스</div>
                  </Styles.Description>
                </Styles.CarouselImgWrapper>
              <Styles.CarouselImgWrapper>
                  <img src={project3} style={{maxWidth: '100%'}}/>
                  <Styles.Description className='description'>
                    <div style={{fontSize: '30px', marginBottom: '20px'}}>플로키</div>
                    <div>캐릭터 육성 플로깅 기록 서비스</div>
                  </Styles.Description>
                </Styles.CarouselImgWrapper>
                <Styles.CarouselImgWrapper>
                  <img src={project1} style={{maxWidth: '100%'}}/>
                  <Styles.Description className='description'>
                    <div style={{fontSize: '30px', marginBottom: '20px'}}>세피로트</div>
                    <div>앱테크에 친환경을 접목한 식목 서비스</div>
                  </Styles.Description>
                </Styles.CarouselImgWrapper>
                <Styles.CarouselImgWrapper>
                  <img src={project2} style={{maxWidth: '100%'}}/>
                  <Styles.Description className='description'>
                    <div style={{fontSize: '30px', marginBottom: '20px'}}>오아시스</div>
                    <div>일회용품 소비를 줄이기 위한 음수대 위치 제공 서비스</div>
                  </Styles.Description>
                </Styles.CarouselImgWrapper>
                <Styles.CarouselImgWrapper>
                  <img src={project5} style={{maxWidth: '100%'}}/>
                  <Styles.Description className='description'>
                    <div style={{fontSize: '30px', marginBottom: '20px'}}>분리할래</div>
                    <div>분리수거 활성화를 위한 교육용 게임</div>
                  </Styles.Description>
                </Styles.CarouselImgWrapper>
              </Styles.StyledSlider>
            </Styles.CarouselWrapper>
      </Styles.ViewWrapper>
      <Styles.ViewWrapper style={{height: '90vh', overflow: 'hidden', padding: '0px'}}>
        <Styles.ViewWrapperForImg style={backgroundStyle}>
          <Styles.TextWrapper style={{alignItems: 'center'}}>
            <Styles.MainText style={{position: "relative", zIndex: "2", fontSize: '35px', paddingBottom: '10px'}}>우리는 함께합니다</Styles.MainText>
            <Styles.SubText style={{position: "relative", zIndex: "2", fontSize: '1.2rem'}}>동아리 부원, 나아가 타 대학들과 연합하여 진행하는 다양한 프로젝트들을 통해 경험을 쌓아갈 수 있고, 직접 부딪히며 배우는 프로젝트로 개발자로서의 빠른 성장을 지원합니다.</Styles.SubText>
          </Styles.TextWrapper>
        </Styles.ViewWrapperForImg>
      </Styles.ViewWrapper>
            <Styles.MainText style={{fontSize: '30px', paddingLeft: '20px'}}>트랙별 정보 및 로드맵</Styles.MainText>
      <Styles.ViewWrapper style={{height: '180vh', padding: '20px'}}>
            <Styles.TrackWrapper>
              <TrackForMob/>
            </Styles.TrackWrapper>
      </Styles.ViewWrapper>
      <Styles.ViewWrapper style={{height: '70vh', padding: '0px'}}>
        <Styles.ApplyWrapper>
          <Styles.ApplyWrapperImage>
            <Styles.ApplyText style={{position: "relative", zIndex: "2"}}>12기 멋쟁이사자처럼 지원하기</Styles.ApplyText>
            <Styles.ApplyButtonWrapper>
              <Styles.ApplyButton style={{position: "relative", zIndex: "2", color: 'black'}} onClick={() => {alert(`지원기간이 아닙니다. 운영진 모집은 구글폼을 이용해 주세요 :)`)}}>지원 페이지로 이동</Styles.ApplyButton>
            </Styles.ApplyButtonWrapper>
          </Styles.ApplyWrapperImage>
        </Styles.ApplyWrapper>
      </Styles.ViewWrapper>
      <Footer/>
    </Styles.Container>

  );
};
