import Index from "./views/Index.jsx";
import Router from "./config/routes/Router";

Index.render();

class App {
	constructor() {
		this.router = Router;
	}
}

module.exports = new App();
