import React from 'react';
import * as Styles from "./roadmapStyle";

const Roadmap = () => {
    return (
        <Styles.RoadmapContainer>
            <Styles.RoadmapLine>
                <Styles.RoadmapSection>
                    <Styles.RoadmapCircleLeft />
                    {/* <Styles.RoadmapText>3월</Styles.RoadmapText> */}
                </Styles.RoadmapSection>
                <Styles.RoadmapSection>
                    <Styles.RoadmapCircleCenter style={{left:'30%'}} />
                    {/* <Styles.RoadmapText>3월 - 6월</Styles.RoadmapText> */}
                </Styles.RoadmapSection>
                <Styles.RoadmapSection>
                    <Styles.RoadmapCircleCenter style={{right: '30%'}}/>
                    {/* <Styles.RoadmapText>6월 - 8월</Styles.RoadmapText> */}
                </Styles.RoadmapSection>
                <Styles.RoadmapSection>
                    <Styles.RoadmapCircleRight />
                    {/* <Styles.RoadmapText>8월 - 12월</Styles.RoadmapText> */}
                </Styles.RoadmapSection>
            </Styles.RoadmapLine>
        </Styles.RoadmapContainer>
    );
}

export default Roadmap;
