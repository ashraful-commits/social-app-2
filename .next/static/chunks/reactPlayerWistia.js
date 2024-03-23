"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerWistia"],{

/***/ "(app-pages-browser)/./node_modules/react-player/lazy/players/Wistia.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-player/lazy/players/Wistia.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\"));\n\nvar _utils = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./node_modules/react-player/lazy/utils.js\");\n\nvar _patterns = __webpack_require__(/*! ../patterns */ \"(app-pages-browser)/./node_modules/react-player/lazy/patterns.js\");\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar SDK_URL = 'https://fast.wistia.com/assets/external/E-v1.js';\nvar SDK_GLOBAL = 'Wistia';\nvar PLAYER_ID_PREFIX = 'wistia-player-';\n\nvar Wistia = /*#__PURE__*/function (_Component) {\n  _inherits(Wistia, _Component);\n\n  var _super = _createSuper(Wistia);\n\n  function Wistia() {\n    var _this;\n\n    _classCallCheck(this, Wistia);\n\n    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {\n      _args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(_args));\n\n    _defineProperty(_assertThisInitialized(_this), \"callPlayer\", _utils.callPlayer);\n\n    _defineProperty(_assertThisInitialized(_this), \"playerID\", _this.props.config.playerId || \"\".concat(PLAYER_ID_PREFIX).concat((0, _utils.randomString)()));\n\n    _defineProperty(_assertThisInitialized(_this), \"onPlay\", function () {\n      var _this$props;\n\n      return (_this$props = _this.props).onPlay.apply(_this$props, arguments);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onPause\", function () {\n      var _this$props2;\n\n      return (_this$props2 = _this.props).onPause.apply(_this$props2, arguments);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onSeek\", function () {\n      var _this$props3;\n\n      return (_this$props3 = _this.props).onSeek.apply(_this$props3, arguments);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onEnded\", function () {\n      var _this$props4;\n\n      return (_this$props4 = _this.props).onEnded.apply(_this$props4, arguments);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onPlaybackRateChange\", function () {\n      var _this$props5;\n\n      return (_this$props5 = _this.props).onPlaybackRateChange.apply(_this$props5, arguments);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"mute\", function () {\n      _this.callPlayer('mute');\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"unmute\", function () {\n      _this.callPlayer('unmute');\n    });\n\n    return _this;\n  }\n\n  _createClass(Wistia, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.onMount && this.props.onMount(this);\n    }\n  }, {\n    key: \"load\",\n    value: function load(url) {\n      var _this2 = this;\n\n      var _this$props6 = this.props,\n          playing = _this$props6.playing,\n          muted = _this$props6.muted,\n          controls = _this$props6.controls,\n          _onReady = _this$props6.onReady,\n          config = _this$props6.config,\n          onError = _this$props6.onError;\n      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Wistia) {\n        if (config.customControls) {\n          config.customControls.forEach(function (control) {\n            return Wistia.defineControl(control);\n          });\n        }\n\n        window._wq = window._wq || [];\n\n        window._wq.push({\n          id: _this2.playerID,\n          options: _objectSpread({\n            autoPlay: playing,\n            silentAutoPlay: 'allow',\n            muted: muted,\n            controlsVisibleOnLoad: controls,\n            fullscreenButton: controls,\n            playbar: controls,\n            playbackRateControl: controls,\n            qualityControl: controls,\n            volumeControl: controls,\n            settingsControl: controls,\n            smallPlayButton: controls\n          }, config.options),\n          onReady: function onReady(player) {\n            _this2.player = player;\n\n            _this2.unbind();\n\n            _this2.player.bind('play', _this2.onPlay);\n\n            _this2.player.bind('pause', _this2.onPause);\n\n            _this2.player.bind('seek', _this2.onSeek);\n\n            _this2.player.bind('end', _this2.onEnded);\n\n            _this2.player.bind('playbackratechange', _this2.onPlaybackRateChange);\n\n            _onReady();\n          }\n        });\n      }, onError);\n    }\n  }, {\n    key: \"unbind\",\n    value: function unbind() {\n      this.player.unbind('play', this.onPlay);\n      this.player.unbind('pause', this.onPause);\n      this.player.unbind('seek', this.onSeek);\n      this.player.unbind('end', this.onEnded);\n      this.player.unbind('playbackratechange', this.onPlaybackRateChange);\n    } // Proxy methods to prevent listener leaks\n\n  }, {\n    key: \"play\",\n    value: function play() {\n      this.callPlayer('play');\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this.callPlayer('pause');\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.unbind();\n      this.callPlayer('remove');\n    }\n  }, {\n    key: \"seekTo\",\n    value: function seekTo(seconds) {\n      var keepPlaying = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      this.callPlayer('time', seconds);\n\n      if (!keepPlaying) {\n        this.pause();\n      }\n    }\n  }, {\n    key: \"setVolume\",\n    value: function setVolume(fraction) {\n      this.callPlayer('volume', fraction);\n    }\n  }, {\n    key: \"setPlaybackRate\",\n    value: function setPlaybackRate(rate) {\n      this.callPlayer('playbackRate', rate);\n    }\n  }, {\n    key: \"getDuration\",\n    value: function getDuration() {\n      return this.callPlayer('duration');\n    }\n  }, {\n    key: \"getCurrentTime\",\n    value: function getCurrentTime() {\n      return this.callPlayer('time');\n    }\n  }, {\n    key: \"getSecondsLoaded\",\n    value: function getSecondsLoaded() {\n      return null;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var url = this.props.url;\n      var videoID = url && url.match(_patterns.MATCH_URL_WISTIA)[1];\n      var className = \"wistia_embed wistia_async_\".concat(videoID);\n      var style = {\n        width: '100%',\n        height: '100%'\n      };\n      return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        id: this.playerID,\n        key: videoID,\n        className: className,\n        style: style\n      });\n    }\n  }]);\n\n  return Wistia;\n}(_react.Component);\n\nexports[\"default\"] = Wistia;\n\n_defineProperty(Wistia, \"displayName\", 'Wistia');\n\n_defineProperty(Wistia, \"canPlay\", _patterns.canPlay.wistia);\n\n_defineProperty(Wistia, \"loopOnEnded\", true);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGF6eS9wbGF5ZXJzL1dpc3RpYS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYix3QkFBd0IsMkJBQTJCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFcFcsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWtCOztBQUVsQixxQ0FBcUMsbUJBQU8sQ0FBQyxtRkFBTzs7QUFFcEQsYUFBYSxtQkFBTyxDQUFDLCtFQUFVOztBQUUvQixnQkFBZ0IsbUJBQU8sQ0FBQyxxRkFBYTs7QUFFckMsc0NBQXNDLGdEQUFnRCwyQkFBMkIsaUVBQWlFLGlCQUFpQjs7QUFFbk0sd0NBQXdDLDZCQUE2QixjQUFjLDhFQUE4RSxTQUFTLG9CQUFvQix3Q0FBd0MsK0JBQStCLHlCQUF5QixpQkFBaUIsc0ZBQXNGLHVCQUF1QixzREFBc0QscUZBQXFGLHNDQUFzQyw0Q0FBNEMsT0FBTyw4QkFBOEIseUJBQXlCLGFBQWEsMEJBQTBCOztBQUU5dEIsMkNBQTJDLGdDQUFnQyxvQ0FBb0Msb0RBQW9ELDhEQUE4RCxpRUFBaUUsR0FBRyxrQ0FBa0M7O0FBRXZVLGlDQUFpQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELGFBQWEsdURBQXVELDRDQUE0QyxLQUFLLDZDQUE2Qyw2RUFBNkUsT0FBTyxpREFBaUQsbUZBQW1GLE9BQU87O0FBRXRnQixrREFBa0QsMENBQTBDOztBQUU1Riw0Q0FBNEMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RDs7QUFFL1AsOERBQThELHNFQUFzRSw4REFBOEQ7O0FBRWxNLDJDQUEyQywrREFBK0QsNkVBQTZFLHlFQUF5RSxlQUFlLHVEQUF1RCxHQUFHOztBQUV6VSxpQ0FBaUMsNEVBQTRFLGlCQUFpQixhQUFhOztBQUUzSSxpQ0FBaUMsNkRBQTZELHlDQUF5Qyw4Q0FBOEMsaUNBQWlDLG1EQUFtRCwyREFBMkQsT0FBTyx5Q0FBeUM7O0FBRXBYLGtEQUFrRCwwRUFBMEUsZUFBZTs7QUFFM0ksd0NBQXdDLHVCQUF1Qix5RkFBeUY7O0FBRXhKLHVDQUF1Qyx3RUFBd0UsMENBQTBDLDhDQUE4QyxNQUFNLHVFQUF1RSxJQUFJLGVBQWUsWUFBWTs7QUFFblQsOEJBQThCLGdHQUFnRyxtREFBbUQ7O0FBRWpMLDRDQUE0QyxrQkFBa0Isa0NBQWtDLG9FQUFvRSxLQUFLLE9BQU8sb0JBQW9COztBQUVwTTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHlFQUF5RSxhQUFhO0FBQ3RGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU4sR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELGtCQUFrQjs7QUFFbEI7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9sYXp5L3BsYXllcnMvV2lzdGlhLmpzPzA4NmIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcblxudmFyIF9wYXR0ZXJucyA9IHJlcXVpcmUoXCIuLi9wYXR0ZXJuc1wiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBTREtfVVJMID0gJ2h0dHBzOi8vZmFzdC53aXN0aWEuY29tL2Fzc2V0cy9leHRlcm5hbC9FLXYxLmpzJztcbnZhciBTREtfR0xPQkFMID0gJ1dpc3RpYSc7XG52YXIgUExBWUVSX0lEX1BSRUZJWCA9ICd3aXN0aWEtcGxheWVyLSc7XG5cbnZhciBXaXN0aWEgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFdpc3RpYSwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihXaXN0aWEpO1xuXG4gIGZ1bmN0aW9uIFdpc3RpYSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2lzdGlhKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBfYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIF9hcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KF9hcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2FsbFBsYXllclwiLCBfdXRpbHMuY2FsbFBsYXllcik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicGxheWVySURcIiwgX3RoaXMucHJvcHMuY29uZmlnLnBsYXllcklkIHx8IFwiXCIuY29uY2F0KFBMQVlFUl9JRF9QUkVGSVgpLmNvbmNhdCgoMCwgX3V0aWxzLnJhbmRvbVN0cmluZykoKSkpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uUGxheVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcykub25QbGF5LmFwcGx5KF90aGlzJHByb3BzLCBhcmd1bWVudHMpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uUGF1c2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMjtcblxuICAgICAgcmV0dXJuIChfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcykub25QYXVzZS5hcHBseShfdGhpcyRwcm9wczIsIGFyZ3VtZW50cyk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25TZWVrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczM7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMpLm9uU2Vlay5hcHBseShfdGhpcyRwcm9wczMsIGFyZ3VtZW50cyk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25FbmRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0O1xuXG4gICAgICByZXR1cm4gKF90aGlzJHByb3BzNCA9IF90aGlzLnByb3BzKS5vbkVuZGVkLmFwcGx5KF90aGlzJHByb3BzNCwgYXJndW1lbnRzKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblBsYXliYWNrUmF0ZUNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1O1xuXG4gICAgICByZXR1cm4gKF90aGlzJHByb3BzNSA9IF90aGlzLnByb3BzKS5vblBsYXliYWNrUmF0ZUNoYW5nZS5hcHBseShfdGhpcyRwcm9wczUsIGFyZ3VtZW50cyk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibXV0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5jYWxsUGxheWVyKCdtdXRlJyk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidW5tdXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNhbGxQbGF5ZXIoJ3VubXV0ZScpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFdpc3RpYSwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnByb3BzLm9uTW91bnQgJiYgdGhpcy5wcm9wcy5vbk1vdW50KHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQodXJsKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcGxheWluZyA9IF90aGlzJHByb3BzNi5wbGF5aW5nLFxuICAgICAgICAgIG11dGVkID0gX3RoaXMkcHJvcHM2Lm11dGVkLFxuICAgICAgICAgIGNvbnRyb2xzID0gX3RoaXMkcHJvcHM2LmNvbnRyb2xzLFxuICAgICAgICAgIF9vblJlYWR5ID0gX3RoaXMkcHJvcHM2Lm9uUmVhZHksXG4gICAgICAgICAgY29uZmlnID0gX3RoaXMkcHJvcHM2LmNvbmZpZyxcbiAgICAgICAgICBvbkVycm9yID0gX3RoaXMkcHJvcHM2Lm9uRXJyb3I7XG4gICAgICAoMCwgX3V0aWxzLmdldFNESykoU0RLX1VSTCwgU0RLX0dMT0JBTCkudGhlbihmdW5jdGlvbiAoV2lzdGlhKSB7XG4gICAgICAgIGlmIChjb25maWcuY3VzdG9tQ29udHJvbHMpIHtcbiAgICAgICAgICBjb25maWcuY3VzdG9tQ29udHJvbHMuZm9yRWFjaChmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgcmV0dXJuIFdpc3RpYS5kZWZpbmVDb250cm9sKGNvbnRyb2wpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93Ll93cSA9IHdpbmRvdy5fd3EgfHwgW107XG5cbiAgICAgICAgd2luZG93Ll93cS5wdXNoKHtcbiAgICAgICAgICBpZDogX3RoaXMyLnBsYXllcklELFxuICAgICAgICAgIG9wdGlvbnM6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgYXV0b1BsYXk6IHBsYXlpbmcsXG4gICAgICAgICAgICBzaWxlbnRBdXRvUGxheTogJ2FsbG93JyxcbiAgICAgICAgICAgIG11dGVkOiBtdXRlZCxcbiAgICAgICAgICAgIGNvbnRyb2xzVmlzaWJsZU9uTG9hZDogY29udHJvbHMsXG4gICAgICAgICAgICBmdWxsc2NyZWVuQnV0dG9uOiBjb250cm9scyxcbiAgICAgICAgICAgIHBsYXliYXI6IGNvbnRyb2xzLFxuICAgICAgICAgICAgcGxheWJhY2tSYXRlQ29udHJvbDogY29udHJvbHMsXG4gICAgICAgICAgICBxdWFsaXR5Q29udHJvbDogY29udHJvbHMsXG4gICAgICAgICAgICB2b2x1bWVDb250cm9sOiBjb250cm9scyxcbiAgICAgICAgICAgIHNldHRpbmdzQ29udHJvbDogY29udHJvbHMsXG4gICAgICAgICAgICBzbWFsbFBsYXlCdXR0b246IGNvbnRyb2xzXG4gICAgICAgICAgfSwgY29uZmlnLm9wdGlvbnMpLFxuICAgICAgICAgIG9uUmVhZHk6IGZ1bmN0aW9uIG9uUmVhZHkocGxheWVyKSB7XG4gICAgICAgICAgICBfdGhpczIucGxheWVyID0gcGxheWVyO1xuXG4gICAgICAgICAgICBfdGhpczIudW5iaW5kKCk7XG5cbiAgICAgICAgICAgIF90aGlzMi5wbGF5ZXIuYmluZCgncGxheScsIF90aGlzMi5vblBsYXkpO1xuXG4gICAgICAgICAgICBfdGhpczIucGxheWVyLmJpbmQoJ3BhdXNlJywgX3RoaXMyLm9uUGF1c2UpO1xuXG4gICAgICAgICAgICBfdGhpczIucGxheWVyLmJpbmQoJ3NlZWsnLCBfdGhpczIub25TZWVrKTtcblxuICAgICAgICAgICAgX3RoaXMyLnBsYXllci5iaW5kKCdlbmQnLCBfdGhpczIub25FbmRlZCk7XG5cbiAgICAgICAgICAgIF90aGlzMi5wbGF5ZXIuYmluZCgncGxheWJhY2tyYXRlY2hhbmdlJywgX3RoaXMyLm9uUGxheWJhY2tSYXRlQ2hhbmdlKTtcblxuICAgICAgICAgICAgX29uUmVhZHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSwgb25FcnJvcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICB0aGlzLnBsYXllci51bmJpbmQoJ3BsYXknLCB0aGlzLm9uUGxheSk7XG4gICAgICB0aGlzLnBsYXllci51bmJpbmQoJ3BhdXNlJywgdGhpcy5vblBhdXNlKTtcbiAgICAgIHRoaXMucGxheWVyLnVuYmluZCgnc2VlaycsIHRoaXMub25TZWVrKTtcbiAgICAgIHRoaXMucGxheWVyLnVuYmluZCgnZW5kJywgdGhpcy5vbkVuZGVkKTtcbiAgICAgIHRoaXMucGxheWVyLnVuYmluZCgncGxheWJhY2tyYXRlY2hhbmdlJywgdGhpcy5vblBsYXliYWNrUmF0ZUNoYW5nZSk7XG4gICAgfSAvLyBQcm94eSBtZXRob2RzIHRvIHByZXZlbnQgbGlzdGVuZXIgbGVha3NcblxuICB9LCB7XG4gICAga2V5OiBcInBsYXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcigncGxheScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwYXVzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcigncGF1c2UnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy51bmJpbmQoKTtcbiAgICAgIHRoaXMuY2FsbFBsYXllcigncmVtb3ZlJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNlZWtUb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWVrVG8oc2Vjb25kcykge1xuICAgICAgdmFyIGtlZXBQbGF5aW5nID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCd0aW1lJywgc2Vjb25kcyk7XG5cbiAgICAgIGlmICgha2VlcFBsYXlpbmcpIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRWb2x1bWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Vm9sdW1lKGZyYWN0aW9uKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3ZvbHVtZScsIGZyYWN0aW9uKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0UGxheWJhY2tSYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBsYXliYWNrUmF0ZShyYXRlKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3BsYXliYWNrUmF0ZScsIHJhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXREdXJhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGxQbGF5ZXIoJ2R1cmF0aW9uJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEN1cnJlbnRUaW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FsbFBsYXllcigndGltZScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTZWNvbmRzTG9hZGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlY29uZHNMb2FkZWQoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciB1cmwgPSB0aGlzLnByb3BzLnVybDtcbiAgICAgIHZhciB2aWRlb0lEID0gdXJsICYmIHVybC5tYXRjaChfcGF0dGVybnMuTUFUQ0hfVVJMX1dJU1RJQSlbMV07XG4gICAgICB2YXIgY2xhc3NOYW1lID0gXCJ3aXN0aWFfZW1iZWQgd2lzdGlhX2FzeW5jX1wiLmNvbmNhdCh2aWRlb0lEKTtcbiAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgIH07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGlkOiB0aGlzLnBsYXllcklELFxuICAgICAgICBrZXk6IHZpZGVvSUQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXaXN0aWE7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFdpc3RpYTtcblxuX2RlZmluZVByb3BlcnR5KFdpc3RpYSwgXCJkaXNwbGF5TmFtZVwiLCAnV2lzdGlhJyk7XG5cbl9kZWZpbmVQcm9wZXJ0eShXaXN0aWEsIFwiY2FuUGxheVwiLCBfcGF0dGVybnMuY2FuUGxheS53aXN0aWEpO1xuXG5fZGVmaW5lUHJvcGVydHkoV2lzdGlhLCBcImxvb3BPbkVuZGVkXCIsIHRydWUpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-player/lazy/players/Wistia.js\n"));

/***/ })

}]);