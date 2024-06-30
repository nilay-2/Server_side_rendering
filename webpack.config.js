const path = require("path");

module.exports = {
  entry: "./public/ts/main.ts", // Adjust this if your main entry point is different
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./public/js"), // Output into the build folder
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  watch: true,
};
