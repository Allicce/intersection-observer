import React from 'react';
import {imageData} from "../assets/imageData";
import ImageRenderer from "../components/imageRenderer/ImageRenderer";

const LazyLoadImages = () => {
    return (
        <div>
            <h1>Lazy load Images</h1>
            <section>
                {imageData.map(data =>
                    <ImageRenderer
                        key={data.id}
                        url={data.url}
                        thumb={data.thumbnail}
                        width={data.width}
                        height={data.height}
                    />)}
            </section>
        </div>
    )
}

export default LazyLoadImages