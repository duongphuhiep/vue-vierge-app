var webpack = require("webpack");
module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [
          new webpack.DefinePlugin({
            API_URL: JSON.stringify("./api/index.php")
          })
        ]
      };
    } else {
      return {
        plugins: [
          new webpack.DefinePlugin({
            API_URL: JSON.stringify("http://localhost/api/index.php"),
            DEGUG_MODE: "true"
          })
        ]
      };
    }
  },

  baseUrl: "./"
};
