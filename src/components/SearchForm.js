import React from 'react';

const SearchForm = () => {
    return (
        <form>
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text" 
                        className="form-control form-control-lg" 
                        id="search" 
                        aria-describedby="searchHelp"
                    />
                    <small id="searchHelp" className="form-text text-muted">Escribe una palabra que describa tu búsqueda.</small>
                </div>
                <div className="form-group col-md-4">
                    <button type="button" className="btn btn-warning btn-lg btn-block">Buscar</button>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;