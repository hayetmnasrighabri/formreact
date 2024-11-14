import React from 'react';
import useFetch from './hooks/useFetch';

function App() {
  const { loading, data, errors } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      {loading && <div>Chargement...</div>}
      {errors && <div>Erreur : {errors}</div>}
      {data && (
        <div>
          <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
            
          ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
