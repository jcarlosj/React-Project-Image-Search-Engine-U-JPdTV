import React from 'react';

import ImageCard from './ImageCard';

const ResultsList = ({ resultsList }) => {
    return (
        <div className="row">
            { resultsList .map( ( image ) => (         // Implicit return
                <ImageCard 
                    key={ image .id }
                    image={ image }
                />
            ))}
        </div>
    );
}

export default ResultsList;