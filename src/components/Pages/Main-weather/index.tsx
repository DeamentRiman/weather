import React from 'react'
import { getDate, getDayPeriod } from '../../../utils/getData'
import './index.scss'
import NasaAPOD from '../../NasaAPOD'
import Weather from '../../Weather'

import Clock from '../../Clock'

const Main: React.FC = () => {
    const todaysDate = getDate()

    return (
        <article className="appMain">
            <section
                className={
                    getDayPeriod() ? 'appMainDataDay' : 'appMainDataNight'
                }
            >
                <div className="appMainDataWrapper">
                    <p className="appMainDate">{todaysDate}</p>
                    <Clock />
                </div>
                <Weather />
            </section>
            <NasaAPOD />
        </article>
    )
}
export default Main
