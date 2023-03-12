module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 16, //根目录fontsize值
      propList: ["*"], //需要转换的 * 全部  更多参数看文档 https://www.npmjs.com/package/postcss-pxtorem  滑动到options这一项
    },
  },
};
