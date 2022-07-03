module.exports = {
    port: process.env.PORT || 3000,
    pokeApiURL: 'https://pokeapi.co/api/v2',
    defaultTTL: 1000 * 30,
    mongoURI: 'mongodb://localhost:27017/pokemon',
}