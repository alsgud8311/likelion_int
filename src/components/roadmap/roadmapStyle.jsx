import styled from "styled-components";

export const RoadmapContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 100%;
`;

export const RoadmapLine = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    background-color: orange;
    height: 5px;
    justify-content: space-around;
    position: relative;
`;

export const RoadmapSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    align-items: center;
    position: relative;
`;

export const RoadmapCircleLeft = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: orange;
    position: absolute;
    left: 0;
    top: -7px;
`;

export const RoadmapCircleRight = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: orange;
    position: absolute;
    top: -7px;
    right: 0;
`;

export const RoadmapCircleCenter = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: orange;
    position: absolute;
    top: -7px;
`;

export const RoadmapText = styled.p`
    margin-top: 30px;
`;