// Recipe.js
import React from 'react';
import RecipeCard from './RecipeCard';

const demoRecipes = [
  {
    _id: '1',
    name: 'Grilled Chicken Salad',
    image: 'https://foodhub.modeltheme.com/wp-content/uploads/2019/10/blogpost04-625x375.jpg',
    purchased_by: 100,
    creatorEmail: 'john@example.com',
    country: 'USA'
  },
  {
    _id: '2',
    name: 'Beef Stroganoff',
    image: 'https://foodhub.modeltheme.com/wp-content/uploads/2019/10/blogpost04-625x375.jpg',
    purchased_by: 50,
    creatorEmail: 'jane@example.com',
    country: 'Russia'
  },
  {
    _id: '3',
    name: 'Vegetable Stir-Fry',
    image: 'https://foodhub.modeltheme.com/wp-content/uploads/2019/10/blogpost04-625x375.jpg',
    purchased_by: 75,
    creatorEmail: 'bob@example.com',
    country: 'China'
  },
  {
    _id: '4',
    name: 'Baked Salmon with Lemon',
    image: 'https://foodhub.modeltheme.com/wp-content/uploads/2019/10/blogpost04-625x375.jpg',
    purchased_by: 90,
    creatorEmail: 'alice@example.com',
    country: 'Norway'
  },
  {
    _id: '5',
    name: 'Spaghetti Bolognese',
    image: 'https://foodhub.modeltheme.com/wp-content/uploads/2019/10/blogpost04-625x375.jpg',
    purchased_by: 120,
    creatorEmail: 'tom@example.com',
    country: 'Italy'
  },
  {
    _id: '6',
    name: 'Vegetable Curry',
    image: 'https://foodhub.modeltheme.com/wp-content/uploads/2019/10/blogpost04-625x375.jpg',
    purchased_by: 80,
    creatorEmail: 'sarah@example.com',
    country: 'India'
  }
];

const Recipe = () => {
  return (
    <div className="bg-gray-100 py-12">
         <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore Our Delicious Recipes
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Browse through our extensive collection of recipes and find your next culinary inspiration.
          </p>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoRecipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
