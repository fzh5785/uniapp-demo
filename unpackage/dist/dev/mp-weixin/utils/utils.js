"use strict";
const common_vendor = require("../common/vendor.js");
class Utils {
  getUserInfo() {
    common_vendor.index.login({
      success: (res) => {
        common_vendor.index.request({
          url: "http://159.75.169.224:7300/pz/auth/wxLogin",
          data: {
            code: (res == null ? void 0 : res.code) || "aaa"
          },
          success: (result) => {
          }
        });
      }
    });
  }
}
const utils = new Utils();
exports.utils = utils;
