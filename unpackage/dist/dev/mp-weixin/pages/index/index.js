"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  navBar();
}
const navBar = () => "../../components/navBar.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "首页"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
