const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        tilmelding: resolve(__dirname, "tilmelding.html"),
        dansetimer: resolve(__dirname, "dansetimer.html"),
        book: resolve(__dirname, "book.html"),
        about: resolve(__dirname, "about.html"),
        kontakt: resolve(__dirname, "kontakt.html"),
      },
    },
  },
};
