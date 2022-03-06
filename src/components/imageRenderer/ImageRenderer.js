import React, {useRef, useState} from 'react';
import './ImageRenderStyle.css'
import {useIntersection} from "../../hooks/useIntersectionObserver";

const ImageRenderer = ({url, thumbnail, width, height}) =>{
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef();

    useIntersection(imgRef, () => {
        setIsInView(true)
    })

    const handleOnLoad = () => {
        setIsLoaded(true);
    }
    return (
        <div
            className="image-container"
            ref={imgRef}
            style={{
                paddingBottom: `${(height / width) * 100}%`,
                width: '100%'
            }}
        >
            {isInView &&(
                <>
                    <img
                        className={`image thumb ${isLoaded && 'isLoaded'}`}
                        src={thumbnail}
                    />
                    <img
                        className={`image ${isLoaded && 'isLoaded'}`}
                        src={url}
                        onLoad={handleOnLoad}
                    />
                </>
            )}
        </div>
    )
}

export default ImageRenderer