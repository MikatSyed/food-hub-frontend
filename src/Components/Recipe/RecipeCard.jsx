import React, { useEffect, useState } from 'react';
import { FaUser, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'; // Import other reaction icons as needed
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const [userCoin, setUserCoin] = useState(0);
  const [userData, setUserData] = useState(null);
  const [isLiked, setIsLiked] = useState(false); // State to track whether the user has liked the recipe
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://food-hub-eta.vercel.app/api/v1/auth/profile', {
          headers: {
            Authorization: accessToken
          }
        });
        setUserData(response.data.data);
        setUserCoin(response.data.data.coins);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (accessToken) {
      fetchUserData();
    }
  }, [accessToken]);

  const handleViewRecipe = async () => {
    // Your existing logic for viewing recipe
  };

  const handleLikeRecipe = async () => {
    if (!accessToken) {
      toast.error("Please login to react to the recipe.");
      setTimeout(() => {
        navigate('/login');
      }, 3000);
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:6660/api/v1/recipe/${recipe._id}/like`, // Your API endpoint for liking a recipe
        {},
        {
          headers: {
            Authorization: accessToken
          }
        }
      );

      // Toggle the like state
      setIsLiked(prev => !prev);
      // Show success message
      toast.success(response.data.message);
    } catch (error) {
      console.error('Error reacting to recipe:', error);
      toast.error("Error reacting to recipe. Please try again.");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Recipe card content */}
      <div className="p-4">
        {/* Recipe details */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{recipe.recipeName}</h3>
            <div className="flex items-center">
              <FaMapMarkerAlt className="h-5 w-5 text-gray-400 mr-1" />
              <span className="text-gray-500 text-sm">{recipe.country}</span>
            </div>
          </div>
          <div>
            <FaUser className="h-4 w-4 text-gray-400 mr-1" />
            <span className="text-gray-500 text-sm">{recipe.creatorEmail}</span>
          </div>
        </div>
        
        {/* Reaction buttons */}
        <div className="flex justify-end items-center mb-4">
          {/* Like button */}
          <button
            onClick={handleLikeRecipe}
            className={`text-gray-500 hover:text-red-500 transition-colors duration-300 ${isLiked ? 'text-red-500' : ''}`}
          >
            <FaHeart className="h-6 w-6" />
          </button>
          {/* Add more reaction buttons as needed */}
        </div>

        {/* View recipe button */}
        <div className="flex justify-end">
          <button
            onClick={handleViewRecipe}
            className="bg-[#fb651e] hover:bg-[#e05716] text-white font-medium py-2 px-4 rounded"
          >
            View The Recipe
          </button>
        </div>
      </div>

      {/* Toast notifications */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default RecipeCard;
