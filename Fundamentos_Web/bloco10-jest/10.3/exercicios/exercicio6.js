const fetch = require('node-fetch');

const fetchURL = async () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(r => r.json()
      .then(json =>
        r.ok ? Promise.resolve(json) : Promise.reject(json)
      )
    );
}

module.exports = { fetchURL };