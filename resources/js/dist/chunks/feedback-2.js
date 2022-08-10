(self["webpackChunkplentymarkets_feedback"] = self["webpackChunkplentymarkets_feedback"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackComment.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackComment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FeedbackListEntry_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FeedbackListEntry.vue */ "./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue");







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FeedbackComment',
  components: {
    'feedback-list-entry': _FeedbackListEntry_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    feedback: Object,
    isReply: Boolean,
    showControls: Boolean,
    classes: String,
    styles: String,
    options: Object
  },
  data: function data() {
    return {
      authorName: '',
      replyMessage: '',
      replyFormVisible: false,
      replyListVisible: false,
      honeypot: '',
      feedbackData: {}
    };
  },
  computed: {
    variationAttributes: function variationAttributes() {
      if (this.feedbackData.targetRelation.feedbackRelationType !== 'variation' || this.feedbackData.targetRelation.targetRelationName.length <= 0 || !this.feedbackData.targetRelation.variationAttributes || !this.itemAttributes) {
        return [];
      }

      var _self = this;

      return this.feedbackData.targetRelation.variationAttributes.map(function (attributeIds) {
        var targetId = _self.feedbackData.targetRelation.feedbackRelationTargetId;

        if (!Object.prototype.hasOwnProperty.call(_self.itemAttributes, targetId) || !Object.prototype.hasOwnProperty.call(_self.itemAttributes[targetId], attributeIds.attributeId) || !Object.prototype.hasOwnProperty.call(_self.itemAttributes[targetId][attributeIds.attributeId], attributeIds.valueId)) {
          return null;
        }

        var attribute = _self.itemAttributes[targetId][attributeIds.attributeId][attributeIds.valueId];
        return {
          name: attribute.attributeName,
          value: attribute.attributeValue
        };
      }).filter(function (entry) {
        return entry !== null;
      });
    },
    displayName: function displayName() {
      var rawName = this.feedbackData.sourceRelation[0].sourceRelationLabel;

      if (rawName !== ' ') {
        return rawName.split(' ').map(function (namePart, index) {
          if (index === 0) {
            return namePart + ' ';
          }

          return namePart.substr(0, 1) + '.';
        }).join('');
      } else {
        return this.$translate('Feedback::Feedback.guestName');
      }
    },
    message: function message() {
      if (!this.feedbackData.feedbackComment) {
        return '';
      }

      return this.feedbackData.feedbackComment.comment.message;
    },
    isPurchased: function isPurchased() {
      return this.feedbackData.sourceRelation.find(function (relation) {
        return relation.feedbackRelationType === 'orderItem';
      });
    },
    authenticatedUser: function authenticatedUser() {
      return this.$store.state.feedback.authenticatedUser;
    },
    itemAttributes: function itemAttributes() {
      return this.$store.state.feedback.itemAttributes;
    }
  },
  created: function created() {
    this.feedbackData = this.feedback;
  },
  methods: {
    createReply: function createReply() {
      if (!this.replyMessage || this.honeypot.length > 0) {
        return;
      }

      var _self = this;

      $.ajax({
        type: 'POST',
        url: '/rest/feedbacks/feedback/create',
        data: {
          authorName: this.authorName,
          message: this.replyMessage,
          targetId: this.feedbackData.id,
          type: 'reply'
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
          withCredentials: true
        },
        success: function success(data) {
          if (!_self.feedbackData.replies) {
            _self.feedbackData.replies = [];
          }

          _self.feedbackData.replies.unshift(data);

          _self.replyMessage = '';
          _self.replyFormVisible = false;
          _self.replyListVisible = true;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackComment.vue?vue&type=template&id=29bddc00&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackComment.vue?vue&type=template&id=29bddc00& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "feedback-comment",
    class: _vm.classes,
    style: _vm.styles
  }, [!_vm.isReply ? _c("div", [_c("p", {
    staticClass: "feedback-comment-title"
  }, [_vm._v("\n      " + _vm._s(_vm.feedbackData.title) + "\n    ")]), _vm._v(" "), _vm.feedbackData.feedbackRating.rating.ratingValue > 0 ? _c("div", {
    staticClass: "feedback-rating"
  }, _vm._l(5, function (i) {
    return _c("i", {
      key: "feedback_rating_" + i,
      staticClass: "fa fa-star",
      class: {
        full: _vm.feedbackData.feedbackRating.rating.ratingValue >= i,
        empty: _vm.feedbackData.feedbackRating.rating.ratingValue < i
      }
    });
  }), 0) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "feedback-attributes-list"
  }, [_c("p", [_vm.isPurchased ? _c("span", {
    staticClass: "feedback-verified-tag"
  }, [_vm._v("\n          " + _vm._s(_vm.$translate("Feedback::Feedback.verifiedPurchase")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.variationAttributes, function (variationAttribute, index) {
    return _c("span", {
      key: "feedback_attributes_" + index,
      staticClass: "feedback-attributes"
    }, [_vm._v("\n          " + _vm._s(variationAttribute.name) + ": " + _vm._s(variationAttribute.value) + "\n        ")]);
  })], 2)])]) : _vm._e(), _vm._v(" "), _c("p", {
    staticClass: "feedback-comment-text",
    domProps: {
      textContent: _vm._s(_vm.message)
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "feedback-info"
  }, [_c("span", {
    staticClass: "feedback-info-segment"
  }, [_c("strong", [_vm.feedbackData.sourceRelation[0].feedbackRelationType === "user" ? _c("span", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip"
    }],
    staticClass: "feedback-admin",
    attrs: {
      "data-toggle": "tooltip",
      "data-placement": "top",
      "data-original-title": _vm.$translate("Feedback::Feedback.shopManagerLabel")
    }
  }, [_c("i", {
    staticClass: "fa fa-check-square"
  }), _vm._v("\n          " + _vm._s(_vm.feedbackData.sourceRelation[0].sourceRelationLabel) + "\n        ")]) : _vm.feedbackData.sourceRelation[0].feedbackRelationSourceId == 0 && _vm.feedback.authorName.length > 0 ? _c("span", [_vm._v("\n          " + _vm._s(_vm.feedbackData.authorName) + "\n        ")]) : _vm.feedbackData.sourceRelation[0].feedbackRelationSourceId == 0 ? _c("span", [_vm._v("\n          " + _vm._s(_vm.$translate("Feedback::Feedback.guestName")) + "\n        ")]) : _c("span", [_vm._v("\n          " + _vm._s(_vm.displayName) + "\n        ")])])]), _vm._v(" "), _vm.options.timestampVisibility ? _c("span", {
    staticClass: "feedback-info-segment"
  }, [_c("i", {
    staticClass: "fa fa-calendar text-muted"
  }), _vm._v("\n      " + _vm._s(_vm._f("date")(_vm.feedbackData.createdAt, _vm.$translate("Ceres::Template.devDateFormatMoment") || "DD.MM.YYYY")) + "\n    ")]) : _vm._e(), _vm._v(" "), !_vm.isReply && (_vm.authenticatedUser.isLoggedIn || _vm.options.allowGuestFeedbacks) ? _c("span", {
    staticClass: "feedback-info-segment btn btn-sm btn-default",
    on: {
      click: function click($event) {
        _vm.replyFormVisible = !_vm.replyFormVisible;
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$translate("Feedback::Feedback.addComment")) + "\n    ")]) : _vm._e(), _vm._v(" "), !!_vm.feedbackData.replies && _vm.feedbackData.replies.length > 0 && !_vm.replyListVisible ? _c("span", {
    staticClass: "feedback-info-segment btn btn-sm btn-default",
    on: {
      click: function click($event) {
        _vm.replyListVisible = !_vm.replyListVisible;
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$translate("Feedback::Feedback.viewComments")) + " (" + _vm._s(_vm.feedbackData.replies.length) + ")\n    ")]) : !!_vm.feedbackData.replies && _vm.feedbackData.replies.length > 0 && _vm.replyListVisible ? _c("span", {
    staticClass: "feedback-info-segment btn btn-sm btn-default",
    on: {
      click: function click($event) {
        _vm.replyListVisible = !_vm.replyListVisible;
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$translate("Feedback::Feedback.hideComments")) + "\n    ")]) : _vm._e()]), _vm._v(" "), _vm.replyFormVisible && !_vm.isReply && (_vm.authenticatedUser.isLoggedIn || _vm.options.allowGuestFeedbacks) ? _c("div", {
    staticClass: "feedback-add-reply"
  }, [!_vm.authenticatedUser.isLoggedIn && _vm.options.allowGuestFeedbacks ? _c("div", {
    staticClass: "form-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.authorName,
      expression: "authorName"
    }],
    staticClass: "form-control",
    attrs: {
      id: "author",
      type: "text",
      name: "author",
      placeholder: _vm.$translate("Feedback::Feedback.authorName"),
      disabled: _vm.authenticatedUser.limitReached || !_vm.authenticatedUser.hasPurchased
    },
    domProps: {
      value: _vm.authorName
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.authorName = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.honeypot,
      expression: "honeypot"
    }],
    staticClass: "form-control",
    attrs: {
      id: "comment-textfield",
      type: "text",
      name: "comment-textfield"
    },
    domProps: {
      value: _vm.honeypot
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.honeypot = $event.target.value;
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.replyMessage,
      expression: "replyMessage"
    }],
    staticClass: "form-control",
    attrs: {
      name: "message",
      rows: "3",
      placeholder: _vm.$translate("Feedback::Feedback.commentMessage")
    },
    domProps: {
      value: _vm.replyMessage
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.replyMessage = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary btn-appearance",
    attrs: {
      disabled: !_vm.replyMessage
    },
    on: {
      click: function click($event) {
        return _vm.createReply();
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$translate("Feedback::Feedback.submitComment")) + "\n    ")])]) : _vm._e(), _vm._v(" "), !!_vm.feedbackData.replies && _vm.feedbackData.replies.length > 0 && _vm.replyListVisible ? _c("div", {
    staticClass: "feedback-replies"
  }, _vm._l(_vm.feedbackData.replies, function (reply) {
    return _c("feedback-list-entry", {
      key: reply.id,
      attrs: {
        feedback: reply,
        "is-reply": true,
        "show-controls": _vm.showControls,
        classes: _vm.classes,
        styles: _vm.styles,
        options: _vm.options
      },
      on: {
        delete: function _delete($event) {
          return _vm.$emit("delete", $event);
        }
      }
    });
  }), 1) : _vm._e()]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/core-js/internals/array-slice-simple.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice-simple.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

var $Array = Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "./node_modules/core-js/internals/array-slice-simple.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackComment.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackComment.vue ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackComment_vue_vue_type_template_id_29bddc00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackComment.vue?vue&type=template&id=29bddc00& */ "./resources/js/src/app/components/item/singleitem/FeedbackComment.vue?vue&type=template&id=29bddc00&");
/* harmony import */ var _FeedbackComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackComment.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/singleitem/FeedbackComment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeedbackComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeedbackComment_vue_vue_type_template_id_29bddc00___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeedbackComment_vue_vue_type_template_id_29bddc00___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/singleitem/FeedbackComment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackComment.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackComment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackComment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackComment.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackComment.vue?vue&type=template&id=29bddc00&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackComment.vue?vue&type=template&id=29bddc00& ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackComment_vue_vue_type_template_id_29bddc00___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackComment_vue_vue_type_template_id_29bddc00___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackComment_vue_vue_type_template_id_29bddc00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackComment.vue?vue&type=template&id=29bddc00& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackComment.vue?vue&type=template&id=29bddc00&");


/***/ })

}]);
//# sourceMappingURL=feedback-2.js.map