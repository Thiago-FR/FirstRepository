import React, { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function fetchApiGet() {
      fetch('http://localhost:3001/recipes/search?name=Macarrão')
        .then(response => response.json())
        .then(recipe => {
          setRecipes(recipe);
          setIsLoading(false);
        });
    }

    function fetchApiPost() {
      fetch('http://localhost:3001/recipes/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 4,
          name: 'Macarrão com Frango',
          price: 30
        })
      });
    }

    // fetchApiGet();
    fetchApiPost();
  }, []);

  return (
    <div >
      <div>
          {isLoading && <h1>Loading</h1>}
          <div className='card-group'>
            {recipes.map((recipe) => (
              <div key={recipe.id}>
                <h1>{recipe.name}</h1>
                <span>Preço: {recipe.price}</span>
                <span>Tempo de preparo: {recipe.waitTime}</span>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default App;
