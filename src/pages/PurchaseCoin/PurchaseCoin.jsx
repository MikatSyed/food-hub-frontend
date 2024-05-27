import React from 'react';
import { getFromLocalStorage } from '../../utils/local-storage';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const PurchaseCoinCard = ({ title, coins, price, onClick }) => {
  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden mb-8 transition-transform duration-300 transform hover:scale-105">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <div className="flex items-center mb-6">
          <span className="text-4xl font-bold text-[#fb651e] mr-2">{coins}</span>
          <span className="text-gray-700 text-base">Coins</span>
        </div>
        <div className="flex items-center mb-6">
          <span className="text-4xl font-bold text-[#fb651e] mr-2">${price}</span>
          <span className="text-gray-700 text-base">USD</span>
        </div>
        <button
          onClick={onClick}
          className="bg-[#fb651e] hover:bg-[#e05716] text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg w-full"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

const PurchaseCoin = () => {
  const navigate = useNavigate()
  const handlePurchase = async (coins, price) => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      const response = await axios.post(
        'https://food-hud-backend.vercel.app/api/v1/payment/init',
        {
          total_amount: price,
          coins: coins,
        },
        {
          headers: {
            Authorization: `${accessToken}`,
          },
        }
      );
    console.log(response.data.data,'45')
      if (response.data ) {
        const redirectPath = response.data.data;
        window.location.href = redirectPath;
      } else {
        toast.error('Failed to initiate payment. Please try again.');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      toast.error('An error occurred while initiating payment.');
    }
  };
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Purchase Coins</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PurchaseCoinCard
          title="100 Coins"
          coins={100}
          price={1}
          onClick={() => handlePurchase(100, 1)}
        />
        <PurchaseCoinCard
          title="500 Coins"
          coins={500}
          price={5}
          onClick={() => handlePurchase(500, 5)}
        />
        <PurchaseCoinCard
          title="1000 Coins"
          coins={1000}
          price={10}
          onClick={() => handlePurchase(1000, 10)}
        />
      </div>
    </div>
  );
};

export default PurchaseCoin;
