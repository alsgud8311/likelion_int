import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import viewBackground from "../../assets/viewBackground.jpg"
import lion from "../../assets/lion.jpg"

export const Container = styled.div`
width: 100vw;
background-color: black;
color: white;
display: flex;
flex-direction: column;
`

export const ViewWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    padding: 30px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
`


export const ViewWrapperForImg = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  background-image: url(${viewBackground});
  background-size: cover; // 배경 이미지 크기를 조절
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

export const TransparentBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); // 검은색 배경에 50% 투명도
`;


export const FirstViewText = styled.div`
color: orange;
font-size: 3rem;
font-weight: 700;
width: 60%;
`

export const FirstViewImage = styled.div`
width: 30%;
align-items: center;
display: flex;
justify-content: center;
`
export const FrameInAnimationFadeout = keyframes`
    0% {
        opacity: 0;
    }

    100%{
        opacity: 1;
    }
`;

export const FrameInAnimationSlide = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }

    100%{
        opacity: 1;
        transform: translateX(0%);
    }
`;

export const TextWrapper = styled.div`
    width: 40%;
    font-weight: 700;
    flex-direction: column;
    margin-right: 5%;
    margin-left: 5%;
    &.frame-in-slide{
        animation: ${FrameInAnimationSlide} 2s forwards;
    }
    &.frame-in-fadeout{
        animation: ${FrameInAnimationFadeout} 3s
    }
`

export const MainText = styled.div`
    width: 100%;
    height: 30%;
    font-size: 3rem;
    color: white;
    font-weight: 700;
`

export const SubText = styled.div`
width: 100%;
font-size: 1rem;
`


export const ImageWrapper = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    &.frame-in-fadeout{
        animation: ${FrameInAnimationFadeout} 3s
    }
`

export const CarouselWrapper = styled.div`
    padding-top: 50px;
    width: 70%;
    height: 90%;
    align-items: center;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
`

export const StyledSlider = styled(Slider)`
  .slick-dots li button:before {
    font-family: 'slick';
    font-size: 15px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: '•';
    text-align: center;
    opacity: .25;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-dots li.slick-active button:before {
    opacity: .75;
    color: white;
  }
`;

export const CarouselImgWrapper = styled.div`
  position: relative;
  max-width: 100%;
  &:hover .description {
    opacity: 1;
    visibility: visible;
  }
`;

export const Description = styled.div`
    padding: 30px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // 반투명 배경
  color: white;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
  padding: 10px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
`;

export const TrackWrapper = styled.div`
  width: 100%;
  height: 50%;
  margin-bottom: 30px;
`
export const ApplyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative; // 상대 위치 지정
`

export const ApplyWrapperImage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${lion});
  background-size: cover; // 배경 이미지 크기를 조절
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`

export const ApplyText = styled.div`
  width: 100%;
  font-size: 4rem;
  color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  font-weight: 700;
`

export const ApplyButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ApplyButton = styled.button`
  padding: 10px;
  border-radius: 30px;
  font-weight: 700;
  width: 45%;
  font-size: 1.5rem;
  background-color: white;
  border: 0px;
  cursor: pointer;
  &:hover{
    background-color: orange;
    transition: 0.3s ease
  }
`