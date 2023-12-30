import { BrowserView, MobileView } from "react-device-detect"
import MainForPc from "./indexForPC"
import MainForMobile from "./indexForMobile"
import GlobalStyle from "../../GlobalStyle"

export default function Main() {
    return(
        <>
        <GlobalStyle/>
        <BrowserView>
            <MainForPc/>
        </BrowserView>
        <MobileView>
            <MainForMobile/>
        </MobileView>
        </>
    )
}
