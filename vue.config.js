module.exports = {
  pages: {
    index: {
      entry: "./src/pages/home/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Home - Eventi",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    spots: {
      entry: "./src/pages/spots/main.js",
      template: "public/index.html",
      filename: "spots.html",
      title: "Spots",
      chunks: ["chunk-vendors", "chunk-common", "spots"],
    },
  },
  transpileDependencies: [
    'vuetify'
  ]
}
