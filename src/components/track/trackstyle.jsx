import styled from "styled-components";
import Marquee from "react-fast-marquee";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
`

export const ButtonWrapper = styled.div`
    width: 100%;
    height: 70px;
    padding: 10px;
    border-radius: 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
`

export const PartButton = styled.button`
    width: 20%;
    height: 100%;
    padding: 5px;
    border: 3px solid orange;
    background-color: transparent;
    color: white;
    border-radius: 16px;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    justify-content: center;    
    &:hover{
        background-color: orange;
        transition: 0.5s ease;
    }
`

export const DescriptionWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 16px;
    display: flex;
    box-sizing: border-box;
`

export const ImageWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`

export const DescriptionTextWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 16px;
    background-color: white;
    box-sizing: border-box;
    color: black;
    justify-content: center;
    font-weight: 700;
`
export const SkillsConatiner = styled(Marquee)`
    width: 100%;
    height: 60px;
    display: flex;
    gap: none;
    margin-bottom: 20px;
`

export const SkillsContainerNoMarquee = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
`




