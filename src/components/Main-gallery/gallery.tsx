import React, { useEffect, useState } from "react";
import axios from "axios";
import { ImageTemplateObj } from "../../types/getTypes";

const Gallery: React.FC = () => {
    const APP_KEY: string = '3B_wzGac0yHlAj4WlWIPBmTjtAr6Dx9w46bwrvEjLAw';
    const [randomPicture, setRandomPicture] = useState(ImageTemplateObj)
    useEffect(() => {
        // const URL = `https://api.unsplash.com/collections/${id}/photos`;
        const URL = `https://api.unsplash.com/photos/random`;

        axios.get(URL, {
            params: {
                client_id: APP_KEY,
            },
        }).then((resp) => {
            const image = resp.data;
            setRandomPicture(image);
        }).catch((error) => {
            throw new Error('Что то пошло не так');
        })
    }, );

    console.log(randomPicture);

    return (
        <section>
            <form>
                <input type="text" />
                <input type="button" value="Get image"/>
            </form>
            <div>
                <img src={randomPicture.urls.small} alt="{randomPicture.alt_description}" />
            </div>
        </section>
    )
}

export default Gallery;