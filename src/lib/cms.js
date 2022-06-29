import axios from "axios";

export const axiosInstance = () => {
  return axios.create({
    baseURL: "https://api.storyblok.com/v2/cdn/stories",
    params: {
      token: "wtkrJdW2KBWMIC9jMwr0sQtt",
      version: "draft",
    },
  });
};

export const fetchPost = async (slug) => {
  try {
    const { data } = await axiosInstance().get("/blog/" + slug);
    return data;
  } catch (error) {
    return null;
  }
};

export const fetchPosts = async (page = 1, per_page = 20) => {
  try {
    const { data } = await axiosInstance().get("/", {
      params: {
        page,
        per_page,
      },
    });
    return data;
  } catch (error) {
    return null;
  }
};

export const searchPostsByTags = async (query) => {
  console.log("Here");
  try {
    const { data } = await axiosInstance().get("/", {
      params: {
        filter_query: {
          tags: {
            like: `react`,
          },
        },
      },
    });
    console.log("Here 2");

    console.log(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchPostSlugs = async () => {
  try {
    const { stories } = await fetchPosts();
    return stories.map((story) => "/" + story.full_slug);
  } catch (error) {
    return null;
  }
};
