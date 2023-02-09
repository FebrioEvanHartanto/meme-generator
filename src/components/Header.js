import React from "react"
import Logo from "../images/troll-face.png"


function Header () {
    return (
        <header className="header">
            <img src = {Logo} alt="troll-logo"></img>
            <h2 className="title">Meme Generator</h2>
            <h4>React Project</h4>
        </header>
    )   
}

export default Header