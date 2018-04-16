var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')

.on('error', function(error){
  throw error; //handles error
})
.on('response', function(response){
  console.log(response.statusMessage); // message that tells me if it worked or not
  console.log(response.headers['content-type']); // tells me if its a text file, html file, image, etc
})
.pipe(fs.createWriteStream('./future.jpg')); // uses the data and puts the data into a new file.
