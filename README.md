# Let's build a server!
In this workshop we'll build our own simple server and serve our web page using it. We'll use Node.js to code the server and basic web technologies in the web page.

## Project setup
* We recommend you use [Chrome](https://www.google.com/chrome/browser/desktop/index.html) browser in this workshop. We'll demo some of the functionality of the browser tools, but you can use any browser you want in case you don't want to install Chrome.
* Install [Node.js](https://nodejs.org/en/): download the installation package from the website and follow the installation instructions.
* Download the source code from this repository to your computer
* Open a terminal and navigate to the folder where you put the source code and run the following command:
```
node server.js
```
you should see a output in your terminal saying "Server listening on address: http://localhost:8080".
* You're now ready to start the workshop!

# Task-1
First task is to write a response to the client. We're receiving a request in function ```requestHandler```.
You can see from the terminal what happens every time you refresh the webpage, you should see a line like
"Received request for URL ..." this mean the client is asking for a page from us.

Take a look at the function ```writeResponse```, here we can implement writing the response to the client.
We already have some code there to write the headers in the response, but we actually want to write the html in
the file 'public/index.html' every time we get a request.

In order to write a file content to the response,
we need to use the node file system library called 'fs'. There's a function called ```readFile``` which takes
the file name and a callback function which is called after file reading is ready.
The callback takes as a parameter two things: a possible ```err``` object in case something went wrong,
or the content of the file that was read in an object. We can just write the ```html``` object to the response
in case there was no error.

Remember to call the ```end``` function to close the response object properly.

In ```writeResponse``` function:
```
fs.readFile('public/index.html', function(err, html) {
  if (err) {
      response.write("Something went wrong!");
  } else {
      response.write(html);
  }
  response.end();
});
```
Save the changes and try re-loading the web page in your browser, you should now see the page as the HTML describes
in the 'index.html'. This means we're writing the content of our 'index.html' file to the HTTP response and
the browser is able to render it to the user.
