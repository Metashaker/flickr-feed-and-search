const axios = require('axios');
const Flickr = require('flickr-sdk');
const feeds = Flickr.Feeds();

const feedController = async (req,res, next) => {
  const feedPhotos = feeds.publicPhotos();
  const endpointBase = feedPhotos.url;
  try {
    const feed = await axios.get(`${endpointBase}?format=json&nojsoncallback=1`);
    const feedContent = feed.data.items;
    res.send(feedContent).status(200);
  } catch (e) {
    res.send('There was an error fetching data from flickr :(').status(500);
  }
};

module.exports = feedController