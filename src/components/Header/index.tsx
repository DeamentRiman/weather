import React from "react";
import '../Header/index.scss';
import Clock from "../Date";

export const Header = () => {
    const [todaysDate, nowTime] = Clock();

    return (
        <header className="appHeader">
            <div className="appHeader_text">
                Weather in
            </div>
            <div className="appHeader_input">
                <input type="text" onChange={() => { console.log(1) }} value="Tomsk" />
            </div>
            <div className="appHeader_date">
                {todaysDate} {nowTime}
            </div>
        </header>
    )
}