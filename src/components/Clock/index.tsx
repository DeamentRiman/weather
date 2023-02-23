import React, { useState, useEffect } from "react";
import { getTime } from "../../utils/getData";
import '../Clock/index.scss';

const Clock:React.FC = () => {
    const [time, setTime] = useState(getTime());
    useEffect(() => {
        const updateTime = setInterval(() => {
            setTime(getTime());
        }, 1000);
        return () => {
            clearInterval(updateTime);
        }}, []);

    return (        
        <p className="appMainTime">{time}</p>
    )
}

export default Clock;