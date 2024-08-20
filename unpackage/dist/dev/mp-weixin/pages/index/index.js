"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  _easycom_uni_notice_bar2();
}
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
if (!Math) {
  (navBar + _easycom_uni_notice_bar)();
}
const navBar = () => "../../components/navBar.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const app = getApp();
    const swiperList = common_vendor.ref([]);
    const getSwiperData = () => common_vendor.index.request({
      url: "http://159.75.169.224:7300/pz/Index/index",
      data: {
        aid: 1
      },
      success: ({ data }) => {
        var _a;
        console.log(data);
        swiperList.value = (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.slides;
        console.log(swiperList.value);
      }
    });
    common_vendor.onLoad(() => {
      app.globalData.utils.getUserInfo();
      getSwiperData();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "首页"
        }),
        b: common_vendor.p({
          showIcon: true,
          showClose: true,
          single: true,
          text: '点击右上角添加到"我的小程序",方便下次找到!'
        }),
        c: common_vendor.f(swiperList.value, (item, index, i0) => {
          return {
            a: item.pic_image_url,
            b: index
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
