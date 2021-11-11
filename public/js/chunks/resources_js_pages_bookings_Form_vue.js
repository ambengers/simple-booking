"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_bookings_Form_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__.Form, _mixins__WEBPACK_IMPORTED_MODULE_0__.ErrorBag],
  data: function data() {
    return {
      rooms: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.loadRooms().then(function () {
      _this.loadBooking();
    });
  },
  computed: {
    pageTitle: function pageTitle() {
      return !!this.$route.params.id ? "Update" : "Create";
    }
  },
  methods: {
    submit: function submit() {
      var _this2 = this;

      var id = this.form.id;
      var url = id ? "/api/bookings/".concat(id, "/update") : "/api/bookings/store";
      var method = id ? "patch" : "post";
      this.clearErrors();
      return axios[method](url, _objectSpread({}, this.form)).then(function (_ref) {
        var data = _ref.data;

        _this2.$router.push({
          name: "bookings.show",
          params: {
            id: data.data.id
          }
        });
      }, function (err) {
        return _this2.errorBag = err.response.data;
      });
    },
    loadRooms: function loadRooms() {
      var _this3 = this;

      return axios.get("/api/rooms").then(function (_ref2) {
        var data = _ref2.data;
        _this3.rooms = data.data.map(function (room) {
          return {
            label: room.name,
            value: room.id
          };
        });
      });
    },
    loadBooking: function loadBooking() {
      var _this4 = this;

      var id = this.$route.params.id;
      if (!id) return;
      return axios.get("/api/bookings/".concat(id)).then(function (_ref3) {
        var data = _ref3.data;
        var booking = data.data;
        var room_id = booking.room_id;
        _this4.form = _objectSpread(_objectSpread({}, data.data), {}, {
          room: room_id,
          date: moment(booking.date).format("YYYY-MM-DD"),
          from: moment(booking.from).format("HH:MM"),
          to: moment(booking.to).format("HH:MM")
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/bookings/Form.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/bookings/Form.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_f4499100___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=f4499100& */ "./resources/js/pages/bookings/Form.vue?vue&type=template&id=f4499100&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/pages/bookings/Form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_f4499100___WEBPACK_IMPORTED_MODULE_0__.render,
  _Form_vue_vue_type_template_id_f4499100___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/bookings/Form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/bookings/Form.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/bookings/Form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/bookings/Form.vue?vue&type=template&id=f4499100&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/bookings/Form.vue?vue&type=template&id=f4499100& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_f4499100___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_f4499100___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_f4499100___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=template&id=f4499100& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Form.vue?vue&type=template&id=f4499100&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Form.vue?vue&type=template&id=f4499100&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/bookings/Form.vue?vue&type=template&id=f4499100& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("layout", [
    _c("div", { staticClass: "card w-1/2" }, [
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c("h1", { staticClass: "text-3xl mb-8" }, [
            _vm._v(_vm._s(_vm.pageTitle) + " Booking"),
          ]),
          _vm._v(" "),
          _c("select-input", {
            attrs: {
              label: "Room *",
              error: _vm.getError("room"),
              options: _vm.rooms,
              nullable: true,
            },
            model: {
              value: _vm.form.room,
              callback: function ($$v) {
                _vm.$set(_vm.form, "room", $$v)
              },
              expression: "form.room",
            },
          }),
          _vm._v(" "),
          _c("text-input", {
            attrs: {
              label: "Date *",
              error: _vm.getError("date"),
              placeholder: "YYYY-MM-DD",
            },
            model: {
              value: _vm.form.date,
              callback: function ($$v) {
                _vm.$set(_vm.form, "date", $$v)
              },
              expression: "form.date",
            },
          }),
          _vm._v(" "),
          _c("text-input", {
            attrs: {
              label: "From *",
              error: _vm.getError("from"),
              placeholder: "HH:MM",
            },
            model: {
              value: _vm.form.from,
              callback: function ($$v) {
                _vm.$set(_vm.form, "from", $$v)
              },
              expression: "form.from",
            },
          }),
          _vm._v(" "),
          _c("text-input", {
            attrs: {
              label: "To *",
              error: _vm.getError("to"),
              placeholder: "HH:MM",
            },
            model: {
              value: _vm.form.to,
              callback: function ($$v) {
                _vm.$set(_vm.form, "to", $$v)
              },
              expression: "form.to",
            },
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-full text-right mt-4" },
            [
              _c(
                "router-link",
                {
                  staticClass: "text-gray-400 mr-2",
                  attrs: { to: { name: "bookings.index" } },
                },
                [_vm._v("\n                    Cancel\n                ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-primary", on: { click: _vm.submit } },
                [_vm._v("\n                    Save\n                ")]
              ),
            ],
            1
          ),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);