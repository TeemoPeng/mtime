(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/movies/movie-detail"],{

/***/ "../../../../../../projects/test/uni-app/mtime/main.js?{\"page\":\"pages%2Fmovies%2Fmovie-detail\"}":
/*!***************************************************************************************!*\
  !*** D:/projects/test/uni-app/mtime/main.js?{"page":"pages%2Fmovies%2Fmovie-detail"} ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../../../projects/test/uni-app/mtime/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _movieDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/movies/movie-detail.vue */ "../../../../../../projects/test/uni-app/mtime/pages/movies/movie-detail.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_movieDetail.default));

/***/ }),

/***/ "../../../../../../projects/test/uni-app/mtime/pages/movies/movie-detail.vue":
/*!********************************************************************!*\
  !*** D:/projects/test/uni-app/mtime/pages/movies/movie-detail.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _movie_detail_vue_vue_type_template_id_7a041989___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-detail.vue?vue&type=template&id=7a041989& */ "../../../../../../projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=template&id=7a041989&");
/* harmony import */ var _movie_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-detail.vue?vue&type=script&lang=js& */ "../../../../../../projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _movie_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _movie_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _movie_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-detail.vue?vue&type=style&index=0&lang=scss& */ "../../../../../../projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _movie_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _movie_detail_vue_vue_type_template_id_7a041989___WEBPACK_IMPORTED_MODULE_0__["render"],
  _movie_detail_vue_vue_type_template_id_7a041989___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "projects/test/uni-app/mtime/pages/movies/movie-detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../../projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** D:/projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./movie-detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=script&lang=js&");
/* harmony import */ var _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************!*\
  !*** D:/projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./movie-detail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=template&id=7a041989&":
