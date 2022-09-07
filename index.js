import React from "react"
import ReactDOM from "react-dom"
import Info from "./Components/Info.js"
import About from "./Components/About.js"
import Interests from "./Components/Interests.js"
import Footer from "./Components/Footer.js"

function App()
{
    return (
        <div className="Background">
            <Info></Info>
            <div className="ProfileText">
                <About></About>
                <Interests></Interests>
            </div>
            <Footer></Footer>
        </div>
    )   
}

ReactDOM.render(App(), document.getElementById("root"))