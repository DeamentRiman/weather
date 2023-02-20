import React from "react";
import '../Header/index.scss';

const Header: React.FC = () => {
    return (
        <header className="appHeader">
            <div className="appHeader_text">
                Weather
            </div>
            <div className="appHeader_text">
                <a href="#">Gallery</a>
            </div>
        </header>
    )
}

export default Header;