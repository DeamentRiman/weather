import React from "react";
import '../Header/index.scss';

export const Header = () => {
    return (
        <header className="appHeader">
            <div className="appHeader_text">
                Weather App
            </div>
            <div className="appHeader_text">
                <a href="#">Picture App</a>
            </div>
        </header>
    )
}