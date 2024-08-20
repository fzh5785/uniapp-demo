"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref(0);
    const list = common_vendor.ref(["a", "b", "c"]);
    common_vendor.onReady(() => {
      console.log(title.value);
    });
    common_vendor.onLoad(() => {
      console.log(list.value);
    });
    const add = () => {
      title.value++;
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(title.value),
        c: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        d: common_vendor.o(add)
      };
    };
  }
};
wx.createPage(_sfc_main);
