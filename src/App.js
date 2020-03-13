import React, { useState } from 'react';
import SearchForm from './components/SearchForm';

function App() {

  /** Hook: Define State */
  const [ term, setTerm ] = useState( '' );

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
