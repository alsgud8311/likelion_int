import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
width: 100vw;
background-color: black;
color: white;
display: flex;
flex-direction: column;
`

export const ViewWrapper = styled.div`
height: 80vh;
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
width: 40%;
align-items: center;
display: flex;
justify-content: center;
`

export const FrameInAnimation = keyframes`
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
    &.frame-in{
        animation: ${FrameInAnimation} 2s forwards;
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
