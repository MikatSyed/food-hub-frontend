// RecipeCard.js
import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-56 w-full">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 right-0 m-4 bg-[#fb651e] text-white px-3 py-1 rounded-full text-sm font-medium">
          {recipe.country}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{recipe.name}</h3>
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-4">
            <svg
              className="h-5 w-5 text-gray-400 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-gray-500 text-sm">{recipe.purchased_by}</span>
          </div>
          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-gray-400 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <span className="text-gray-500 text-sm">{recipe.creatorEmail}</span>
          </div>
        </div>
        <div className="flex justify-end">
          <a
            href={`/recipe/${recipe._id}`}
            className="bg-[#fb651e] hover:bg-[#e05716] text-white font-medium py-2 px-4 rounded"
          >
            View The Recipe
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
