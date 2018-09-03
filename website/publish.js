const ghpages = require('gh-pages');

ghpages.publish('public', function(err) {
  console.log('error publish', err);
});