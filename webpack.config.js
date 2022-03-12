module.exports = {
	mode: "development",
	resolve: {
		fallback: {
			stream: require.resolve("stream-browserify")
		}
	},
	performance: false
}