"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_bookings_Details_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Details.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Details.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      booking: null
    };
  },
  mounted: function mounted() {
    this.getBooking();
  },
  filters: {
    formatDate: function formatDate(date) {
      return moment.utc(date).format("DD-MM-YYYY");
    },
    formatTime: function formatTime(time) {
      return moment.utc(time).format("HH:mm");
    }
  },
  methods: {
    getBooking: function getBooking() {
      var _this = this;

      var id = this.$route.params.id;
      return axios.get("/api/bookings/".concat(id), {
        params: {
          load: "room,creator"
        }
      }).then(function (_ref) {
        var data = _ref.data;
        _this.booking = data.data;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/bookings/Details.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/bookings/Details.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Details_vue_vue_type_template_id_92c35194___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details.vue?vue&type=template&id=92c35194& */ "./resources/js/pages/bookings/Details.vue?vue&type=template&id=92c35194&");
/* harmony import */ var _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.vue?vue&type=script&lang=js& */ "./resources/js/pages/bookings/Details.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Details_vue_vue_type_template_id_92c35194___WEBPACK_IMPORTED_MODULE_0__.render,
  _Details_vue_vue_type_template_id_92c35194___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/bookings/Details.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/bookings/Details.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/bookings/Details.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Details.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/bookings/Details.vue?vue&type=template&id=92c35194&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/bookings/Details.vue?vue&type=template&id=92c35194& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_92c35194___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_92c35194___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_92c35194___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Details.vue?vue&type=template&id=92c35194& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Details.vue?vue&type=template&id=92c35194&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Details.vue?vue&type=template&id=92c35194&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Details.vue?vue&type=template&id=92c35194& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !!_vm.booking
    ? _c("layout", [
        _c("div", { staticClass: "card w-1/4" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c("h1", { staticClass: "card-title mb-8 text-2xl" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.booking.room.name) +
                    "\n            "
                ),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text text-gray-600 mb-2" }, [
                _vm._v(
                  "\n                Date: " +
                    _vm._s(_vm._f("formatDate")(_vm.booking.date)) +
                    "\n            "
                ),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text text-gray-600 mb-2" }, [
                _vm._v(
                  "\n                From: " +
                    _vm._s(_vm._f("formatTime")(_vm.booking.from)) +
                    "\n            "
                ),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text text-gray-600 mb-8" }, [
                _vm._v(
                  "\n                To: " +
                    _vm._s(_vm._f("formatTime")(_vm.booking.to)) +
                    "\n            "
                ),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text text-gray-600 mb-8" }, [
                _vm._v(
                  "\n                Booked By: " +
                    _vm._s(_vm.booking.creator.full_name) +
                    "\n            "
                ),
              ]),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn-link",
                  attrs: { to: { name: "bookings.index" } },
                },
                [_vm._v("\n                Back To List\n            ")]
              ),
            ],
            1
          ),
        ]),
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);