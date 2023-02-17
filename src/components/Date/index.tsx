import React, { useState , useEffect} from "react";
import '../Date/index.scss';

function Clock(){
    const [GetDate, setGetDate] = useState(new Date());

    function reflashClock() {
        setGetDate(new Date());
    }

    useEffect(() => {
        const timer = setInterval(reflashClock, 1000);
        return function clearTimer() {
            clearInterval(timer);
        };
    }, []);

    const todaysDate = 'Сегодня: ' + GetDate.getDate() + '-' + GetDate.getMonth() + '-' + GetDate.getFullYear();
    const nowTime = 'Время: ' + GetDate.getHours() + ':' + GetDate.getMinutes();
    return [todaysDate, nowTime];
}

export default Clock;

