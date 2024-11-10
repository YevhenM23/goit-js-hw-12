import axios from 'axios';

const API_KEY = "46809919-8ae2f3dd2d3333d4ada30ded2";

export async function fetchImages(query = "dogs", page = 1) {
    const response = await axios(`https://pixabay.com/api/`, {
        params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        per_page: 15,
        page,
    },
});
    return response.data;
};


   











