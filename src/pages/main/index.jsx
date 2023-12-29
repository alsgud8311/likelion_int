import { BrowserView, MobileView } from "react-device-detect"
import MainForPc from "./indexForPC"
import MainForMobile from "./indexForMobile"

export default function Main() {
    return(
        <>
        <BrowserView>
            <MainForPc/>
        </BrowserView>
        <MobileView>
            <MainForMobile/>
        </MobileView>
        </>
    )
}
