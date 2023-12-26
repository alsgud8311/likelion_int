import styled from "styled-components";

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
    background-color: white;
    border-radius: 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
`

export const PartButton = styled.button`
    width: 20%;
    height: 100%;
    border: 5px solid orange;
    background-color: white;
    border-radius: 16px;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
    &:hover{
        background-color: orange;
        transition: 0.5s ease;
    }
`

export const DescriptionWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
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
    box-sizing: border-box;
    color: black;
    justify-content: center;
    font-weight: 700;
`
export const SkillsConatiner = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
`

export const SkillWrapper = styled.div`
    width: 100px;
    height: 30px;
    align-items: center;
    text-align: center;
    margin-right: 10px;
`

export const SkillName = styled.div`
    height: 100%;
    font-size: 14px;
    align-items: center;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    justify-content: center;
    
`



