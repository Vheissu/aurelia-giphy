import { HttpClient } from 'aurelia-fetch-client';

export const GIPHY_API_URL = 'https://api.giphy.com/v1/gifs/search';
export const GIPHY_API_KEY = 'Ge2tFIokSObkOUVjg1p4wHlgQGhu7CyJ';

const http = new HttpClient();

export async function searchGiphy(searchTerm): Promise<any> {
    const GIPHY_SEARCH_PARAMS = {
        api_key: GIPHY_API_KEY,
        q: searchTerm,
        limit: 25,
        offset: 0,
        rating: 'R',
        lang: 'en',
        fmt: 'json'
    };

    const QUERY_STRING = Object.entries(GIPHY_SEARCH_PARAMS).map(pair => pair.map(encodeURIComponent).join('=')).join('&');

    const response = await http.fetch(`${GIPHY_API_URL}?${QUERY_STRING}`);
    const result = await response.json();

    return result.data.map(gif => {
        return {
            title: gif.title,
            url: gif.url,
            previewUrl: gif.images.downsized.url,
            imageUrl: gif.images.original.url
        }
    });
}
