import React, { useEffect, useState } from 'react';
import { FaUser, FaMapMarkerAlt, FaStar, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const [userCoin, setUserCoin] = useState(0);
  const [userData, setUserData] = useState(null);
  const [liked, setLiked] = useState(false);
  const accessToken = localStorage.getItem('accessToken');


  const apiBaseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:6660'
  : 'https://food-hud-backend.vercel.app';

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/api/v1/auth/profile`, {
          headers: {
            Authorization: accessToken,
          },
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
  }, [accessToken, apiBaseUrl]);

  const handleViewRecipe = async () => {
    if (!accessToken) {
      toast.error("Please login to view the recipe.");
      setTimeout(() => {
        navigate('/login');
      }, 3000);
      return;
    }

    if (recipe.creatorEmail === userData.email) {
      navigate(`/recipe/${recipe._id}`);
      return;
    }

    if (userCoin < 10) {
      toast.error("You don't have enough coins. Please purchase coins to view the recipe.");
      setTimeout(() => {
        navigate('/purchase-coin');
      }, 3000);

      return;
    }

    if (recipe.purchased_by.includes(userData.email)) {
      navigate(`/recipe/${recipe._id}`);
      return;
    }

    const confirmPurchase = window.confirm(
      "You are about to spend 10 coins to view the recipe. Do you want to continue?"
    );
    if (confirmPurchase) {
      try {
        await axios.post(`${apiBaseUrl}/api/v1/recipe/${recipe._id}/purchase`, {}, {
          headers: {
            Authorization: accessToken,
          },
        });

        setUserCoin((prev) => prev - 10);
        toast.success("Recipe purchased successfully!");
        navigate(`/recipe/${recipe._id}`);
      } catch (error) {
        console.error('Error purchasing recipe:', error);
        toast.error("Error purchasing recipe. Please try again.");
      }
    }
  };

  const handleLike = async () => {
    if (!accessToken) {
      toast.error("Please login to like the recipe.");
      return;
    }

    try {
      const res = await axios.post(`${apiBaseUrl}/api/v1/recipe/react/${recipe._id}/liked`, {}, {
        headers: {
          Authorization: accessToken,
        },
      });

      setLiked(res?.data?.data?.recipe?.isReact);
    } catch (error) {
      console.error('Error liking/unliking recipe:', error);
    }
  };

  return (
    <div className="bg-white border hover:shadow-md rounded-lg overflow-hidden">
      <div className="relative h-60 w-full">
        <img
          src={recipe.recipeImage}
          alt={recipe.recipeName}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 m-4 bg-[#22c55e] text-white px-3 py-1 rounded-full text-sm font-medium">
          {recipe.category}
        </div>
        <div className="absolute top-0 right-0 m-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
          <FaStar className="text-yellow-400" />
          <span>{recipe?.averageRating || '4.5'}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{recipe.recipeName}</h3>
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-4">
            <FaMapMarkerAlt className="h-5 w-5 text-gray-400 mr-1" />
            <span className="text-gray-500 text-sm">{recipe.country}</span>
          </div>
          <div className="flex items-center my-2">
            <FaUser className="h-4 w-4 text-gray-400 mr-1" />
            <span className="text-gray-500 text-sm">{recipe.creatorEmail}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handleViewRecipe}
            className="bg-[#22c55e] text-white font-medium py-2 px-3 rounded"
          >
            View Recipe
          </button>
          <button
            onClick={handleLike}
            className={`focus:outline-none ${liked ? 'text-red-500' : 'text-gray-400'}`}
          >
            <FaHeart className="h-5 w-5" />
          </button>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default RecipeCard;
