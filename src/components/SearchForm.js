import React, { useState } from 'react';

const SearchForm = () => {

    /** Hook: Define State */
    const [ searchTerm, setSearchTerm ] = useState( '' );

    /** Methods */
    const submitSearch = event => {
        event .preventDefault();
        console .log( 'Termino de busqueda', searchTerm );
    }

    return (
        <form
            onSubmit={ submitSearch }
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text" 
                        className="form-control form-control-lg" 
                        id="search" 
                        aria-describedby="searchHelp"
                        onChange={ event => setSearchTerm( event .target .value ) }
                    />
                    <small id="searchHelp" className="form-text text-muted">Escribe una palabra que describa tu búsqueda.</small>
                </div>
                <div className="form-group col-md-4">
                    <button type="submit" className="btn btn-warning btn-lg btn-block">Buscar</button>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;