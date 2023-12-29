import * as Styles from './headerStyleForMob';
import logo from "../../assets/likelionXhufs.png"

const HeaderForMob = () => {
    return(
        <Styles.Container>
            <Styles.ImageWrapper>
                <img style={{width: '250px', height:'30px'}}src={logo}/>
            </Styles.ImageWrapper>
        </Styles.Container>
    )
}

export default HeaderForMob;