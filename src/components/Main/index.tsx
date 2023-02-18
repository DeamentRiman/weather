import React from "react";
import '../Main/index.scss';
// import { Clock } from "../Date";
import { Weather } from "../Weather";

export const Main = () => {
    // const [todaysDate, nowTime] = Clock();
    return (
        <article>
            {/* <section>
                <p>{todaysDate}</p>
                <p>{nowTime}</p>
            </section> */}
            <Weather />
        </article>
    )
}