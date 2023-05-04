import { MemeSVGViewer } from 'orsys-tjs-meme';
import React from 'react';
import { useSelector } from 'react-redux'



function StoreMemeSVGViewer(props) {

    const meme = useSelector(storeState => storeState.meme);
    const image = useSelector(storeState => storeState.ressources.images.find((img) => img.id === meme.imageId));
    return (
        <MemeSVGViewer meme={meme} image={image} basePath={props.basePath} />
    );
};

export default StoreMemeSVGViewer;