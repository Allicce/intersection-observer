import React from 'react';
import './ImageRenderStyle.css'

const ImageRenderer = ({width, height}) =>{
    return (
        <div
            className="image-container"
            // ref={imgRef}
            style={{
                paddingBottom: `${(height / width) * 100}%`,
                width: '100%'
            }}
        >

        </div>
    )
}

export default ImageRenderer