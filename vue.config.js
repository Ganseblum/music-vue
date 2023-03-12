const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
// const AutoImport = require("unplugin-auto-import/webpack");
// const Components = require("unplugin-vue-components/webpack");
// const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {
      //配置跨域
      "/api": {
        // http://corp.boyaokj.cn
        // http://114.116.243.208:666
        // /www.smewf.com
        // target: 'http://corp.boyaokj.cn/api',//这里后台的地址模拟的;应该填写你们真实的后台接口
        target: "http://localhost:3000/", //这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true, //允许跨域
        pathRewrite: {
          "^/api": "", //请求的时候使用这个api就可以
        },
      },
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [],
    },
  },
};
