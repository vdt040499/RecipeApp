import React, {useEffect, useState} from 'react';
import Recipe from './components/Recipe';
import './App.css';

const App = () => {

  const APP_ID = "d686ae90";
  const APP_KEY = "5c36e17b7218bd5c7e57316a6feeb844";
 
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        />
      ))};
    </div>
  );
}

export default App;
