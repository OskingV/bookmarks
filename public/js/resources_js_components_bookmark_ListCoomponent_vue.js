(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_bookmark_ListCoomponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/bookmark/ListCoomponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/bookmark/ListCoomponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      page: 1
    };
  },
  computed: {
    list: function list() {
      return this.$store.getters['bookmark/list'];
    },
    listMeta: function listMeta() {
      return this.$store.getters['bookmark/listMeta'];
    }
  },
  methods: {
    getListByPage: function getListByPage(page) {
      var _this = this;

      var payload = {
        page: page
      };
      this.$store.dispatch('bookmark/index', payload).then(function () {
        _this.page = page;
      });
    },
    getList: function getList() {
      this.$store.dispatch('bookmark/index', {
        page: this.page
      });
    }
  },
  mounted: function mounted() {
    this.getList();
  }
});

/***/ }),

/***/ "./resources/js/components/bookmark/ListCoomponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/bookmark/ListCoomponent.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ListCoomponent_vue_vue_type_template_id_5a7dd662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListCoomponent.vue?vue&type=template&id=5a7dd662& */ "./resources/js/components/bookmark/ListCoomponent.vue?vue&type=template&id=5a7dd662&");
/* harmony import */ var _ListCoomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListCoomponent.vue?vue&type=script&lang=js& */ "./resources/js/components/bookmark/ListCoomponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ListCoomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ListCoomponent_vue_vue_type_template_id_5a7dd662___WEBPACK_IMPORTED_MODULE_0__.render,
  _ListCoomponent_vue_vue_type_template_id_5a7dd662___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/bookmark/ListCoomponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/bookmark/ListCoomponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/bookmark/ListCoomponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCoomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListCoomponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/bookmark/ListCoomponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCoomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/bookmark/ListCoomponent.vue?vue&type=template&id=5a7dd662&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/bookmark/ListCoomponent.vue?vue&type=template&id=5a7dd662& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCoomponent_vue_vue_type_template_id_5a7dd662___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCoomponent_vue_vue_type_template_id_5a7dd662___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCoomponent_vue_vue_type_template_id_5a7dd662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListCoomponent.vue?vue&type=template&id=5a7dd662& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/bookmark/ListCoomponent.vue?vue&type=template&id=5a7dd662&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/bookmark/ListCoomponent.vue?vue&type=template&id=5a7dd662&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/bookmark/ListCoomponent.vue?vue&type=template&id=5a7dd662& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.$router.push("create-bookmark")
              }
            }
          },
          [_vm._v("Add bookmark")]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row", staticStyle: { "margin-top": "15px" } }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("table", { staticClass: "table" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.list, function(bookmark) {
              return _c(
                "tr",
                {
                  key: bookmark.id,
                  staticStyle: { cursor: "pointer" },
                  on: {
                    click: function($event) {
                      return _vm.$router.push({
                        name: "bookmark",
                        params: { id: bookmark.id, load: true }
                      })
                    }
                  }
                },
                [
                  _c("th", [_vm._v(_vm._s(bookmark.created_at))]),
                  _vm._v(" "),
                  _c("td", [
                    _c("img", {
                      staticStyle: { width: "16px" },
                      attrs: { src: bookmark.favicon_url, alt: "favicon" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(bookmark.url))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(bookmark.title))])
                ]
              )
            }),
            0
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row", staticStyle: { "margin-top": "15px" } }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("nav", { attrs: { "aria-label": "Page navigation example" } }, [
          _c(
            "ul",
            { staticClass: "pagination" },
            _vm._l(_vm.listMeta.links, function(link) {
              return _c(
                "li",
                {
                  key: link.label,
                  staticClass: "page-item",
                  class: { active: link.active }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "page-link",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.getListByPage(link.label)
                        }
                      }
                    },
                    [_vm._v(_vm._s(link.label))]
                  )
                ]
              )
            }),
            0
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Created at")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Favicon")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Url")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Title")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);