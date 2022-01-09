module.exports = {
    publicPath: process.env.NODE_ENV === 'production'? '': '/',
    outputDir: process.env.NODE_ENV === 'production'? 'dist': 'devDist',//判断如果是production是生产环境就dist 如果不是devDist
    lintOnSave:false,
    css: {
        loaderOptions: {
          scss: {
            prependData: `@import "./src/styles/main.scss";`
          },
        }
      }
  }