/*!***************************************************************************************************!*\
  !*** D:/projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=template&id=7a041989& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_detail_vue_vue_type_template_id_7a041989___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../tools/HBuilderX/HBuilderX.1.2.1.20181126.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./movie-detail.vue?vue&type=template&id=7a041989& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=template&id=7a041989&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_detail_vue_vue_type_template_id_7a041989___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_detail_vue_vue_type_template_id_7a041989___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





















































































































































































var _util = _interopRequireDefault(__webpack_require__(/*! ../../common/util */ "../../../../../../projects/test/uni-app/mtime/common/util.js"));
var _cityList = _interopRequireDefault(__webpack_require__(/*! ../../common/cityList */ "../../../../../../projects/test/uni-app/mtime/common/cityList.js"));
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


      pageIndex: 1 };

  },
  onLoad: function onLoad(option) {
    var self = this;
    self.movieId = option.movieId;
    self.cityCode = option.cityCode;

  },
  onReady: function onReady() {
    var self = this;
    self.init();
  },
  onPullDownRefresh: function onPullDownRefresh() {
    var self = this;
    self.onPullDownRefresh();
  },
  methods: {
    init: function init() {
      var self = this;
      return new Promise(function (resolve, rejected) {
        _util.default.request({
          url: 'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=' + self.cityCode + '&movieId=' + self.movieId }).
        then(function (res) {
          self.titleText = res.data.basic.name;
          self.movieDetail = res.data;
          var year = self.movieDetail.basic.releaseDate.substring(0, 4),
          month = self.movieDetail.basic.releaseDate.substring(4, 6),
          day = self.movieDetail.basic.releaseDate.substring(6, 8);
          self.releaseDate = year + '年' + month + '月' + day + '日';

          var currentDate = new Date().getTime();
          var releaseDate = new Date(year + '-' + month + '-' + day).getTime();

          if (currentDate >= releaseDate) {
            self.buyBtnText = '在线选座';
          } else {
            self.buyBtnText = '预售';
          }

          //获取评论                
          _util.default.request({
            url: 'https://ticket-api-m.mtime.cn/movie/hotComment.api?movieId=' + self.movieDetail.basic.movieId }).
          then(function (res) {
            self.comment = res.data;
            self.comment.mini.list.forEach(function (item, index) {
              item.commentDate = _util.default.formatDate('Y-m-d H:i:s', item.commentDate);
            });
            resolve();
          }).catch(function (rej) {
            rejected();
          });
        });
      });
    },
    buyTicket: function buyTicket() {
      var self = this;
      uni.showToast({
        title: '该功能尚未开发',
        icon: 'none' });

    },
    onPullDownRefresh: function onPullDownRefresh() {
      var self = this;
      self.init().then(function (res) {
        uni.stopPullDownRefresh();
      });
    },
    showMore: function showMore() {
      var self = this;
      if (self.showAllStory == '') {
        self.showAllStory = 'story-txt';
        self.arrowDirection = '';
      } else {
        self.showAllStory = '';
        self.arrowDirection = 'arrow-up';
      }
    },
    getMoreMiniComments: function getMoreMiniComments(pageIndex) {
      //获取更多短评
      var self = this;
      _util.default.request({
        url: 'https://api-m.mtime.cn/Showtime/HotMovieComments.api?movieId=' + self.movieDetail.basic.movieId + '&pageIndex=' + self.pageIndex }).
      then(function (res) {
        if (self.pageIndex == 1) {
          console.log('list:', res.data.cts);
          self.comment.mini.list = res.data.cts;
        }
        self.pageIndex++;
      });
    },
    goMiniCommentList: function goMiniCommentList() {
      //所有短评
      var self = this;
      uni.navigateTo({
        url: '/pages/movies/mini-comment?movieId=' + self.movieDetail.basic.movieId });

    },
    goVideoList: function goVideoList() {
      //视频、预告片列表
      var self = this;
      uni.navigateTo({
        url: '/pages/movies/video-list?movieName=' + self.movieDetail.basic.name + '&movieId=' + self.movieDetail.basic.movieId });

    },
    goImgList: function goImgList() {
      //图片列表
      var self = this;
      uni.navigateTo({
        url: '/pages/movies/img-list?movieName=' + self.movieDetail.basic.name + '&movieId=' + self.movieDetail.basic.movieId });

    } },

  components: {
    navigate: _navigator.default } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/vue-loader/lib??vue-loader-options!D:/projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=template&id=7a041989&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/projects/test/uni-app/mtime/pages/movies/movie-detail.vue?vue&type=template&id=7a041989& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
          mpcomid: "3fa056aa-0"
        }
      }),
      _c("view", { staticClass: "main" }, [
        _c("view", { staticClass: "main-content" }, [
          _vm.movieDetail.basic
            ? _c("view", { staticClass: "detail-bg" }, [
                _c("image", {
                  staticClass: "detail-bg-img",
                  attrs: { src: _vm.movieDetail.basic.img, mode: "scaleToFill" }
                })
              ])
            : _vm._e(),
          _vm.movieDetail.basic
            ? _c("view", { staticClass: "movie-wrap" }, [
                _c("view", { staticClass: "movie-wrap-inner" }, [
                  _c("view", { staticClass: "movie-items info" }, [
                    _c("view", { staticClass: "movie-post" }, [
                      _c("image", {
                        staticClass: "movie-post-img",
                        attrs: {
                          src: _vm.movieDetail.basic.img,
                          mode: "aspectFill"
                        }
                      })
                    ]),
                    _c("view", { staticClass: "movie-info" }, [
                      _c("text", {}, [
                        _vm._v(_vm._s(_vm.movieDetail.basic.name))
                      ]),
                      _c("text", { staticClass: "namEn" }, [
                        _vm._v(_vm._s(_vm.movieDetail.basic.nameEn))
                      ]),
                      _c("view", { staticClass: "movie-brief" }, [
                        _c("text", {}, [
                          _vm._v(_vm._s(_vm.movieDetail.basic.mins))
                        ]),
                        _c("text", {}, [
                          _vm._v(_vm._s(_vm.movieDetail.basic.type.join("/")))
                        ]),
                        _c("text", {}, [
                          _vm._v(_vm._s(_vm.releaseDate) + "中国上映")
                        ])
                      ])
                    ])
                  ]),
                  _c("view", { staticClass: "movie-items story" }, [
                    _c("text", { class: _vm.showAllStory }, [
                      _vm._v("剧情：" + _vm._s(_vm.movieDetail.basic.story))
                    ]),
                    _c("text", {
                      class: _vm.arrowDirection + " iconfont icon-down",
                      attrs: { eventid: "3fa056aa-0" },
                      on: { tap: _vm.showMore }
                    })
                  ]),
                  _c("view", { staticClass: "movie-items item-gap" }),
                  _c("view", { staticClass: "movie-items" }, [
                    _c("view", { staticClass: "movie-workers" }, [
                      _c(
                        "view",
                        { staticClass: "movie-director actors-item" },
                        [
                          _c("text", { staticClass: "actors-title" }, [
                            _vm._v("导演")
                          ]),
                          _c("view", { staticClass: "actor-img" }, [
                            _c("image", {
                              staticClass: "actor-img-wrap",
                              attrs: {
                                src: _vm.movieDetail.basic.director.img,
                                mode: "aspectFill"
                              }
                            })
                          ]),
                          _c(
                            "text",
                            { staticClass: "actor-name-cn actor-name" },
                            [
                              _vm._v(
                                _vm._s(_vm.movieDetail.basic.director.name)
                              )
                            ]
                          ),
                          _c(
                            "text",
                            { staticClass: "actor-name-en actor-name" },
                            [
                              _vm._v(
                                _vm._s(_vm.movieDetail.basic.director.nameEn)
                              )
                            ]
                          )
                        ]
                      ),
                      _c("view", { staticClass: "movie-actors actors-item" }, [
                        _c("text", { staticClass: "actors-title" }, [
                          _vm._v("主要演员")
                        ]),
                        _c(
                          "view",
                          { staticClass: "actors-wrap-inner" },
                          _vm._l(_vm.movieDetail.basic.actors, function(
                            item,
                            index
                          ) {
                            return index <= 4
                              ? _c(
                                  "view",
                                  { key: index, staticClass: "actors-list" },
                                  [
                                    _c("view", { staticClass: "actor-img" }, [
                                      _c("image", {
                                        staticClass: "actor-img-wrap",
                                        attrs: {
                                          src: item.img,
                                          mode: "aspectFill"
                                        }
                                      })
                                    ]),
                                    _c(
                                      "text",
                                      {
                                        staticClass: "actor-name-cn actor-name"
                                      },
                                      [_vm._v(_vm._s(item.name))]
                                    ),
                                    _c(
                                      "text",
                                      {
                                        staticClass: "actor-name-en actor-name"
                                      },
                                      [_vm._v(_vm._s(item.nameEn))]
                                    ),
                                    _c(
                                      "text",
                                      {
                                        staticClass: "actor-name-en actor-name"
                                      },
                                      [_vm._v("饰：" + _vm._s(item.roleName))]
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        )
                      ])
                    ]),
                    _vm._m(0)
                  ]),
                  _c("view", { staticClass: "movie-items item-gap" }),
                  _c("view", { staticClass: "movie-items movie-video-img" }, [
                    _c("view", { staticClass: "movie-video-wrap" }, [
                      _c("view", { staticClass: "item-title" }, [
                        _vm._m(1),
                        _c("view", [
                          _c("text", {}, [
                            _vm._v(_vm._s(_vm.movieDetail.basic.video.count))
                          ]),
                          _c("text", {
                            staticClass: "iconfont icon-arrow-right"
                          })
                        ])
                      ]),
                      _c(
                        "view",
                        {
                          staticClass: "item-content",
                          attrs: { eventid: "3fa056aa-1" },
                          on: { tap: _vm.goVideoList }
                        },
                        [
                          _c("image", {
                            staticClass: "video-wrap",
                            attrs: { src: _vm.movieDetail.basic.video.img }
                          }),
                          _c("text", { staticClass: "iconfont icon-play" })
                        ]
                      )
                    ]),
                    _c("view", { staticClass: "movie-img-wrap" }, [
                      _c("view", { staticClass: "item-title" }, [
                        _vm._m(2),
                        _c("view", [
                          _c("text", {}, [
                            _vm._v(_vm._s(_vm.movieDetail.basic.stageImg.count))
                          ]),
                          _c("text", {
                            staticClass: "iconfont icon-arrow-right"
                          })
                        ])
                      ]),
                      _c(
                        "view",
                        {
                          staticClass: "item-content",
                          attrs: { eventid: "3fa056aa-2" },
                          on: { tap: _vm.goImgList }
                        },
                        [
                          _c("image", {
                            staticClass: "img-wrap",
                            attrs: {
                              src:
                                _vm.movieDetail.basic.stageImg.list[0].imgUrl,
                              mode: "aspectFill"
                            }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm.movieDetail.boxOffice.todayBox > 0
                    ? _c("view", { staticClass: "movie-items item-gap" })
                    : _vm._e(),
                  _vm.movieDetail.boxOffice.todayBox > 0
                    ? _c("view", { staticClass: "movie-items" }, [
                        _c("view", { staticClass: "office-item" }, [
                          _c("text", [
                            _vm._v(_vm._s(_vm.movieDetail.boxOffice.ranking))
                          ]),
                          _vm._m(3)
                        ]),
                        _c("view", { staticClass: "office-item" }, [
                          _c("text", [
                            _vm._v(
                              _vm._s(_vm.movieDetail.boxOffice.todayBoxDes)
                            )
                          ]),
                          _vm._m(4)
                        ]),
                        _c("view", { staticClass: "office-item" }, [
                          _c("text", [
                            _vm._v(
                              _vm._s(_vm.movieDetail.boxOffice.totalBoxDes)
                            )
                          ]),
                          _vm._m(5)
                        ])
                      ])
                    : _vm._e(),
                  _vm.comment.mini.list.length > 0
                    ? _c("view", { staticClass: "movie-items item-gap" })
                    : _vm._e(),
                  _vm.comment.mini.list.length > 0
                    ? _c(
                        "view",
                        { staticClass: "movie-items movie-short-comment" },
                        [
                          _c("view", { staticClass: "item-title" }, [
                            _vm._m(6),
                            _c("view", [
                              _c(
                                "text",
                                {
                                  attrs: { eventid: "3fa056aa-3" },
                                  on: { tap: _vm.goMiniCommentList }
                                },
                                [_vm._v("全部")]
                              ),
                              _c("text", {
                                staticClass: "iconfont icon-arrow-right"
                              })
                            ])
                          ]),
                          _c(
                            "view",
                            { staticClass: "comment-content" },
                            [
                              _vm._l(_vm.comment.mini.list, function(
                                item,
                                index
                              ) {
                                return _vm.comment
                                  ? _c(
                                      "view",
                                      {
                                        key: index,
                                        staticClass: "comment-list"
                                      },
                                      [
                                        _c(
                                          "view",
                                          { staticClass: "user-img" },
                                          [
                                            _c("image", {
                                              staticClass: "user-head-img",
                                              attrs: { src: item.headImg }
                                            })
                                          ]
                                        ),
                                        _c(
                                          "view",
                                          { staticClass: "comment-info" },
                                          [
                                            _c(
                                              "view",
                                              { staticClass: "info-list" },
                                              [
                                                _c(
                                                  "text",
                                                  { staticClass: "color-gray" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(item.nickname)
                                                    )
                                                  ]
                                                ),
                                                item.rating > 0
                                                  ? _c(
                                                      "text",
                                                      {
                                                        staticClass:
                                                          "color-green"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "评 " +
                                                            _vm._s(
                                                              item.rating %
                                                              1 ==
                                                              0
                                                                ? item.rating +
                                                                  ".0"
                                                                : item.rating
                                                            )
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            ),
                                            _c(
                                              "view",
                                              { staticClass: "info-list" },
                                              [_vm._v(_vm._s(item.content))]
                                            ),
                                            _c(
                                              "view",
                                              { staticClass: "info-list" },
                                              [
                                                _c(
                                                  "view",
                                                  {
                                                    staticClass:
                                                      "color-gray comment-time"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(item.commentDate)
                                                    )
                                                  ]
                                                ),
                                                _c(
                                                  "view",
                                                  {
                                                    staticClass:
                                                      "color-gray comment-opt"
                                                  },
                                                  [
                                                    _c("view", {}, [
                                                      _c("text", {
                                                        staticClass:
                                                          "iconfont icon-comment"
                                                      }),
                                                      _c("text", {}, [
                                                        _vm._v(
                                                          _vm._s(
                                                            item.replyCount > 0
                                                              ? item.replyCount
                                                              : ""
                                                          )
                                                        )
                                                      ])
                                                    ]),
                                                    _c("view", {}, [
                                                      _c("text", {
                                                        staticClass:
                                                          "iconfont icon-zan"
                                                      }),
                                                      _c("text", {}, [
                                                        _vm._v(
                                                          _vm._s(
                                                            item.praiseCount > 0
                                                              ? item.praiseCount
                                                              : ""
                                                          )
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              }),
                              _vm.comment.mini.total > 0
                                ? _c("view", { staticClass: "more-comment" }, [
                                    _c(
                                      "text",
                                      {
                                        staticClass: "color-green",
                                        attrs: { eventid: "3fa056aa-4" },
                                        on: { tap: _vm.goMiniCommentList }
                                      },
                                      [
                                        _vm._v(
                                          "查看更多" +
                                            _vm._s(_vm.comment.mini.total) +
                                            "条评论"
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e()
                            ],
                            2
                          )
                        ]
                      )
                    : _vm._e(),
                  _c("view", { staticClass: "movie-items item-gap" }),
                  _vm.comment.plus.total > 0
                    ? _c(
                        "view",
                        { staticClass: "movie-items movie-long-comment" },
                        [
                          _vm._m(7),
                          _c("view", { staticClass: "item-long-comment" }, [
                            _c("view", { staticClass: "long-content" }, [
                              _c("text", {}, [
                                _vm._v(_vm._s(_vm.comment.plus.list[0].title))
                              ])
                            ]),
                            _c(
                              "view",
                              {
                                staticClass:
                                  "flex-flow-row long-list color-gray"
                              },
                              [
                                _c("view", {}, [
                                  _c("image", {
                                    staticClass: "user-head-img user-head-img2",
                                    attrs: {
                                      src: _vm.comment.plus.list[0].headImg
                                    }
                                  })
                                ]),
                                _c("text", {}, [
                                  _vm._v(
                                    _vm._s(_vm.comment.plus.list[0].nickname)
                                  )
                                ]),
                                _c("text", {}, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.comment.plus.list[0].replyCount
                                    ) + "评论"
                                  )
                                ])
                              ]
                            )
                          ])
                        ]
                      )
                    : _vm._e()
                ])
              ])
            : _vm._e()
        ]),
        _c("view", { staticClass: "main-footer" }, [
          _c(
            "view",
            {
              staticClass: "foot-like foot-txt",
              attrs: { eventid: "3fa056aa-5" },
              on: { tap: _vm.buyTicket }
            },
            [
              _c("text", { staticClass: "iconfont icon-like" }),
              _c("text", {}, [_vm._v("想看")])
            ]
          ),
          _c(
            "view",
            {
              staticClass: "foot-comment foot-txt",
              attrs: { eventid: "3fa056aa-6" },
              on: { tap: _vm.buyTicket }
            },
            [
              _c("text", { staticClass: "iconfont icon-edit" }),
              _c("text", {}, [_vm._v("评论/评分")])
            ]
          ),
          _c("view", { staticClass: "foot-buy" }, [
            _c(
              "text",
              {
                staticClass: "buy-btn",
                attrs: { eventid: "3fa056aa-7" },
                on: { tap: _vm.buyTicket }
              },
              [_vm._v(_vm._s(_vm.buyBtnText))]
            )
          ])
        ])
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
    return _c("view", { staticClass: "movie-number all-actors" }, [
      _vm._v("全部"),
      _c("text", { staticClass: "iconfont icon-arrow-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", [_c("text", {}, [_vm._v("视频")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", [_c("text", {}, [_vm._v("图片")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("text", [
      _vm._v("票房排名"),
      _c("text", { staticClass: "iconfont icon-arrow-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("text", [
      _vm._v("今日实时（万）"),
      _c("text", { staticClass: "iconfont icon-arrow-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("text", [
      _vm._v("累计票房（万）"),
      _c("text", { staticClass: "iconfont icon-arrow-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", [_c("text", {}, [_vm._v("短评")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "item-title" }, [
      _c("view", [_c("text", {}, [_vm._v("影评")])]),
      _c("view", [
        _c("text", {}, [_vm._v("全部")]),
        _c("text", { staticClass: "iconfont icon-arrow-right" })
      ])
    ])
  }
]
render._withStripped = true



/***/ })

},[["../../../../../../projects/test/uni-app/mtime/main.js?{\"page\":\"pages%2Fmovies%2Fmovie-detail\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/movies/movie-detail.js.map