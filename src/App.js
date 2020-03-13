import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';

function App() {

  /** Hook: Define State */
  const [ term, setTerm ] = useState( '' ),
        [ apiData, setApiData ] = useState( {} );

  /** Hook: Traking State */
  useEffect( () => {

    const getApiData = async () => {

      /** Validate State */
      if( term === '' ) return null;

      /** Request API */
      const 
        resultsPerPage = 18,
        apiKey = '9109568-ff204efa6ca38fb149b4fe7d6',
        url = `https://pixabay.com/api/?key=${ apiKey }&q=${ term }&per_page=${ resultsPerPage }`,
        response = await fetch( url ),
        data = await response .json();

        console .log( 'Data Pixabay', data );
        setApiData( data );

    }
    getApiData();

    



  }, [ term ] );

  return (
    <div className="container mt-3">
        <div className="jumbotron">
            <h1 className="display-4">Búsqueda de imágenes</h1>
            <p className="lead">Podrás encontrar miles de imágenes totalmente gratuitas de Pixabay, para que puedas usar en tus proyectos.</p>
            <hr className="my-4" />

            <SearchForm 
              setTerm={ setTerm }
            />
        </div>
    </div>
  );
}

export default App;
