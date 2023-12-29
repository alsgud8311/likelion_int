import styled from "styled-components";

export const RoadmapContainer = styled.div`
    display: flex;
    height: 200px;
    width: 15px;
`;

export const RoadmapLine = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    background-color: orange;
    border: 2px solid orange;
    position: relative;
`;

export const RoadmapSection = styled.div`
    display: flex;
    height: 25%;
    align-items: center;
    position: relative;
`;

export const RoadmapCircle = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: orange;
    position: absolute;
    left: -8px;
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