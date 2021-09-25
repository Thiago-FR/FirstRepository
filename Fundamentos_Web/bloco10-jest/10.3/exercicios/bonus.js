const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = (url) => {
  return fetch(url, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data => data.joke);
};

module.exports = { fetchJoke };