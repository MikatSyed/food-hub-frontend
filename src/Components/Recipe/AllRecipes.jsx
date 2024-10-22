import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { foodCategoryOptions, countryCategoryOptions } from '../../constants/constants';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import { useLocation } from 'react-router-dom';

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    country: '',
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Default total pages set to 1
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const itemsPerPage = 6; // Define how many items to show per page

  // Adjust the base API URL depending on the environment (development or production)
  const apiBaseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:6660'
    : 'https://food-hud-backend.vercel.app';

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${apiBaseUrl}/api/v1/recipe`, {
          params: {
            searchTerm: searchTerm || undefined,
            category: filters.category || undefined,
            country: filters.country || undefined,
            page,
            limit: itemsPerPage, // Pagination limit
          },
        });

        const recipeData = response?.data?.data || [];
        const totalRecipes = response?.data?.meta?.total || 0; // Get total recipes from API

        setRecipes(recipeData);
        setTotalPages(Math.ceil(totalRecipes / itemsPerPage)); // Calculate total pages based on totalRecipes and itemsPerPage
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [searchTerm, filters, page]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
    setPage(1); // Reset to first page when filters are applied
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="mx-auto sm:px-6 md:px-[6rem] my-4">
      <div className="mb-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-4xl">
            All Recipes
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Find your next favorite dish today!
          </p>
        </div>
        {location.pathname === '/recipes' && (
          <div className="flex items-center">
            <div className="relative flex-1 mr-4">
              <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-[400px] rounded-full bg-gray-100 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#22c55e] transition-colors duration-300"
              />
            </div>
            <div className="relative mr-4">
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="w-full rounded-full bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#22c55e] transition-colors duration-300"
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
                className="w-full rounded-full bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#22c55e] transition-colors duration-300"
              >
                <option value="">Filter by Country</option>
                {countryCategoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>

          {/* Pagination Component */}
          <div className="mt-12 flex justify-center items-center">
            <ul className="inline-flex space-x-2">
              {/* Previous Button */}
              <li>
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className={`px-3 py-1.5 text-white ${page === 1 ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-700'} rounded-md`}
                >
                  Previous
                </button>
              </li>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <li key={pageNumber}>
                  <button
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-3 py-1.5 rounded-md ${page === pageNumber ? 'bg-green-500 text-white' : 'bg-white text-green-500 border border-green-500 hover:bg-green-500 hover:text-white'}`}
                  >
                    {pageNumber}
                  </button>
                </li>
              ))}

              {/* Next Button */}
              <li>
                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                  className={`px-3 py-1.5 text-white ${page === totalPages ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-700'} rounded-md`}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default AllRecipes;
