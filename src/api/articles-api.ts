import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

interface ImageApiResponse {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
}

export const getArticlesApi = async (
  searchQuery: string,
  page: number
): Promise<ImageApiResponse[]> => {
  const { data } = await axios.get("/search/photos", {
    headers: {
      Authorization: `Client-ID D_SPVSOx1r7wQQf7tImOfFzoek9ERDaEib9Ux2P1n7M`,
    },
    params: {
      query: searchQuery,
      page,
      per_page: 12,
    },
  });
  return data.results;
};
