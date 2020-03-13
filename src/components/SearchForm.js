import React, { useState } from 'react';
/** Components */
import Error from './Error';

const SearchForm = () => {

    /** Hook: Define State */
    const 
        [ searchTerm, setSearchTerm ] = useState( '' ),
        [ error, setError ] = useState( false );

    /** Methods */
    const submitSearch = event => {
        event .preventDefault();
        console .log( 'Termino de busqueda', searchTerm );

        /** Validate field */
        if ( searchTerm .trim() === '' ) {
            setError( true );
            return;
        }
        setError( false );

        /** Actualiza State Componente Padre */
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
                    { error 
                        ?   <Error message="Ingresa un término de búsqueda" />
                        :   null
                    }
                </div>
                <div className="form-group col-md-4">
                    <button type="submit" className="btn btn-warning btn-lg btn-block">Buscar</button>
                </div>
            </div>

        </form>
    );
}

export default SearchForm;