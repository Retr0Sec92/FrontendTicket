exports.ids = [3];
exports.modules = {

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(240);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("65abaec2", content, true, context)
};

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15fa6caa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(218);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15fa6caa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15fa6caa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15fa6caa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15fa6caa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(199);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(241);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script&family=Playfair+Display:ital@1&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&family=Roboto+Condensed:wght@300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".navbar[data-v-15fa6caa]{background-color:#014983;position:sticky;box-shadow:0 10px 30px 20px rgba(0,0,0,.5);top:0;display:flex;align-items:center;justify-content:center;height:4.5em;width:100%;z-index:1000}.navbar__banner[data-v-15fa6caa]{color:azure;font-size:30px;font-family:\"Oswald\",serif}.hero[data-v-15fa6caa]{margin:0 auto;text-align:center;justify-self:center;padding:17em 0;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "),radial-gradient(#6e6e6e,#252525);background-size:cover;background-repeat:no-repeat;background-blend-mode:multiply;background-attachment:fixed}.hero__brand[data-v-15fa6caa]{color:azure;font-family:\"Oswald\",serif;font-size:7em;text-shadow:5px 5px 10px #014983}.hero__desc[data-v-15fa6caa]{color:azure;font-family:\"Dancing Script\",cursive;font-size:40px;margin-bottom:1em;text-shadow:5px 5px 10px #006100}.hero__buttons[data-v-15fa6caa]{display:flex;flex-wrap:wrap;font-family:\"Roboto Condensed\",sans-serif;width:80%;margin:auto;justify-content:center}.hero__buttons__button[data-v-15fa6caa]{box-shadow:5px 5px 10px 5px rgba(0,0,0,.5);background-color:#014983;padding:1em 3em;margin:0 1em 1em;border-radius:.5em;transition:transform .25s ease-in-out,background-color .25s ease-in-out,opacity .25s linear}.hero__buttons__button>a[data-v-15fa6caa]{text-decoration:none;color:azure}.hero__buttons__button[data-v-15fa6caa]:hover{transform:scale(1.1);background-color:#005ba5}.hero__buttons__link[data-v-15fa6caa]{text-decoration:none}.hero__buttons__enter[data-v-15fa6caa]{background-color:#006100;box-shadow:5px 5px 10px 5px rgba(0,0,0,.5);padding:1em 3em;margin:0 1em 1em;border-radius:.5em;transition:transform .25s ease-in-out,background-color .25s ease-in-out,opacity .25s linear}.hero__buttons__enter>a[data-v-15fa6caa]{text-decoration:none;color:azure}.hero__buttons__enter[data-v-15fa6caa]:hover{transform:scale(1.1);background-color:#009100}.link[data-v-15fa6caa]{text-decoration:none;color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hero.de09090.jpg";

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=15fa6caa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"navbar\" data-v-15fa6caa><div class=\"navbar__banner\" data-v-15fa6caa>Felece Turizm</div></div> "),_vm._ssrNode("<div class=\"hero\" data-v-15fa6caa>","</div>",[_vm._ssrNode("<h1 class=\"hero__brand\" data-v-15fa6caa>Felece Turizm</h1> <h2 class=\"hero__desc\" data-v-15fa6caa>Ulaşımın doğru adresi</h2> "),_vm._ssrNode("<div class=\"hero__buttons\" data-v-15fa6caa>","</div>",[_vm._ssrNode("<div class=\"hero__buttons__button\" data-v-15fa6caa>","</div>",[_c('NuxtLink',{staticClass:"link",attrs:{"to":"/register"}},[_vm._v("Kayıt Ol")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"hero__buttons__button\" data-v-15fa6caa>","</div>",[_c('NuxtLink',{staticClass:"link",attrs:{"to":"/main"}},[_vm._v("Giriş Yapmadan Devam Et")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"hero__buttons__enter\" data-v-15fa6caa>","</div>",[_c('NuxtLink',{staticClass:"link",attrs:{"to":"/login"}},[_vm._v("Giriş Yap")])],1)],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=15fa6caa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  layout: 'landing'
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(239)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "15fa6caa",
  "4be29201"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map