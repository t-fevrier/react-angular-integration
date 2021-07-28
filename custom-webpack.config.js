console.log("custom webpack config loaded");

module.exports = {
  resolve: {
    fallback: {
      os: require.resolve("os-browserify/browser"),
    },
  },
};
