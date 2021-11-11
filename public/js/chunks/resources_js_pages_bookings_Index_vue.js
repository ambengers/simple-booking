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
//
//
//
//
//
//

var filtersDefault = {
  room: "",
  creator: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__.Auth],
  data: function data() {
    return {
      bookings: null,
      filters: _objectSpread({}, filtersDefault),
      rooms: [],
      sortField: "",
      sortDirection: "desc",
      resourceToDestroy: null,
      deleting: false
    };
  },
  mounted: function mounted() {
    this.loadBookings();
    this.loadRooms();
    this.loadUsers();
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
    loadBookings: function loadBookings(navigationPage, params) {
      var _this = this;

      var page = navigationPage || 1;
      return axios.get("/api/bookings", {
        params: _objectSpread(_objectSpread(_objectSpread({}, this.filters), {}, {
          page: page
        }, params), {}, {
          load: "room,creator"
        })
      }).then(function (_ref) {
        var data = _ref.data;
        _this.bookings = data;
      });
    },
    loadRooms: function loadRooms() {
      var _this2 = this;

      return axios.get("/api/rooms").then(function (_ref2) {
        var data = _ref2.data;
        _this2.rooms = data.data.map(function (room) {
          return {
            label: room.name,
            value: room.id
          };
        });
      });
    },
    loadUsers: function loadUsers() {
      var _this3 = this;

      return axios.get("/api/users").then(function (_ref3) {
        var data = _ref3.data;
        _this3.users = data.data.map(function (user) {
          return {
            label: user.full_name,
            value: user.id
          };
        });
      });
    },
    sort: function sort(field) {
      this.sortDirection = this.sortDirection == "desc" ? "asc" : "desc";
      this.loadBookings(1, {
        sort: "".concat(field, "|").concat(this.sortDirection)
      });
    },
    goToPage: function goToPage(page) {
      this.loadBookings(page);
    },
    clearFilters: function clearFilters() {
      this.filters = _objectSpread({}, filtersDefault);
      this.loadBookings();
    },
    destroy: function destroy() {
      var _this4 = this;

      var id = this.resourceToDestroy.id;
      return axios["delete"]("/api/bookings/".concat(id, "/destroy")).then(function () {
        _this4.bookings.data = _this4.bookings.data.filter(function (item) {
          return item.id != id;
        });

        _this4.closeDeleteModal();
      });
    },
    openDeleteModal: function openDeleteModal(booking) {
      this.resourceToDestroy = booking;
      this.deleting = true;
    },
    closeDeleteModal: function closeDeleteModal() {
      this.resourceToDestroy = null;
      this.deleting = false;
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
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-sm-6" },
          [
            _c("filter-layout", { on: { clear: _vm.clearFilters } }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-12" },
                  [
                    _c("select-input", {
                      attrs: {
                        label: "Room",
                        options: _vm.rooms,
                        nullable: true,
                      },
                      on: {
                        update: function ($event) {
                          return _vm.loadBookings()
                        },
                      },
                      model: {
                        value: _vm.filters.room,
                        callback: function ($$v) {
                          _vm.$set(_vm.filters, "room", $$v)
                        },
                        expression: "filters.room",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.isAuthenticated
                  ? _c(
                      "div",
                      { staticClass: "col-md-12" },
                      [
                        _c("select-input", {
                          attrs: {
                            label: "Booked By",
                            options: _vm.users,
                            nullable: true,
                          },
                          on: {
                            update: function ($event) {
                              return _vm.loadBookings()
                            },
                          },
                          model: {
                            value: _vm.filters.creator,
                            callback: function ($$v) {
                              _vm.$set(_vm.filters, "creator", $$v)
                            },
                            expression: "filters.creator",
                          },
                        }),
                      ],
                      1
                    )
                  : _vm._e(),
              ]),
            ]),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-6 text-right" }, [
          _vm.isAuthenticated
            ? _c(
                "div",
                { staticClass: "mb-4" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { to: { name: "bookings.store" } },
                    },
                    [
                      _vm._v(
                        "\n                    Create Booking\n                "
                      ),
                    ]
                  ),
                ],
                1
              )
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "table",
        {
          staticClass:
            "table table-striped text-left table-sm text-sm w-full mb-8",
        },
        [
          _c("thead", [
            _c("th", { staticClass: "text-center" }, [
              _c(
                "button",
                {
                  staticClass: "btn-link text-black font-bold",
                  on: {
                    click: function ($event) {
                      return _vm.sort("room.name")
                    },
                  },
                },
                [_vm._v("\n                    Room\n                ")]
              ),
            ]),
            _vm._v(" "),
            _c("th", { staticClass: "text-center" }, [
              _c(
                "button",
                {
                  staticClass: "btn-link text-black font-bold",
                  on: {
                    click: function ($event) {
                      return _vm.sort("date")
                    },
                  },
                },
                [_vm._v("\n                    Date\n                ")]
              ),
            ]),
            _vm._v(" "),
            _c("th", { staticClass: "text-center" }, [
              _c(
                "button",
                {
                  staticClass: "btn-link text-black font-bold",
                  on: {
                    click: function ($event) {
                      return _vm.sort("from")
                    },
                  },
                },
                [_vm._v("\n                    From\n                ")]
              ),
            ]),
            _vm._v(" "),
            _c("th", { staticClass: "text-center" }, [
              _c(
                "button",
                {
                  staticClass: "btn-link text-black font-bold",
                  on: {
                    click: function ($event) {
                      return _vm.sort("to")
                    },
                  },
                },
                [_vm._v("\n                    To\n                ")]
              ),
            ]),
            _vm._v(" "),
            _c("th", { staticClass: "text-center" }, [
              _c(
                "button",
                {
                  staticClass: "btn-link text-black font-bold",
                  on: {
                    click: function ($event) {
                      return _vm.sort("creator.full_name")
                    },
                  },
                },
                [_vm._v("\n                    Booked By\n                ")]
              ),
            ]),
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
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm._f("formatTime")(booking.from)) +
                          "\n                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center px-2" }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm._f("formatTime")(booking.to)) +
                          "\n                "
                      ),
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
                      _c(
                        "div",
                        { staticClass: "flex justify-center space-x-2" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "text-gray-400",
                              attrs: {
                                to: {
                                  name: "bookings.show",
                                  params: { id: booking.id },
                                },
                              },
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass: "h-6 w-6",
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                  },
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _vm.isAuthenticated &&
                          _vm.auth.user.id == booking.created_by
                            ? _c(
                                "router-link",
                                {
                                  staticClass: "text-gray-400",
                                  attrs: {
                                    to: {
                                      name: "bookings.update",
                                      params: { id: booking.id },
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.isAuthenticated &&
                          _vm.auth.user.id == booking.created_by
                            ? _c(
                                "button",
                                {
                                  on: {
                                    click: function ($event) {
                                      return _vm.openDeleteModal(booking)
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "h-6 w-6 text-red-600",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("modal", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.deleting,
                                expression: "deleting",
                              },
                            ],
                            attrs: {
                              title: "Confirmation",
                              message:
                                "Are you sure you want to delete the booking?",
                            },
                            on: {
                              confirm: _vm.destroy,
                              close: _vm.closeDeleteModal,
                            },
                          }),
                        ],
                        1
                      ),
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