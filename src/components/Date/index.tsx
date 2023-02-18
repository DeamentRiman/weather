import React, { useState , useEffect} from "react";
import '../Date/index.scss';

export function Clock() {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const [getDate, setGetDate] = useState(new Date());

    function reflashClock() {
        setGetDate(new Date());
    }

    useEffect(() => {
        const timer = setInterval(reflashClock, 1000);
        return function clearTimer() {
            clearInterval(timer);
        };
    }, []);

    const todaysDate = getDate.getDate() + ' ' + month[getDate.getMonth()] + ' ' + getDate.getFullYear();
    const nowTime = getDate.getHours() + ':' + getDate.getMinutes();

    return [todaysDate, nowTime];
};

