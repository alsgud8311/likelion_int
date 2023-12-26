import * as Styles from './mainStyle.jsx';
import TypeIt from 'typeit-react';
import Lottie from 'lottie-react';
import computerLottie from '../../assets/computer.json';
import Header from '../../components/Header/header.jsx';
import { useEffect, useRef, useState } from 'react';
import hackerthon from '../../assets/hackerthon.jpg';
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.png';
import viewBackground from "../../assets/viewBackground.png";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useInViewport from '../../hooks/useInViewport.jsx';
import usePrallaxScroll from '../../hooks/useParallaxScroll.jsx';
import Track from '../../components/track/track.jsx';

export default function Main() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInViewport = useInViewport(ref1);
  const isInViewportSec = useInViewport(ref2);
  const scroll = usePrallaxScroll();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Styles.Container>
      <Header/>
      <Styles.ViewWrapper>
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
                    .type("내 아이디어를 내 손으로 현실")
                    .pause(600)
                    .delete(2)
                    .type("실현하다")
                return instance;
            }}/>
          </Styles.FirstViewText>
          <Styles.FirstViewImage>
            <Lottie animationData={computerLottie} style={{maxWidth: '100%'}}/>
          </Styles.FirstViewImage>
      </Styles.ViewWrapper>
      <Styles.ViewWrapper>
        <Styles.TextWrapper className={isInViewport ? "frame-in-slide" : ""} ref={ref1}>
          <Styles.MainText>우리는 도전합니다</Styles.MainText>
          <Styles.SubText>문과라서 개발자로서의 길이 힘들다는 생각에서 벗어나, 처음의 마음가짐으로 웹 개발의 처음부터 공부하고, 도전하며 성장합니다.</Styles.SubText>
        </Styles.TextWrapper>
        <Styles.ImageWrapper className={isInViewport ? "frame-in-fadeout":""}>
          <img src={hackerthon} style={{maxWidth: '100%'}}/>
        </Styles.ImageWrapper>
      </Styles.ViewWrapper>
      <Styles.ViewWrapper style={{flexDirection: 'column', marginBottom:"40px"}}>
            <Styles.TextWrapper className={isInViewportSec ? "frame-in-fadeout" : ""} style={{width: '100%', padding: "0px 15% 0px 20%"}} ref={ref2}>
              <Styles.MainText>우리는 실현합니다</Styles.MainText>
              <Styles.SubText>POSSIBILITY TO REALITY라는 멋사의 슬로건처럼, 우리는 만들고 싶었던 창의적인 서비스들을 직접 계획하고, 이를 실현시키는데에 목표를 두고 있습니다.</Styles.SubText>
            </Styles.TextWrapper>
            <Styles.CarouselWrapper>
            <div style={{paddingBottom: '20px'}}>멋쟁이사자처럼 11기가 진행한 프로젝트</div>
              <Styles.StyledSlider {...sliderSettings}>
                <Styles.CarouselImgWrapper>
                  <img src={project1} style={{maxWidth: '100%'}}/>
                  <Styles.Description className='description'>
                    <div style={{fontSize: '30px', marginBottom: '20px'}}>세피로트</div>
                    <div>세피로트는 친환경 사용 독려를 위해 앱테크를 접목하여 광고를 보아 포인트를 쌓고, 쌓은 포인트로 실제 나무를 심을 수 있는 서비스입니다.</div>
                  </Styles.Description>
                </Styles.CarouselImgWrapper>
                <Styles.CarouselImgWrapper>
                  <img src={project2} style={{maxWidth: '100%'}}/>
                  <Styles.Description className='description'>
                    <div style={{fontSize: '30px', marginBottom: '20px'}}>오아시스</div>
                    <div>오아시스는 일회용품 소비를 줄이기 위한 음수대 위치 제공 서비스입니다.</div>
                  </Styles.Description>
                </Styles.CarouselImgWrapper>
              </Styles.StyledSlider>
            </Styles.CarouselWrapper>
      </Styles.ViewWrapper>
      <Styles.ViewWrapperForImg style={{backgroundPositionY: scroll/3}}>
        <Styles.TextWrapper>
          <Styles.MainText style={{position: "relative", zIndex: "2"}}>우리는 함께합니다</Styles.MainText>
          <Styles.SubText style={{position: "relative", zIndex: "2"}}>동아리 부원, 나아가 타 대학들과 연합하여 진행하는 다양한 프로젝트들을 통해 경험을 쌓아갈 수 있고, 직접 부딪히며 배우는 프로젝트로 개발자로서의 빠른 성장을 지원합니다.</Styles.SubText>
        </Styles.TextWrapper>
      </Styles.ViewWrapperForImg>
      <Styles.ViewWrapper style={{flexDirection:"column"}}>
            <Styles.MainText>트랙별 안내</Styles.MainText>
            <Track/>
      </Styles.ViewWrapper>
    </Styles.Container>
    
  );
};
