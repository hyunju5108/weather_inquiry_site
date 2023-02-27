 //const { defineConfig } = require("@vue/cli-service");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

//module.exports = defineConfig({
const config = {
  //transpileDependencies: true,
  // 개발 서버 설정
  devServer: {
    // 프록시 설정
    proxy: {
      // 프록시 요청을 보낼 api의 시작 부분
      "/pushwidgetapi": {
        // 프록시 요청을 보낼 서버의 주소
        target: "https://pushappintro.kma.go.kr/",
        changeOrigin: true,
      },
      "/v1": {
        // 프록시 요청을 보낼 서버의 주소
        target: "https://openapi.naver.com",
      },
      "/w": {
        target: "https://www.weather.go.kr/",
        changeOrigin: true
      },
      "/renew2021": {
        target: "https://www.weather.go.kr/pushwidgetapi/",
        changeOrigin: true
      },
      "/zone": {
        target: "https://www.weather.go.kr/pushwidgetapi/rest/",
        changeOrigin: true
      }
      //https://www.weather.go.kr/pushwidgetapi/rest/zone/dong.do?type=WIDE
      // "/rest": {
      //   target: "https://www.weather.go.kr/pushwidgetapi/renew2021/",
      //   changeOrigin: true
      // }
      // https://www.weather.go.kr/w/renew2021/rest/main/place-search.do?query=%EA%B8%B0%EC%83%81%EC%B2%AD&start=1&src=A4
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        // 전역으로 사용할 라이브러리 세팅
        isMorpheus: [
          path.resolve(path.join(__dirname, "src/common/morpheus.native")),
          "isMorpheus",
        ],
        $: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        jQuery: "jquery",
        d3: "d3",
      }),
      new MomentLocalesPlugin({
        localesToKeep: ["ko"],
      }),
    ],
  },
  //});
};

module.exports = config;