import * as Styles from './mainStyle.jsx';
import TypeIt from 'typeit-react';
import Lottie from 'lottie-react';
import computerLottie from '../../assets/computer.json';

export default function Main() {
  return (
    <Styles.Container>
      <Styles.FirstViewWrapper>
        <Styles.FirstViewText>
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                    .type("POSSIBILIYT")
                    .pause(750)
                    .delete(2)
                    .type("TY")
                    .pause(500)
                    .type(" TO REALITY</br>")
                    .type("내 아이디어를 내 손으로 현실")
                    .pause(600)
                    .delete(2)
                    .type("실현하다")
                return instance;
            }}/>
          </Styles.FirstViewText>
          <Styles.FirstViewImage>
            <Lottie animationData={computerLottie}/>
          </Styles.FirstViewImage>
      </Styles.FirstViewWrapper>
    </Styles.Container>
    
  );
};
