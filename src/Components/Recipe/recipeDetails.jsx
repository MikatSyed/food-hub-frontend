import React, { useEffect, useState } from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.get(`https://food-hud-backend.vercel.app/api/v1/recipe/${id}`, {
          headers: {
            Authorization: `${accessToken}`,
          },
        });
        setRecipe(response.data.data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(`https://food-hud-backend.vercel.app/api/v1/recipe/suggestion/${id}`);
        setSuggestions(response.data.data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    fetchRecipe();
    fetchSuggestions();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 mx-auto sm:px-6 md:px-[7rem] my-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recipe Detail */}
        <div className="bg-white shadow-sm rounded overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/2 relative">
              <img
                src={recipe.recipeImage}
                alt={recipe.recipeName}
                className="h-full w-full object-cover rounded-l-lg"
              />
              <div className="absolute top-0 right-0 m-4 bg-[#fb651e] text-white px-3 py-1 rounded-full text-sm font-medium">
                {recipe.country}
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{recipe.recipeName}</h2>
              <div className="flex items-center mb-6">
                <div className="flex items-center mr-6">
                  <FaShoppingCart className="h-5 w-5 text-gray-500 mr-1" />
                  <span className="text-gray-700 text-sm">{recipe.purchased_by.length} purchased</span>
                </div>
                <div className="flex items-center">
                  <FaUser className="h-5 w-5 text-gray-500 mr-1" />
                  <span className="text-gray-700 text-sm">{recipe.creatorEmail}</span>
                </div>
              </div>
              <p className="text-gray-700 mb-6">{recipe.recipeDetails}</p>
            </div>
          </div>
        </div>

        {/* Recipe Suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Video Section */}
          <div className="md:col-span-2">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="w-full h-[300px] md:h-[400px]">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${recipe.embeddedVideoCode}`}
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Recipe Suggestions */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Recipe Suggestions</h2>
            {suggestions.map((suggestion, index) => (
              <Link key={index} to={`/recipe/${suggestion._id}`} className="flex flex-row justify-between rounded-lg bg-white p-4">
                <div>
                  <div className="font-bold">{suggestion.recipeName}</div>
                  <div className="text-sm"> {suggestion.recipeDetails.split(" ").slice(0, 20).join(" ")}...</div>
                </div>
                <div className="ml-4 h-[95px] w-[95px] flex-none rounded-lg bg-cover" style={{backgroundImage: `url(${suggestion.recipeImage})`}}></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
