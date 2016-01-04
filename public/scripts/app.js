const Index = require("views/Index.js"),
	Router = require("config/routes/Router");

Index.render();

class App {
	constructor() {
		this.router = Router,
    this.backendUrl = "http://localhost:8080/api/v1/"
	}
}

module.exports = new App();
