import axiosInstance from "../axios/axiosInstance";

/**
 * Fetches all products from the server.
 * @returns {Promise<Array>} An array of product objects.
 */
const getProducts = async () => {
  const response = await axiosInstance.get("/products");
  return response.data;
};

export default getProducts;
