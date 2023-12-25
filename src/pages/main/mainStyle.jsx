import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
width: 100vw;
background-color: black;
color: white;
display: flex;
flex-direction: column;
`

export const ViewWrapper = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    padding: 30px;
    align-items: center;
`

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
`

export const MainText = styled.div`
width: 100%;
font-size: 3rem; 
`

export const SubText = styled.div`
width: 100%;
font-size: 1rem;
`

export const FrameInAnimationFadeout = keyframes`
    0% {
        opacity: 0;
    }

    100%{
        opacity: 1;
    }
`;

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
    width: 50%;
    height: 80%;
    align-items: center;
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
