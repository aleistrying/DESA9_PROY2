const Pokemon = require("../../models/Pokemon");
module.exports = async (req, res) => {
    const pokemons = await Pokemon.find().lean();

    res.json({
        success: !!pokemons.length,
        ...(!!pokemons.length ? { cache: req.cache }
            : { error: "No Cache to clear" })
    });
    //delete promise but it doesn't matter.
    Pokemon.deleteMany({}, (err) => {
        if (err)
            console.log(err)
    })

}