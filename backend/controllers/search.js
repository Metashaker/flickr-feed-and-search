const axios = require('axios');
const Flickr = require('flickr-sdk');

const feeds = Flickr.Feeds();

const searchController = async (req, res, next) => {
  const { tag } = req.query;
  const feedPhotos = feeds.publicPhotos();
  const endpointBase = feedPhotos.url;
  try {
    const feed = await axios.get(`${endpointBase}?format=json&nojsoncallback=1?tags=${tag}`);
    const feedContent = feed.data.items;
    res.send(feedContent).status(200);
  } catch (e) {
    res.send('There was an error fetching data from flickr :(').status(500);
  }
};

module.exports = searchController;
