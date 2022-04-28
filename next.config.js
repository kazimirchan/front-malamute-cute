const nextTranslate = require("next-translate")
const path = require("path")

module.exports = nextTranslate({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
})