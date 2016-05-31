"use strict"
const express = require('express'),
      app = express(),
      useragent = require('useragent'),
      portNumber = process.env.PORT || process.argv[2] || 8080;

app
.get('/api/whoami', function (request, response) {
  let agent = useragent.parse(request.headers['user-agent']);
  let userInformation = {};
  userInformation["ipaddress"] = request.headers['x-forwarded-for'] || request.ip;
  userInformation["language"] = request.acceptsLanguages()[0];
  userInformation["software"] = agent.os.toString();
  response.json(userInformation);
  response.end();
})
.get('*', function (request, response) {
  response.status(400);
  response.end("Please visit " + request.hostname + "/api/whoami for header information.");
})

app.listen(portNumber);