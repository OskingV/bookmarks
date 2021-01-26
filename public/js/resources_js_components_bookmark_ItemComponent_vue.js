(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_bookmark_ItemComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/bookmark/ItemComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/bookmark/ItemComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      id: 0,
      showPasswordInput: false,
      password: '',
      showErrorMessage: false
    };
  },
  computed: {
    item: function item() {
      return this.$store.getters['bookmark/item'];
    }
  },
  methods: {
    destroy: function destroy() {
      var _this = this;

      if (this.showPasswordInput) {
        var payload = {
          id: this.id,
          password: this.password
        };
        this.$store.dispatch('bookmark/delete', payload).then(function () {
          _this.$router.push({
            name: 'list'
          });
        })["catch"](function (error) {
          if (error.response.status === 401) {
            _this.showErrorMessage = true;
          }
        });
      } else {
        this.showPasswordInput = true;
      }
    }
  },
  created: function created() {
    this.id = this.$route.params.id;

    if (this.$route.params.load) {
      this.$store.dispatch('bookmark/show', {
        id: this.id
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/bookmark/ItemComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/bookmark/ItemComponent.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ItemComponent_vue_vue_type_template_id_6c3e357c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemComponent.vue?vue&type=template&id=6c3e357c& */ "./resources/js/components/bookmark/ItemComponent.vue?vue&type=template&id=6c3e357c&");
/* harmony import */ var _ItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/bookmark/ItemComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ItemComponent_vue_vue_type_template_id_6c3e357c___WEBPACK_IMPORTED_MODULE_0__.render,
  _ItemComponent_vue_vue_type_template_id_6c3e357c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/bookmark/ItemComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/bookmark/ItemComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/bookmark/ItemComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ItemComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/bookmark/ItemComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/bookmark/ItemComponent.vue?vue&type=template&id=6c3e357c&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/bookmark/ItemComponent.vue?vue&type=template&id=6c3e357c& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemComponent_vue_vue_type_template_id_6c3e357c___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemComponent_vue_vue_type_template_id_6c3e357c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemComponent_vue_vue_type_template_id_6c3e357c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ItemComponent.vue?vue&type=template&id=6c3e357c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/bookmark/ItemComponent.vue?vue&type=template&id=6c3e357c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/bookmark/ItemComponent.vue?vue&type=template&id=6c3e357c&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/bookmark/ItemComponent.vue?vue&type=template&id=6c3e357c& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("\n                    Bookmark info\n                ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("h5", { staticClass: "card-title" }, [_vm._v("Created at:")]),
            _vm._v(" "),
            _c("p", { staticClass: "card-text" }, [
              _vm._v(_vm._s(_vm.item.created_at))
            ]),
            _vm._v(" "),
            _c("h5", { staticClass: "card-title" }, [_vm._v("Favicon:")]),
            _vm._v(" "),
            _c("p", { staticClass: "card-text" }, [
              _c("img", {
                staticStyle: { width: "16px" },
                attrs: { src: _vm.item.favicon_url, alt: "favicon" }
              })
            ]),
            _vm._v(" "),
            _c("h5", { staticClass: "card-title" }, [_vm._v("Url:")]),
            _vm._v(" "),
            _c("p", { staticClass: "card-text" }, [
              _vm._v(_vm._s(_vm.item.url))
            ]),
            _vm._v(" "),
            _c("h5", { staticClass: "card-title" }, [_vm._v("Title:")]),
            _vm._v(" "),
            _c("p", { staticClass: "card-text" }, [
              _vm._v(_vm._s(_vm.item.title))
            ]),
            _vm._v(" "),
            _c("h5", { staticClass: "card-title" }, [_vm._v("Meta keywords:")]),
            _vm._v(" "),
            _c("p", { staticClass: "card-text" }, [
              _vm._v(_vm._s(_vm.item.meta_keywords))
            ]),
            _vm._v(" "),
            _c("h5", { staticClass: "card-title" }, [
              _vm._v("Meta description:")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "card-text" }, [
              _vm._v(_vm._s(_vm.item.meta_description))
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.destroy($event)
                  }
                }
              },
              [
                _vm.showPasswordInput
                  ? _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "inputPassword" } }, [
                        _vm._v("Password")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.password,
                            expression: "password"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "password",
                          id: "inputPassword",
                          placeholder: "Enter password"
                        },
                        domProps: { value: _vm.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.password = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.showErrorMessage
                        ? _c(
                            "small",
                            {
                              staticClass: "form-text text-muted",
                              staticStyle: { color: "red!important" }
                            },
                            [_vm._v("Invalid password.")]
                          )
                        : _vm._e()
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-danger", attrs: { type: "submit" } },
                  [_vm._v("Delete")]
                )
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);