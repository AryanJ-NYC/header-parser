"use strict"
const express = require('express'),
      app = express();

let portNumber = process.env.PORT || process.argv[2] || 8080;

app
.get('/api/whoami', function (request, response) {
  let userInformation = {};
  userInformation["ipaddress"] = request.ip;
  userInformation["language"] = request.acceptsLanguages()[0];
  userInformation["software"] = request.headers["user-agent"];
  response.json(userInformation);
})

app.listen(portNumber);