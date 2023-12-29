import React from 'react';
import * as Styles from "./roadmapStyleForMob";

const RoadmapForMob = () => {
    return (
        <Styles.RoadmapContainer>
            <Styles.RoadmapLine>
                <Styles.RoadmapSection>
                    <Styles.RoadmapCircle />
                    {/* <Styles.RoadmapText>3월</Styles.RoadmapText> */}
                </Styles.RoadmapSection>
                <Styles.RoadmapSection>
                    <Styles.RoadmapCircle style={{top: '10px'}}/>
                    {/* <Styles.RoadmapText>3월 - 6월</Styles.RoadmapText> */}
                </Styles.RoadmapSection>
                <Styles.RoadmapSection>
                    <Styles.RoadmapCircle style={{top: '25px'}}/>
                    {/* <Styles.RoadmapText>6월 - 8월</Styles.RoadmapText> */}
                </Styles.RoadmapSection>
                <Styles.RoadmapSection>
                    <Styles.RoadmapCircle style={{top: '40px'}}/>
                    {/* <Styles.RoadmapText>8월 - 12월</Styles.RoadmapText> */}
                </Styles.RoadmapSection>
            </Styles.RoadmapLine>
        </Styles.RoadmapContainer>
    );
}

export default RoadmapForMob;
