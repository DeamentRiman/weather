import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { ImageTemplateObj } from '../../../types/getTypes'
import ImageCard from '../../Card'
import './index.scss'

const Gallery: React.FC = () => {
    const APP_KEY: string = '2ZuSWNrBww8nbpP5OVeEiRQV9q74DdAApgMLBGSfRpU'
    const [randomPicture, setRandomPicture] = useState(ImageTemplateObj)
    const [id, setId] = useState('')
    const [images, setImages] = useState([])
    const [isEditMode, setIsEditMode] = useState(false)
    const editTitleInputRef = useRef<HTMLInputElement>(null)

    const idHendler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setId(e.target.value)
    }

    useEffect(() => {
        const URL = 'https://api.unsplash.com/photos/random'

        axios
            .get(URL, {
                params: {
                    client_id: APP_KEY,
                    count: 1,
                },
            })
            .then((resp) => {
                const image = resp.data
                setRandomPicture(image[0])
                new Error('stop axios')
            })
            .catch((error) => {
                throw new Error(error)
            })
    }, [])

    useEffect(() => {
        if (isEditMode) {
            editTitleInputRef?.current?.click()
        }
    }, [isEditMode])

    function imageSubmitHandler(id: string) {
        const URL = `https://api.unsplash.com/collections/${id}/photos`
        axios
            .get(URL, {
                params: {
                    client_id: APP_KEY,
                    per_page: 24,
                },
            })
            .then((resp) => {
                let imagesData = resp.data
                imagesData = imagesData.filter(
                    (imageData: any) => imageData.id.includes(id) === true
                )
                setImages(imagesData)
            })
            .catch((error) => {
                throw new Error(error)
            })
    }

    return (
        <main className="appMain">
            <section className="appMainGallery">
                <form
                    className="appMainGalleryForm"
                    onSubmit={(evt) => {
                        evt.preventDefault()
                        imageSubmitHandler(id)
                    }}
                >
                    <input
                        className="appMainGalleryInput"
                        type="text"
                        onChange={idHendler}
                        value={id}
                        placeholder="Введите данные изображения"
                    />
                    <input
                        className="appMainGalleryButton"
                        type="submit"
                        onClick={(evt) => {
                            setIsEditMode(true)
                        }}
                        value="Get image"
                    />
                </form>
                <div className="appMainGalleryPictures">
                    {!images[0] && !isEditMode ? (
                        <ImageCard
                            key={randomPicture.id}
                            id={randomPicture.id}
                            src={randomPicture.urls.small}
                            description={randomPicture.alt_description}
                            name={randomPicture.user.name}
                        />
                    ) : images.length === 0 ? (
                        <p className="appMainGalleryError">
                            Не подходящих изображений
                        </p>
                    ) : (
                        images.map((image: any) => {
                            return (
                                <ImageCard
                                    key={image.id}
                                    id={image.id}
                                    src={image.urls.small}
                                    description={image.alt_description}
                                    name={image.user.name}
                                />
                            )
                        })
                    )}
                </div>
            </section>
        </main>
    )
}

export default Gallery
