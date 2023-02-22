import React, { useEffect, useState } from "react";
import '../NasaAPOD/index.scss';
import axios from "axios";
import { NasaApodObj } from "../../types/getTypes";

const NasaAPOD: React.FC = () => {
    const [nasaApod, setNasaApod] = useState(NasaApodObj);

    useEffect(() => {
        const URL = 'https://api.nasa.gov/planetary/apod?api_key=eA5bXAPwJLGiXwfyY9D1cScPIsLoavFAxZoadIgH';

        axios.get(URL).then((resp) => {
            const nasaData = resp.data;
            setNasaApod(nasaData);
        }).catch((error) => {
            throw new Error(error);
        })
    }, []);

    return (
        <section className="appMainNasa">
            <div className="appMainNasaContent">            
                <h3 className="appMainNasaTitle">{nasaApod.title}</h3>
                <p className="appMainNasaExpl">{nasaApod.explanation}</p>
            </div>
            <div className="appMainNasaPicture">
                <img className="appMainNasaImg" src={nasaApod.url} alt="NasaApod" />
            </div>
        </section>
    )
}
export default NasaAPOD;