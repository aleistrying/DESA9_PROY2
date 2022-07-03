const Pokemon = require("../../models/Pokemon")
const { defaultTTL } = require("../../config")
module.exports = async (req, res) => {
    //calculate time left for each cache element
    const pokemons = await Pokemon.find()
    const results = []
    for (let pokemon of pokemons) {
        results.push({ ...pokemon.toObject(), timeLeft: formatTTLToSeconds(pokemon?.timestamp + defaultTTL) })
    }

    res.json(results);
}

function formatTTLToSeconds(ttl) {
    if (ttl - Date.now() <= 0)
        return "0s"

    const timeLeft = new Date(ttl - Date.now()).toISOString().split("T")[1].split(".")[0].split(":");
    if (timeLeft.length !== 3)
        return "0s";

    return `${Number(timeLeft[0]) ? Number(timeLeft[0]) + "h " : ""}`
        + `${Number(timeLeft[1]) ? Number(timeLeft[1]) + "m " : ""}`
        + `${Number(timeLeft[2]) ? Number(timeLeft[2]) + "s" : "0s"}`;
}