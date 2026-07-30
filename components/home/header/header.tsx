import HomeAcc from "./homecomp/homeacc";
import HomeContainer from "./homecomp/homecontent/homecontainer";
import HomeHeaderVid from "./homecomp/homevid";

export default function HomeHeader(){
    return(
        <>
        <header className="m-0 p-0 w-full h-screen flex flex-col justify-between items-center overflow-hidden scroll-smooth relative">
            <HomeHeaderVid/>
            <HomeAcc/>
            <HomeContainer/>
        </header>
        </>
    )
}