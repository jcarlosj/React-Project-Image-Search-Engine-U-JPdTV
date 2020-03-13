import React from 'react';

const ResultsList = ({ resultsList }) => {
    return (
        <div className="row">
            { resultsList .map( ( obj ) => (         // Implicit return
                <div key={ obj .id } className="col col-md-4">

                    <div className="card bg-light text-white mb-3 p-1">
                        <img src={ obj .previewURL } className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title">{ obj .user }</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default ResultsList;