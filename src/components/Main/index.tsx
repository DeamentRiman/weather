import React, { useState, useEffect } from "react";
import { getDate, getTime, getDayPeriod } from "../../utils/getData";
import '../Main/index.scss';
import NasaAPOD from "../NasaAPOD";
import Weather from "../Weather";

const Main: React.FC = () => {
    const [time, setTime] = useState('');
    const todaysDate = getDate();
    // console.log(time, 111);
    useEffect(() => {
        setTime(getTime());
        const updateTime = setInterval(() => {
            setTime(getTime());
        }, 1000);
        return () => {
            clearInterval(updateTime);
        }

    }, []);
    // console.log(getDayPeriod());

    return (
        <article className="appMain">
            <section className={getDayPeriod() ? "appMainDataDay" : "appMainDataNight"}>
                <div className="appMainDataWrapper">
                    <p className="appMainDate">{todaysDate}</p>
                    <p className="appMainTime">{time}</p>
                </div>
                <Weather/>
            </section>
            <NasaAPOD/>
        </article>
    )
}
export default Main;