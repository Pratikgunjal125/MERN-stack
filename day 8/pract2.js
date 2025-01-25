// server.js
var http = require('http'); // CommonJS module system
var fs = require('fs');
var os = require('os');

// OS Information Logs
console.log("Free Memory:", os.freemem());
console.log("CPU Info:", os.cpus());
console.log("Hostname:", os.hostname());
console.log("User Info:", os.userInfo());
console.log("OS Version:", os.version());

// Example logs
console.log("Normal log");
console.warn("Danger");
console.assert(true, "Transaction Completed");
console.assert(false, "Transaction failed");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Serve content from notes.txt for the root URL
    fs.readFile("notes.txt", "utf-8", (error, data) => {
      if (error) {
        // Handle file read error
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end("Error reading file: " + error.message);
      } else {
        // Send file content
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  } else if (req.url === "/data") {
    // Serve JSON data for /data endpoint
    const data = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "",
      rating: {
        rate: 3.9,
        count: 120,
      },
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else {
    // Handle undefined routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end("Page not found");
  }
});

// Start the HTTP server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on http://127.0.0.1:3000');
});
