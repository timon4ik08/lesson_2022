import '../App.css';
import Technologies from "./Technologies";
import Header from "./Header";
import HeaderOne from "./HeaderOne";
import BodyOne from "./BodyOne";

const TestFun = () => {
    return (
        <div>
            <div className={"App"}>
                <HeaderOne/>
                <BodyOne/>
            </div>
            <div>
                <Header/>
                <Technologies/>
            </div>
        </div>
    );
}

export default TestFun;
