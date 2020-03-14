import React from 'react';

const ImageCard = ({ image }) => {      // Destructuring Props

    const { id, previewURL, user, largeImageURL, likes, tags } = image;                   // Destructuring Object

    return (
        <div className="col col-md-4 mb-2">            

            <div className="card">
                <img src={ previewURL } className="card-img-top" alt={ tags } />
                <div className="card-img-overlay"><i className="fas fa-heart"><span>{ likes }</span></i></div>
                <div className="card-body">
                    <h5 className="card-title">{ user }</h5>
                    <a
                        target="_blank"
                        className="btn btn-warning btn-block"
                        rel="noopener noreferrer"
                        href={ largeImageURL }
                    >Ver original</a>
                </div>
            </div>
    
        </div>
    );
}

export default ImageCard;