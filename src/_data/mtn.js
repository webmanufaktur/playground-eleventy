const EleventyFetch = require("@11ty/eleventy-fetch");
// https://www.restaurants-neumuenster.de/mtn-rst-api-json/
const source = "https://www.restaurants-neumuenster.de/mtn-rst-api-json/";
// const source = "https://www.restaurants-neumuenster.de/mtn-rst-api-json/";

module.exports = async function () {
  try {
    let url = source;

    /* This returns a promise */
    return EleventyFetch(url, {
      duration: "10s",
      type: "json",
    });
  } catch (e) {
    return {
      // my failure fallback data
    };
  }
};
