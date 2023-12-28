import React from 'react';
import * as Styles from "./roadmapStyle";

const Roadmap = () => {
    return (
        <Styles.RoadmapContainer>
            <Styles.RoadmapLine>
                <Styles.RoadmapSection>
                    <Styles.RoadmapCircle />
                    <Styles.RoadmapText>3월 - 6월</Styles.RoadmapText>
                </Styles.RoadmapSection>
                <Styles.RoadmapSection>
                    <Styles.RoadmapCircle />
                    <Styles.RoadmapText>6월 - 8월</Styles.RoadmapText>
                </Styles.RoadmapSection>
                <Styles.RoadmapSection>
                    <Styles.RoadmapCircle />
                    <Styles.RoadmapText>8월 - 12월</Styles.RoadmapText>
                </Styles.RoadmapSection>
            </Styles.RoadmapLine>
        </Styles.RoadmapContainer>
    );
}

export default Roadmap;
