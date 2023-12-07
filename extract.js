const fetch = require("node-fetch");
// import { fetch } from "node-fetch";

const URL = "https://jsonplaceholder.typicode.com/albums";

async function getPhotos(albumId) {
  return await fetch(`${URL}/${albumId}/photos`).then((response) =>
    response.json()
  );
}

module.exports = { getPhotos };
