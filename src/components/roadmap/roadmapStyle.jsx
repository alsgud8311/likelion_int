import styled from "styled-components";

const RoadmapContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const RoadmapLine = styled.div`
    display: flex;
    align-items: center;
    background-color: #ddd;
    height: 5px;
    position: relative;
`;

const RoadmapSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const RoadmapCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #333;
    position: absolute;
    top: -8px;
`;

const RoadmapText = styled.p`
    margin-top: 30px;
`;