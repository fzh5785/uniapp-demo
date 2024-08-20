"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  __name: "navBar",
  props: {
    title: String
  },
  setup(__props) {
    const statusHeight = common_vendor.ref(0);
    const contentHeight = common_vendor.ref(0);
    const pages = common_vendor.ref(getCurrentPages().length);
    const handlerBackHome = () => {
      if (pages.value > 1) {
        common_vendor.index.navigateBack();
      } else {
        common_vendor.index.switchTab({
          url: "/pages/index/index"
        });
      }
    };
    const setNavSize = () => {
      const { system, statusBarHeight } = common_vendor.index.getSystemInfoSync();
      statusHeight.value = statusBarHeight * 2;
      if (system.indexOf("iOS") >= 0) {
        contentHeight.value = 88;
      } else {
        contentHeight.value = 96;
      }
    };
    common_vendor.onBeforeMount(() => {
      setNavSize();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.s("height:" + statusHeight.value + "rpx")
      }, common_vendor.e({
        b: pages.value > 1
      }, pages.value > 1 ? {
        c: common_assets._imports_0
      } : {
        d: common_assets._imports_1
      }, {
        e: common_vendor.o(handlerBackHome)
      }), {
        f: __props.title
      }, __props.title ? {
        g: common_vendor.t(__props.title)
      } : {}, {
        h: common_vendor.s("height:" + contentHeight.value + "rpx")
      });
    };
  }
};
wx.createComponent(_sfc_main);
