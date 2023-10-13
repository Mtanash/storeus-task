import axiosInstance from "../axios/axiosInstance";

/**
 * Retrieves a list of products filtered by the given filter object.
 *
 * @async
 * @function
 * @param {Object} filter - The filter object used to filter the products.
 * @returns {Promise<Array>} - A promise that resolves to an array of filtered products.
 */
const getFilteredProducts = async (filter) => {
  const response = await axiosInstance.get(
    `/products${filter ? `?${filter}` : ""}`
  );

  return response.data;
};

export default getFilteredProducts;
