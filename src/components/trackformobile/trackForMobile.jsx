import Lottie from 'lottie-react';
import * as Styles from './trackstyleForMob.jsx';
import frontend from "../../assets/frontend.json"
import backend from "../../assets/backend.json"
import designer from "../../assets/designer.json"
import { ReactComponent as JsIcon } from "../../assets/stack/javascript-color.svg"
import { ReactComponent as CSSIcon } from "../../assets/stack/css3-color.svg"
import { ReactComponent as HtmlIcon } from "../../assets/stack/html5-color.svg"
import { ReactComponent as ReactIcon } from "../../assets/stack/react-color.svg"
import { ReactComponent as ReactRouterIcon } from "../../assets/stack/reactrouter-color.svg"
import { ReactComponent as StyledComponentsIcon } from "../../assets/stack/styledcomponents-color.svg"
import { ReactComponent as GitIcon } from "../../assets/stack/git-color.svg"
import { ReactComponent as GithubIcon } from "../../assets/stack/github-color.svg"
import { ReactComponent as NpmIcon } from "../../assets/stack/npm-color.svg"
import { ReactComponent as PythonIcon } from "../../assets/stack/python-color.svg"
import { ReactComponent as DjangoIcon } from "../../assets/stack/django-color.svg"
import { ReactComponent as MysqlIcon } from "../../assets/stack/mysql-color.svg"
import { ReactComponent as PostmanIcon } from "../../assets/stack/postman-color.svg"
import { ReactComponent as SlackIcon } from "../../assets/stack/slack-color.svg"
import { ReactComponent as NotionIcon } from "../../assets/stack/notion-color.svg"
import { ReactComponent as FigmaIcon } from "../../assets/stack/figma-color.svg"
import Roadmap from '../roadmap/roadmap.jsx';
import goormide from "../../assets/stack/goormide.png"

import { useState } from 'react';
import RoadmapForMob from '../roadmapForMob/roadmapForMob.jsx';

