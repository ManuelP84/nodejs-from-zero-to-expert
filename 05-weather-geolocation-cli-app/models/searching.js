const fs = require("fs");
const axios = require("axios");

class Searching {
  history = [];
  dbPath = "./db/database.json";

  constructor() {
    // TODO: Read DB, if exists
    this.readDb();
  }

  get paramsMapBox() {
    return {
      language: "es",
      access_token: process.env.MAPBOX_TOKEN,
      limit: 5,
    };
  }

  get paramsOpenWeather() {
    return {
      appid: process.env.OPENWEATHER_TOKEN,
      units: "metric",
      lang: "es",
    };
  }

  get historyCapitalized() {
    return this.history.map((place) => {
      const placeSplited = place.split(" ");
      const wordCapitalized = placeSplited.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1); // Another way is: word[0].toUpperCase() + word.substring(1);
      });
      return wordCapitalized.join(" ");
    });
  }

  async cities(city = "") {
    // Http request to Mapbox: Cities

    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`,
        params: this.paramsMapBox,
      });

      const response = await instance.get();

      return response.data.features.map((place) => ({
        id: place.id,
        name: place.place_name,
        long: place.center[0],
        lat: place.center[1],
      }));
    } catch (error) {
      return [];
    }
  }

  async weather(lat, lon) {
    // Http request to OpenWeather: City weather

    try {
      const instance = new axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.paramsOpenWeather, lat, lon },
      });

      const response = await instance.get();

      const { weather, main } = response.data;

      return {
        description: weather[0].description,
        tempMin: main.temp_min,
        tempMax: main.temp_max,
        temp: main.temp,
      };
    } catch (error) {}
  }

  addToHistory(place) {
    if (!this.history.includes(place.toLowerCase())) {
      this.history = this.history.splice(0, 5); // Return an array o 6 positions
      this.history.unshift(place.toLowerCase());
      this.saveDb();
    }
  }

  saveDb() {
    try {
      const payload = {
        history: this.history,
      };

      fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    } catch (error) {
      throw error;
    }
  }

  readDb() {
    try {
      if (!fs.existsSync(this.dbPath)) return null;

      const data = fs.readFileSync(this.dbPath, { encoding: "utf-8" });
      const json_data = JSON.parse(data);
      this.history = json_data.history;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Searching;
