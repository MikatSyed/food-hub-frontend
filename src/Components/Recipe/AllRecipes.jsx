import React, { useState, useEffect } from 'react';
import { FaUser, FaMapMarkerAlt, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { foodCategoryOptions,countryCategoryOptions } from '../../constants/constants';
import axios from 'axios';
import RecipeCard from './RecipeCard';

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    country: '',
  });

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        let url = 'https://food-hud-backend.vercel.app/api/v1/recipe';
        const response = await axios.get(url);
        setRecipes(response.data.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    const fetchFilteredRecipes = async () => {
      try {
        let url = 'https://food-hud-backend.vercel.app/api/v1/recipe';
        const queryParams = {
          searchTerm: searchTerm || undefined,
          category: filters.category || undefined,
          country: filters.country || undefined,
        };

        const response = await axios.get(url, { params: queryParams });
        setRecipes(response.data.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    if (searchTerm || filters.category || filters.country) {
      fetchFilteredRecipes();
    }
  }, [searchTerm, filters]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  return (
    <div className="mx-auto sm:px-6 md:px-[7rem] my-4">
      <div className="mb-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          All Recipes
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Explore a variety of recipes from different categories and countries. Find your next favorite dish today!
        </p>
      </div>
        <div className="flex items-center">
          <div className="relative flex-1 mr-4">
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-[400px] rounded-full bg-gray-100 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#fb651e] transition-colors duration-300"
            />
          </div>
          <div className="relative mr-4">
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full rounded-full bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#fb651e] transition-colors duration-300"
            >
              <option value="">Filter by Category</option>
              {foodCategoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="relative">
            <select
              value={filters.country}
              onChange={(e) => handleFilterChange('country', e.target.value)}
              className="w-full rounded-full bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#fb651e] transition-colors duration-300"
            >
              <option value="">Filter by Country</option>
              {/* Populate the country options dynamically */}
              {countryCategoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe}/>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
