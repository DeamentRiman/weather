import React from 'react'
import '../Card/index.scss'

interface ImageCardProps {
    id: any
    src: any
    description: any
    name: any
}

const ImageCard: React.FC<ImageCardProps> = ({ id, src, description, name }) => {
    return (
        <figure className="appMainGalleryCard" key={id}>
            <img className="appMainGalleryImage" src={src} alt={description} />
            <figcaption className="appMainGalleryDescr">
                {description}
            </figcaption>
            <p className="appMainGalleryAutor">Autor: {name}</p>
        </figure>
    )
}

export default ImageCard
