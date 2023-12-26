import Lottie from 'lottie-react';
import * as Styles from './trackstyle.jsx';
import frontend from "../../assets/frontend.json"
import backend from "../../assets/backend.json"


const Track = () => {
    return(
        <Styles.Container>
            <Styles.ButtonWrapper>
                <Styles.PartButton>Frontend</Styles.PartButton>
                <Styles.PartButton>Backend</Styles.PartButton>
                <Styles.PartButton>Product Manager<br/>/ Designer</Styles.PartButton>
            </Styles.ButtonWrapper>
            <Styles.DescriptionWrapper>
                <Styles.ImageWrapper>
                    <Lottie animationData={frontend}></Lottie>
                </Styles.ImageWrapper>
                <Styles.DescriptionTextWrapper>
                    <div style={{fontSize: "30px"}}>Front-End Web Developer</div>
                    <div style={{marginBottom: "10%"}}>프론트엔드 개발자는 사용자가 웹사이트나 어플리케이션에서 서비스를 이용하는 과정에서 만날 수 있는 모든 것들을 눈으로 볼 수 있게 구현하고, 사용자가 빠르고 편리하게 서비스를 이용할 수 있는 환경을 만들어 내는 일을 합니다.</div>
                    <div style={{fontSize: "25px", paddingBottom: '10px'}}>사용 기술스택</div>
                </Styles.DescriptionTextWrapper>
            </Styles.DescriptionWrapper>
        </Styles.Container>
    )
}

export default Track;