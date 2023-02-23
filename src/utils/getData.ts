export const getDate = () => {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = new Date();
    const todaysDate = date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear();
    return todaysDate;
}

export const getTime = () => {
    const date = new Date();
    let finalMin:string;
    const dateMinute = date.getMinutes();
    (dateMinute < 10) ? (finalMin = '0' + String(dateMinute)) : finalMin = String(dateMinute);
    const nowTime = date.getHours() + ':' + finalMin;
    return nowTime;
}

export const getDayPeriod = () => {
    const date = new Date();
    const nowTime = date.getHours();
    return ((nowTime < 18 && nowTime > 5) ? true : false);
}