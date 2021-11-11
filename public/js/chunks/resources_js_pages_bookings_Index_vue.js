"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_bookings_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins */ "./resources/js/mixins/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__.Auth],
  data: function data() {
    return {
      bookings: null,
      resourceToDestroy: null,
      deleting: false,
      perPage: 15
    };
  },
  mounted: function mounted() {
    this.getbookings();
  },
  filters: {
    formatDate: function formatDate(date) {
      return moment(date).format("DD-MM-Y");
    }
  },
  methods: {
    getbookings: function getbookings(navigationPage, params) {
      var _this = this;

      var page = navigationPage || 1;
      return axios.get("/api/bookings", {
        params: _objectSpread(_objectSpread({
          page: page,
          per_page: this.perPage
        }, params), {}, {
          load: "room,creator"
        })
      }).then(function (_ref) {
        var data = _ref.data;
        _this.bookings = data;
      });
    },
    destroy: function destroy() {
      var _this2 = this;

      var id = this.resourceToDestroy.id;
      return axios["delete"]("/api/bookings/".concat(id, "/destroy")).then(function () {
        _this2.bookings.data.splice(_this2.resourceToDestroy, 1);

        _this2.closeDeleteModal();
      });
    },
    openDeleteModal: function openDeleteModal(booking) {
      this.resourceToDestroy = booking;
      this.deleting = true;
    },
    closeDeleteModal: function closeDeleteModal() {
      this.resourceToDestroy = null;
      this.deleting = false;
    },
    goToPage: function goToPage(page) {
      this.getbookings(page);
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/bookings/Index.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/bookings/Index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_c7a82674___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=c7a82674& */ "./resources/js/pages/bookings/Index.vue?vue&type=template&id=c7a82674&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/bookings/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_c7a82674___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_c7a82674___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/bookings/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/bookings/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/bookings/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/bookings/Index.vue?vue&type=template&id=c7a82674&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/bookings/Index.vue?vue&type=template&id=c7a82674& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c7a82674___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c7a82674___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c7a82674___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=c7a82674& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Index.vue?vue&type=template&id=c7a82674&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Index.vue?vue&type=template&id=c7a82674&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Index.vue?vue&type=template&id=c7a82674& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "layout",
    [
      _c(
        "table",
        {
          staticClass:
            "table table-striped text-left table-sm text-sm w-full mb-8",
        },
        [
          _c("thead", [
            _c("th", { staticClass: "text-center" }, [_vm._v("Room")]),
            _vm._v(" "),
            _c("th", { staticClass: "text-center" }, [_vm._v("Date")]),
            _vm._v(" "),
            _c("th", { staticClass: "text-center" }, [_vm._v("From")]),
            _vm._v(" "),
            _c("th", { staticClass: "text-center" }, [_vm._v("To")]),
            _vm._v(" "),
            _c("th", { staticClass: "text-center" }, [_vm._v("Booked By")]),
            _vm._v(" "),
            _c("th", { staticClass: "text-center" }, [_vm._v("Actions")]),
          ]),
          _vm._v(" "),
          _vm.bookings && _vm.bookings.data.length > 0
            ? _c(
                "tbody",
                _vm._l(_vm.bookings.data, function (booking, key) {
                  return _c("tr", { key: key }, [
                    _c("td", { staticClass: "px-2" }, [
                      _vm._v(_vm._s(booking.room.name)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "px-2 text-center" }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm._f("formatDate")(booking.date)) +
                          "\n                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center px-2" }, [
                      _vm._v(_vm._s(booking.from)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center px-2" }, [
                      _vm._v(_vm._s(booking.to)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center px-2" }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(booking.creator.full_name) +
                          "\n                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center px-2" }, [
                      _vm._v(" "),
                    ]),
                  ])
                }),
                0
              )
            : _vm._e(),
        ]
      ),
      _vm._v(" "),
      _vm.bookings && _vm.bookings.data.length > 0
        ? _c("pagination", {
            attrs: { links: _vm.bookings && _vm.bookings.meta },
            on: { goToPage: _vm.goToPage },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);