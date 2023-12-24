import * as Styles from './headerStyle';
import logo from "../../assets/likelionXhufs.png"

const Header = () => {
    return(
        <Styles.Container>
            <Styles.ImageWrapper>
                <img style={{width: '100%', height:'30px'}}src={logo}/>
            </Styles.ImageWrapper>
        </Styles.Container>
    )
}

export default Header;