// src/services/timbuApi.js
import axios from 'axios';

const API_KEY = '37a1afaa04e344c2952af1ad569031a120240713030516466938';
const PASSWORD = '0UPB8JRMBF1KM1P';
const BASE_URL = 'https://api.timbu.cloud';

export const getProducts = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/products?page=${page}`, {
      headers: { 
        Authorization: `Bearer ${API_KEY}`,
        'X-Password': PASSWORD
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`, {
      headers: { 
        Authorization: `Bearer ${API_KEY}`,
        'X-Password': PASSWORD
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};
