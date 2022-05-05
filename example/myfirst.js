
var http = require('http');
const chalk = require('chalk')

http.createServer(function (req, res) {
    var hello = "hello world !"
    res.write(chalk.green(hello));
    res.end();
  }).listen(8080);