const TrackForMob = () => {
    const [frontButton,setFrontButton] = useState(true);
    const [backButton,setBackButton] = useState(false);
    const [pmButton, setPmButton] = useState(false);

    const onClickFrontButton = () => {
        setFrontButton(true);
        setBackButton(false);
        setPmButton(false);
    }
    
    const onClickBackButton = () => {
        setFrontButton(false);
        setBackButton(true);
        setPmButton(false);
    }
    
    const onClickPmButton = () => {
        setFrontButton(false);
        setBackButton(false);
        setPmButton(true);
    }

    return(
        <Styles.Container>
            <Styles.ButtonWrapper>
                <Styles.PartButton style={{backgroundColor : frontButton? "orange" : ""}} onClick={onClickFrontButton}>Frontend</Styles.PartButton>
                <Styles.PartButton style={{backgroundColor : backButton? "orange" : ""}} onClick={onClickBackButton}>Backend</Styles.PartButton>
                <Styles.PartButton style={{backgroundColor : pmButton? "orange" : ""}} onClick={onClickPmButton}>Product Manager<br/>/ Designer</Styles.PartButton>
            </Styles.ButtonWrapper>
            {frontButton && (
            <Styles.DescriptionWrapper>
                <Styles.ImageWrapper>
                    <Lottie animationData={frontend}></Lottie>
                </Styles.ImageWrapper>
                <Styles.DescriptionTextWrapper>
                    <div style={{fontSize: "30px"}}>Front-End Web Developer</div>
                    <div style={{marginBottom: "5%"}}>프론트엔드 개발자는 사용자가 웹사이트나 어플리케이션에서 서비스를 이용하는 과정에서 만날 수 있는 모든 것들을 눈으로 볼 수 있게 구현하고, 사용자가 빠르고 편리하게 서비스를 이용할 수 있는 환경을 만들어 내는 일을 합니다.</div>
                    <div>
                        <div style={{fontSize: "20px", paddingBottom: '10px'}}>배우는 기술스택</div>
                        <Styles.SkillsConatiner>
                                <CSSIcon style={{height: '50px', marginRight: '15px'}}/>
                                <HtmlIcon style={{height: '50px', marginRight: '15px'}}/>
                                <JsIcon style={{height: '50px', marginRight: '15px'}}/>
                                <ReactIcon style={{height: '50px', marginRight: '15px'}}/>
                                <ReactRouterIcon style={{height: '50px', marginRight: '15px'}}/>
                                <GitIcon style={{height: '50px', marginRight: '15px'}}/>
                                <GithubIcon style={{height: '50px', marginRight: '15px'}}/>
                                <NpmIcon style={{height: '50px', marginRight: '15px'}}/>
                                <StyledComponentsIcon style={{height: '50px', marginRight: '15px'}}/>
                        </Styles.SkillsConatiner>
                    </div>
                    <div>
                        <div style={{fontSize: "20px", paddingBottom: '10px'}}>연간 로드맵</div>
                        <div style={{display:'flex', justifyContent:"flex-start"}}>
                            <Styles.RoadmapWrapper>
                                <RoadmapForMob/>
                            </Styles.RoadmapWrapper>
                            <Styles.MonthlyWrapper>
                                <Styles.Monthdiv>3월</Styles.Monthdiv>
                                <Styles.Monthdiv>6월</Styles.Monthdiv>
                                <Styles.Monthdiv>9월</Styles.Monthdiv>
                                <Styles.Monthdiv>12월</Styles.Monthdiv>
                            </Styles.MonthlyWrapper>
                        </div>
                    </div>
                </Styles.DescriptionTextWrapper>
            </Styles.DescriptionWrapper>
            )}
            {backButton && (
            <Styles.DescriptionWrapper>
                <Styles.ImageWrapper style={{maxWidth: '50%'}}>
                    <Lottie animationData={backend}></Lottie>
                </Styles.ImageWrapper>
                <Styles.DescriptionTextWrapper>
                    <div style={{fontSize: "30px"}}>Back-End Web Developer</div>
                    <div style={{marginBottom: "5%"}}>백엔드 개발자는 주로 데이터베이스 관리, 서버 로직, API(응용 프로그램 프로그래밍 인터페이스) 개발 등을 포함합니다. 백엔드 개발자는 사용자가 직접 보거나 상호작용하지 않는, 웹 어플리케이션의 '뒷면'을 담당합니다.</div>
                    <div>
                        <div style={{fontSize: "20px", paddingBottom: '10px'}}>배우는 기술스택</div>
                        <Styles.SkillsConatiner>
                                <PythonIcon style={{height: '50px', marginRight: '15px'}}/>
                                <DjangoIcon style={{height: '50px', marginRight: '15px'}}/>
                                <PostmanIcon style={{height: '50px', marginRight: '15px'}}/>
                                <MysqlIcon style={{height: '50px', marginRight: '15px'}}/>
                                <GitIcon style={{height: '50px', marginRight: '15px'}}/>
                                <GithubIcon style={{height: '50px', marginRight: '15px'}}/>
                                <img src={goormide} style={{height: '50px', marginRight: '15px'}}/>
                        </Styles.SkillsConatiner>
                    </div>
                    <div>
                        <div style={{fontSize: "20px", paddingBottom: '10px'}}>연간 로드맵</div>
                        <div style={{display:'flex', justifyContent:"center"}}>
                            <Styles.RoadmapWrapper>
                                <Roadmap/>
                            </Styles.RoadmapWrapper>
                        </div>
                        <Styles.MonthlyWrapper>
                            <Styles.Monthdiv>3월</Styles.Monthdiv>
                            <Styles.Monthdiv>6월</Styles.Monthdiv>
                            <Styles.Monthdiv>9월</Styles.Monthdiv>
                            <Styles.Monthdiv>12월</Styles.Monthdiv>
                        </Styles.MonthlyWrapper>
                        <div style={{display:'flex', justifyContent:"center"}}>
                        <Styles.MonthlyWrapper style={{width: '80%'}}>
                            <Styles.Plan>공통 세션<br/>HTML + CSS<br/><br/>백엔드 세션<br/>Python<br/>Django</Styles.Plan>
                            <Styles.Plan>미니해커톤<br/><br/>중앙해커톤<br/><br/>스터디</Styles.Plan>
                            <Styles.Plan>학기 프로젝트<br/><br/>연합해커톤</Styles.Plan>
                        </Styles.MonthlyWrapper>
                        </div>
                    </div>
                </Styles.DescriptionTextWrapper>
            </Styles.DescriptionWrapper>
            )}
            {pmButton && (
            <Styles.DescriptionWrapper>
                <Styles.ImageWrapper>
                    <Lottie animationData={designer}></Lottie>
                </Styles.ImageWrapper>
                <Styles.DescriptionTextWrapper>
                    <div style={{fontSize: "30px"}}>Product Manager/ designer</div>
                    <div style={{marginBottom: "5%"}}>프로덕트 매니저(PM)/디자이너는 전체 프로젝트의 계획, 일정, 팀 조율, 커뮤니케이션 및 품질 관리를 담당하며, 웹사이트나 애플리케이션의 시각적 디자인, 사용자 경험(UX), 사용자 인터페이스(UI)를 설계합니다. 프로젝트의 전략적 방향 설정과 실행을 총괄하며 문제 해결과 리스크 관리를 맡는 동시에 이러한 전략을 시각적으로 표현하고 사용자 친화적인 디자인으로 전환하여 프로젝트의 목표를 시각적, 기능적 측면에서 실현하는 역할을 수행합니다.</div>
                    <div>
                        <div style={{fontSize: "20px", paddingBottom: '10px'}}>배우는 기술스택</div>
                        <Styles.SkillsContainerNoMarquee>
                                <SlackIcon style={{height: '50px', marginRight: '15px'}}/>
                                <FigmaIcon style={{height: '50px', marginRight: '15px'}}/>
                                <NotionIcon style={{height: '50px', marginRight: '15px'}}/>
                                <GitIcon style={{height: '50px', marginRight: '15px'}}/>
                                <GithubIcon style={{height: '50px', marginRight: '15px'}}/>
                        </Styles.SkillsContainerNoMarquee>
                    </div>
                    <div>
                    <div style={{fontSize: "20px", paddingBottom: '10px'}}>연간 로드맵</div>
                    <div style={{display:'flex', justifyContent:"center"}}>
                        <Styles.RoadmapWrapper>
                            <Roadmap/>
                        </Styles.RoadmapWrapper>
                    </div>
                    <Styles.MonthlyWrapper>
                        <Styles.Monthdiv>3월</Styles.Monthdiv>
                         <Styles.Monthdiv>6월</Styles.Monthdiv>
                        <Styles.Monthdiv>9월</Styles.Monthdiv>
                        <Styles.Monthdiv>12월</Styles.Monthdiv>
                    </Styles.MonthlyWrapper>
                    <div style={{display:'flex', justifyContent:"center"}}>
                    <Styles.MonthlyWrapper style={{width: '80%'}}>
                        <Styles.Plan>PM/Design 세션<br/>Figma<br/>Notion<br/>Slack</Styles.Plan>
                        <Styles.Plan>미니해커톤<br/><br/>중앙해커톤<br/><br/>스터디</Styles.Plan>
                        <Styles.Plan>학기 프로젝트<br/><br/>연합해커톤</Styles.Plan>
                    </Styles.MonthlyWrapper>
                    </div>
                    </div>
                </Styles.DescriptionTextWrapper>
            </Styles.DescriptionWrapper>
            )}
        </Styles.Container>
    )
}

export default TrackForMob;