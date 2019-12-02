const axios = require('axios');
const CacheService = require('../services/cacheService');


const ttl = 60 * 0.5; // cache for 30 seconds
const cache = new CacheService(ttl); // Create a new cache service instance

const getDogList = async () => {
    let response = [];
    const key = 'dogs';
    try {
        response = cache.get('dogs', async() => {
            return await axios.get('https://dog.ceo/api/breeds/list/all');
        });
    }
    catch (e) {
        console.log(e);
    }
    return response;
};

const deleteDogList = async () => {
    const key = 'dogs';
    cache.del(key);
    return true;
};


const dogServices = {
    getDogList,
    deleteDogList
};

module.exports = dogServices;