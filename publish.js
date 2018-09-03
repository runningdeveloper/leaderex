const ghpages = require('gh-pages');

ghpages.publish('website/public', function(err) {
  console.log('error publish', err);
});