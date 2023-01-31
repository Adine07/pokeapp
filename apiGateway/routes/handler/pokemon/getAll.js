const apiAdapter = require('../../apiAdapter')
const {
  URL_POKEAPI
} = process.env

const api = apiAdapter(URL_POKEAPI)

module.exports = async (req, res) => {
  try{
    const pokemons = await api.get('/pokemon')
    return res.json(pokemons.data)
  }catch (error) {

    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({
        status: "error",
        message: "Service Unavailable"
      })
    }

    // const {status, data} = error
    // return res.status(status).json(data)
    return res.json(error)
  }
}