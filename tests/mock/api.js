var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

var mock = new MockAdapter(axios);

mock.onGet(API_URL+"/api/greet").reply(200, {
  greetMessage: "this is a mock greeting"
});
