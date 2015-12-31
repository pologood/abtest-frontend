module.exports = function (defaultRenderer) {
	return {
		"/":                    defaultRenderer.bind(null, "features/Features.js"),
		"features":             defaultRenderer.bind(null, "features/Features.js"),
		"features/create":      defaultRenderer.bind(null, "features/Create.js")
	};
};