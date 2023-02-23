import React from 'react'
import '../Card/index.scss'

interface ImageCardProps {
    src: any
    description: any
}

const ImageCard: React.FC<ImageCardProps> = ({ src, description }) => {
    return (
        <figure className="appMainGalleryCard">
            <img className="appMainGalleryImage" src={src} alt={description} />
            <figcaption className="appMainGalleryDescr">
                {description}
            </figcaption>
        </figure>
    )
}

export default ImageCard
