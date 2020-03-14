import React, { useState, useEffect, Fragment } from 'react';
/** Components */
import SearchForm from './components/SearchForm';
import ResultsList from './components/ResultsList';

function App() {

  /** Hook: Define State */
  const [ term, setTerm ] = useState( '' ),
        [ apiData, setApiData ] = useState( [] ),
        [ actualPage, setActualPage ] = useState( 1 ),
        [ totalPages, setTotalPages ] = useState( 1 );

  /** Hook: Traking State */
  useEffect( () => {

    const getApiData = async () => {

      /** Validate State */
      if( term === '' ) return null;

      /** Request API */
      const 
        resultsPerPage = 30,
        apiKey = '9109568-ff204efa6ca38fb149b4fe7d6',
        url = `https://pixabay.com/api/?key=${ apiKey }&q=${ term }&per_page=${ resultsPerPage }&page=${ actualPage }`,
        response = await fetch( url ),
        data = await response .json();

        console .log( 'Data Pixabay', data );
        setApiData( data .hits );
        setTotalPages( Math .ceil( data .totalHits / resultsPerPage ) );     // totalHits: Registros disponibles en la version gratuita de la API

        /** Desplazamiento hacia arriba animado */
        const elJumbotron = document .querySelector( '.jumbotron' );
        elJumbotron .scrollIntoView({
            behavior: 'smooth'
        });

    }
    getApiData();

  }, [ term, actualPage ] );

    /** Methods */
    const onClickPreviousPage = () => {
        const page = actualPage - 1;

        if( page === 0 ) return;

        setActualPage( page );
    }
    const onClickNextPage = () => {
        const page = actualPage + 1;

        if( page > totalPages ) return;

        setActualPage( page );
    }

  return (
    <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Imágenes <small><small>using </small><strong>Pixabay</strong></small></a>
        </nav>
        
        <div className="jumbotron">
            <div className="container">
                <h3 className="display-4">Búsqueda de imágenes</h3>
                <p className="lead">Podrás encontrar miles de imágenes totalmente gratuitas de Pixabay, para que puedas usar en tus proyectos.</p>
                <hr className="my-4" />

                <SearchForm 
                setTerm={ setTerm }
                />
            </div>
        </div>
        <div className="container mt-3">
            <div className="row justify-content-center">
                <ResultsList 
                    resultsList={ apiData }
                />

                <nav aria-label="...">
                    <ul className="pagination">
                        { actualPage === 1
                            ?   null
                            :   (   <li className="page-item">
                                        <a 
                                            className="page-link" 
                                            href="#"
                                            onClick={ onClickPreviousPage }
                                        >Anterior</a>
                                    </li> 
                                )
                        }
                        { actualPage === totalPages
                            ?   null
                            :   (   <li className="page-item">
                                        <a 
                                            className="page-link" 
                                            href="#"
                                            onClick={ onClickNextPage }
                                        >Siguiente</a>
                                    </li>
                                )  
                        }
                    </ul>
                </nav>
            </div>
        </div>
    </Fragment>
  );
}

export default App;
