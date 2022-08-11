const axios = require("axios");

class Searching {
  history = ["Medellin", "Madrid", "Toronto", "New York", "Lima"];

  constructor() {
    // TODO: Read DB, if exists
  }

  get paramsMapBox() {
    return {
      language: "es",
      access_token: `${process.env.MAPBOX_TOKEN}`,
      limit: 5,
    };
  }

  async city(city = "") {
    // Http request

    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`,
        params: this.paramsMapBox,
      });

      const response = await instance.get();
      console.log(response.data);

      return [];
    } catch (error) {
      return [];
    }

    return [];
  }
}

module.exports = Searching;
