import * as Styles from './mainStyle.jsx';
import TypeIt from 'typeit-react';
import Lottie from 'lottie-react';
import computerLottie from '../../assets/computer.json';
import Header from '../../components/Header/header.jsx';
import { useEffect, useRef, useState } from 'react';
import hackerthon from '../../assets/hackerthon.jpg';

export default function Main() {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if(!ref.current) return ;

    const callback = (entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
        setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      });
    }

    const options = {root: null, rootMargin: "0px", threshold: 0};

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    }
  },[]);

  return (
    <Styles.Container>
      <Header/>
      <Styles.ViewWrapper>
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
      </Styles.ViewWrapper>
      <Styles.ViewWrapper>
        <Styles.TextWrapper className={isInViewport ? "frame-in-slide" : ""} ref={ref}>
          <Styles.MainText>우리는 도전합니다</Styles.MainText>
          <Styles.SubText>문과라서 개발자로서의 길이 힘들다는 생각에서 벗어나, 처음의 마음가짐으로 웹 개발의 처음부터 공부하고, 도전하며 성장합니다.</Styles.SubText>
        </Styles.TextWrapper>
        <Styles.ImageWrapper className={isInViewport ? "frame-in-fadeout":""}>
          <img src={hackerthon} style={{maxWidth: '100%'}}/>
        </Styles.ImageWrapper>
      </Styles.ViewWrapper>

    </Styles.Container>
    
  );
};
