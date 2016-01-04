module.exports = function (defaultRenderer) {
	return {
		"/":                    defaultRenderer.bind(null, "features/Features.jsx"),
		"features":             defaultRenderer.bind(null, "features/Features.jsx"),
		"features/create":      defaultRenderer.bind(null, "features/Create.jsx")
	};
};