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
        var _a, _b, _c;
        console.log(data);
        swiperList.value = (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.slides;
        navList.value = (_b = data == null ? void 0 : data.data) == null ? void 0 : _b.nav2s;
        navList2.value = (_c = data == null ? void 0 : data.data) == null ? void 0 : _c.navs;
      }
    });
    const navList = common_vendor.ref([]);
    const handlerNavList = (e) => {
      const nav = common_vendor.toRaw(navList.value)[e.currentTarget.id];
      if (nav.stype === "1") {
        common_vendor.index.navigateTo({
          url: nav == null ? void 0 : nav.stype_link
        });
      }
    };
    const navList2 = common_vendor.ref([]);
    const handlerNavList2 = (e) => {
      const nav = common_vendor.toRaw(navList2.value)[e.currentTarget.id];
      console.log(nav);
      if (nav.stype === "1") {
        common_vendor.index.navigateTo({
          url: nav == null ? void 0 : nav.stype_link
        });
      }
    };
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
        }),
        d: common_vendor.f(navList.value, (item, index, i0) => {
          return {
            a: item.pic_image_url,
            b: common_vendor.o(handlerNavList, index),
            c: index,
            d: index
          };
        }),
        e: common_vendor.f(navList2.value, (item, index, i0) => {
          return {
            a: item.pic_image_url,
            b: common_vendor.t(item.title),
            c: index,
            d: common_vendor.o(handlerNavList2, index),
            e: index
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
