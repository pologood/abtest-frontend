const Index = require("views/Index.js"),
	Router = require("config/routes/Router");

Index.render();

class App {
	constructor() {
		this.router = Router;
	}
}

module.exports = new App();
