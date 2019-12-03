const NodeCache = require('node-cache')
class Cache {

    constructor(ttlSeconds)
    {
        this.cache = new NodeCache({ stdTTL: ttlSeconds, checkperiod: ttlSeconds * 0.2, useClones: false });
    }

    async get(key, storeFunction)
    {
        const value = this.cache.get(key);
        if (value)
        {
            return value;
        }

        const newValue = await storeFunction();
        this.cache.set(key, newValue);
        return newValue;

    }

    del(key)
    {
        this.cache.del(key);
    }

    flush() {
        this.cache.flushAll();
    }
}

module.exports = Cache;