import React from 'react';

const ImageCard = ({ image }) => {      // Destructuring Props

    const { id, previewURL, user, largeImageURL, likes, tags } = image;                   // Destructuring Object

    return (
        <div className="col col-md-4 mb-2">            

            <div class="card">
                <img src={ previewURL } class="card-img-top" alt={ tags } />
                <div class="card-img-overlay">{ likes }</div>
                <div class="card-body">
                    <h5 class="card-title">{ user }</h5>
                    <a
                        target="_blank"
                        className="btn btn-warning btn-block"
                        rel="noopener norefferer"
                        href={ largeImageURL }
                    >Ver original</a>
                </div>
            </div>
    
        </div>
    );
}

export default ImageCard;