(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/movies/video-list"],{

/***/ "../../../../../../projects/test/uni-app/mtime/main.js?{\"page\":\"pages%2Fmovies%2Fvideo-list\"}":
/*!*************************************************************************************!*\
  !*** D:/projects/test/uni-app/mtime/main.js?{"page":"pages%2Fmovies%2Fvideo-list"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../../../projects/test/uni-app/mtime/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _videoList = _interopRequireDefault(__webpack_require__(/*! ./pages/movies/video-list.vue */ "../../../../../../projects/test/uni-app/mtime/pages/movies/video-list.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_videoList.default));

/***/ }),

/***/ "../../../../../../projects/test/uni-app/mtime/pages/movies/video-list.vue":
/*!******************************************************************!*\
  !*** D:/projects/test/uni-app/mtime/pages/movies/video-list.vue ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _video_list_vue_vue_type_template_id_33b2fa6b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-list.vue?vue&type=template&id=33b2fa6b& */ "../../../../../../projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=template&id=33b2fa6b&");
/* harmony import */ var _video_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-list.vue?vue&type=script&lang=js& */ "../../../../../../projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _video_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-list.vue?vue&type=style&index=0&lang=scss& */ "../../../../../../projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _video_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _video_list_vue_vue_type_template_id_33b2fa6b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _video_list_vue_vue_type_template_id_33b2fa6b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "projects/test/uni-app/mtime/pages/movies/video-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../../projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** D:/projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_video_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./video-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=script&lang=js&");
/* harmony import */ var _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_video_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_video_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_video_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_video_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_video_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************!*\
  !*** D:/projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_video_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./video-list.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_video_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_video_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_video_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_video_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_video_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=template&id=33b2fa6b&":
/*!*************************************************************************************************!*\
  !*** D:/projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=template&id=33b2fa6b& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_video_list_vue_vue_type_template_id_33b2fa6b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./video-list.vue?vue&type=template&id=33b2fa6b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=template&id=33b2fa6b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_video_list_vue_vue_type_template_id_33b2fa6b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_video_list_vue_vue_type_template_id_33b2fa6b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





















var _util = _interopRequireDefault(__webpack_require__(/*! ../../common/util */ "../../../../../../projects/test/uni-app/mtime/common/util.js"));
var _navigator = _interopRequireDefault(__webpack_require__(/*! ../../components/navigator */ "../../../../../../projects/test/uni-app/mtime/components/navigator.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  data: function data() {
    return {
      isShowBack: true,
      movieId: '',
      cityCode: '',
      titleText: '',
      showStar: true,
      showShare: true,
      movieDetail: '',
      releaseDate: {},
      showAllStory: 'story-txt',
      arrowDirection: '',
      buyBtnText: '',
      comment: {
        mini: {
          list: [] },

        plus: {
          total: 0 } },


      pageIndex: 1,
      videoList: [] };

  },
  onLoad: function onLoad(option) {
    var self = this;
    self.titleText = option.movieName;
    self.movieId = option.movieId;
  },
  onReady: function onReady() {
    var self = this;
    _util.default.request({
      url: 'https://api-m.mtime.cn/Movie/Video.api?pageIndex=' + self.pageIndex + '&movieId=' + self.movieId }).
    then(function (res) {
      self.videoList = res.videoList;
    });
  },
  components: {
    navigate: _navigator.default },

  methods: {
    videoEnd: function videoEnd() {
      var self = this;

    },
    videoPlay: function videoPlay() {
      var self = this;

    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/vue-loader/lib??vue-loader-options!D:/projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=template&id=33b2fa6b&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/projects/test/uni-app/mtime/pages/movies/video-list.vue?vue&type=template&id=33b2fa6b& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: "content" },
    [
      _c("navigate", {
        attrs: {
          titleText: _vm.titleText,
          showStar: _vm.showStar,
          showShare: _vm.showShare,
          mpcomid: "7fac7d0d-0"
        }
      }),
      _c("view", { staticClass: "main" }, [
        _c(
          "view",
          { staticClass: "video-wrap flex-flow-column" },
          _vm._l(_vm.videoList, function(item, index) {
            return _c("view", { key: index, staticClass: "video-item" }, [
              _c("view", { staticClass: "video-main" }, [
                _c("video", {
                  attrs: {
                    src: item.hightUrl,
                    controls: "",
                    poster: item.image,
                    objectFit: "cover",
                    direction: "90",
                    eventid: "7fac7d0d-0-" + index
                  },
                  on: { ended: _vm.videoEnd, play: _vm.videoPlay }
                })
              ]),
              _c("view", { staticClass: "video-title flex-flow-row" }, [
                _c("text", {}, [_vm._v(_vm._s(item.title))]),
                _vm._m(0, true)
              ])
            ])
          })
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "video-opt" }, [
      _c("text", { staticClass: "iconfont icon-comment" }),
      _c("text", { staticClass: "iconfont icon-zan" })
    ])
  }
]
render._withStripped = true



/***/ })

},[["../../../../../../projects/test/uni-app/mtime/main.js?{\"page\":\"pages%2Fmovies%2Fvideo-list\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/movies/video-list.js.map