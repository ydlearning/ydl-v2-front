module.exports = {
    assetsDir: "src/assets",
    publicPath: "ydl-v2-front/",
    outputDir: "./docs",
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,

    css: {
        loaderOptions: {
            sass: {
                data: `@import "~@/sass/main.sass"`
            }
        }
    },

    lintOnSave: undefined,

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: false
      }
    }
};
