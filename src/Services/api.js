import axios from 'axios';

// Key 1e102f98a91484b1a2f78e85e8e932c6b550bd49

// base url: https://api-ssl.bitly.com/v4/shorten

export const key = '1e102f98a91484b1a2f78e85e8e932c6b550bd49';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
})

export default api;