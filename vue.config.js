const PATH = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        includePaths: [ PATH.resolve(__dirname, "node_modules") ]
      }
    }
  }
};
