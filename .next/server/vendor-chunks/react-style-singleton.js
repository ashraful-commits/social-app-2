"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-style-singleton";
exports.ids = ["vendor-chunks/react-style-singleton"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-style-singleton/dist/es5/component.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es5/component.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.styleSingleton = void 0;\nvar hook_1 = __webpack_require__(/*! ./hook */ \"(ssr)/./node_modules/react-style-singleton/dist/es5/hook.js\");\n/**\n * create a Component to add styles on demand\n * - styles are added when first instance is mounted\n * - styles are removed when the last instance is unmounted\n * - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior\n */\nvar styleSingleton = function () {\n    var useStyle = (0, hook_1.styleHookSingleton)();\n    var Sheet = function (_a) {\n        var styles = _a.styles, dynamic = _a.dynamic;\n        useStyle(styles, dynamic);\n        return null;\n    };\n    return Sheet;\n};\nexports.styleSingleton = styleSingleton;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXM1L2NvbXBvbmVudC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0I7QUFDdEIsYUFBYSxtQkFBTyxDQUFDLDJFQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2t3aWtzLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0eWxlLXNpbmdsZXRvbi9kaXN0L2VzNS9jb21wb25lbnQuanM/NjM0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3R5bGVTaW5nbGV0b24gPSB2b2lkIDA7XG52YXIgaG9va18xID0gcmVxdWlyZShcIi4vaG9va1wiKTtcbi8qKlxuICogY3JlYXRlIGEgQ29tcG9uZW50IHRvIGFkZCBzdHlsZXMgb24gZGVtYW5kXG4gKiAtIHN0eWxlcyBhcmUgYWRkZWQgd2hlbiBmaXJzdCBpbnN0YW5jZSBpcyBtb3VudGVkXG4gKiAtIHN0eWxlcyBhcmUgcmVtb3ZlZCB3aGVuIHRoZSBsYXN0IGluc3RhbmNlIGlzIHVubW91bnRlZFxuICogLSBjaGFuZ2luZyBzdHlsZXMgaW4gcnVudGltZSBkb2VzIG5vdGhpbmcgdW5sZXNzIGR5bmFtaWMgaXMgc2V0LiBCdXQgd2l0aCBtdWx0aXBsZSBjb21wb25lbnRzIHRoYXQgY2FuIGxlYWQgdG8gdGhlIHVuZGVmaW5lZCBiZWhhdmlvclxuICovXG52YXIgc3R5bGVTaW5nbGV0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVzZVN0eWxlID0gKDAsIGhvb2tfMS5zdHlsZUhvb2tTaW5nbGV0b24pKCk7XG4gICAgdmFyIFNoZWV0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBzdHlsZXMgPSBfYS5zdHlsZXMsIGR5bmFtaWMgPSBfYS5keW5hbWljO1xuICAgICAgICB1c2VTdHlsZShzdHlsZXMsIGR5bmFtaWMpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBTaGVldDtcbn07XG5leHBvcnRzLnN0eWxlU2luZ2xldG9uID0gc3R5bGVTaW5nbGV0b247XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-style-singleton/dist/es5/component.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-style-singleton/dist/es5/hook.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es5/hook.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.styleHookSingleton = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\nvar React = tslib_1.__importStar(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar singleton_1 = __webpack_require__(/*! ./singleton */ \"(ssr)/./node_modules/react-style-singleton/dist/es5/singleton.js\");\n/**\n * creates a hook to control style singleton\n * @see {@link styleSingleton} for a safer component version\n * @example\n * ```tsx\n * const useStyle = styleHookSingleton();\n * ///\n * useStyle('body { overflow: hidden}');\n */\nvar styleHookSingleton = function () {\n    var sheet = (0, singleton_1.stylesheetSingleton)();\n    return function (styles, isDynamic) {\n        React.useEffect(function () {\n            sheet.add(styles);\n            return function () {\n                sheet.remove();\n            };\n        }, [styles && isDynamic]);\n    };\n};\nexports.styleHookSingleton = styleHookSingleton;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXM1L2hvb2suanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsMEJBQTBCO0FBQzFCLGNBQWMsbUJBQU8sQ0FBQyx1REFBTztBQUM3QixpQ0FBaUMsbUJBQU8sQ0FBQyx3R0FBTztBQUNoRCxrQkFBa0IsbUJBQU8sQ0FBQyxxRkFBYTtBQUN2QztBQUNBO0FBQ0EsU0FBUyxzQkFBc0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsMEJBQTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3dpa3MvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXM1L2hvb2suanM/M2U1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3R5bGVIb29rU2luZ2xldG9uID0gdm9pZCAwO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgUmVhY3QgPSB0c2xpYl8xLl9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHNpbmdsZXRvbl8xID0gcmVxdWlyZShcIi4vc2luZ2xldG9uXCIpO1xuLyoqXG4gKiBjcmVhdGVzIGEgaG9vayB0byBjb250cm9sIHN0eWxlIHNpbmdsZXRvblxuICogQHNlZSB7QGxpbmsgc3R5bGVTaW5nbGV0b259IGZvciBhIHNhZmVyIGNvbXBvbmVudCB2ZXJzaW9uXG4gKiBAZXhhbXBsZVxuICogYGBgdHN4XG4gKiBjb25zdCB1c2VTdHlsZSA9IHN0eWxlSG9va1NpbmdsZXRvbigpO1xuICogLy8vXG4gKiB1c2VTdHlsZSgnYm9keSB7IG92ZXJmbG93OiBoaWRkZW59Jyk7XG4gKi9cbnZhciBzdHlsZUhvb2tTaW5nbGV0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNoZWV0ID0gKDAsIHNpbmdsZXRvbl8xLnN0eWxlc2hlZXRTaW5nbGV0b24pKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdHlsZXMsIGlzRHluYW1pYykge1xuICAgICAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2hlZXQuYWRkKHN0eWxlcyk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNoZWV0LnJlbW92ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgW3N0eWxlcyAmJiBpc0R5bmFtaWNdKTtcbiAgICB9O1xufTtcbmV4cG9ydHMuc3R5bGVIb29rU2luZ2xldG9uID0gc3R5bGVIb29rU2luZ2xldG9uO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-style-singleton/dist/es5/hook.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-style-singleton/dist/es5/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es5/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.styleHookSingleton = exports.stylesheetSingleton = exports.styleSingleton = void 0;\nvar component_1 = __webpack_require__(/*! ./component */ \"(ssr)/./node_modules/react-style-singleton/dist/es5/component.js\");\nObject.defineProperty(exports, \"styleSingleton\", ({ enumerable: true, get: function () { return component_1.styleSingleton; } }));\nvar singleton_1 = __webpack_require__(/*! ./singleton */ \"(ssr)/./node_modules/react-style-singleton/dist/es5/singleton.js\");\nObject.defineProperty(exports, \"stylesheetSingleton\", ({ enumerable: true, get: function () { return singleton_1.stylesheetSingleton; } }));\nvar hook_1 = __webpack_require__(/*! ./hook */ \"(ssr)/./node_modules/react-style-singleton/dist/es5/hook.js\");\nObject.defineProperty(exports, \"styleHookSingleton\", ({ enumerable: true, get: function () { return hook_1.styleHookSingleton; } }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXM1L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDBCQUEwQixHQUFHLDJCQUEyQixHQUFHLHNCQUFzQjtBQUNqRixrQkFBa0IsbUJBQU8sQ0FBQyxxRkFBYTtBQUN2QyxrREFBaUQsRUFBRSxxQ0FBcUMsc0NBQXNDLEVBQUM7QUFDL0gsa0JBQWtCLG1CQUFPLENBQUMscUZBQWE7QUFDdkMsdURBQXNELEVBQUUscUNBQXFDLDJDQUEyQyxFQUFDO0FBQ3pJLGFBQWEsbUJBQU8sQ0FBQywyRUFBUTtBQUM3QixzREFBcUQsRUFBRSxxQ0FBcUMscUNBQXFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rd2lrcy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdHlsZS1zaW5nbGV0b24vZGlzdC9lczUvaW5kZXguanM/NTk1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3R5bGVIb29rU2luZ2xldG9uID0gZXhwb3J0cy5zdHlsZXNoZWV0U2luZ2xldG9uID0gZXhwb3J0cy5zdHlsZVNpbmdsZXRvbiA9IHZvaWQgMDtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0eWxlU2luZ2xldG9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb25lbnRfMS5zdHlsZVNpbmdsZXRvbjsgfSB9KTtcbnZhciBzaW5nbGV0b25fMSA9IHJlcXVpcmUoXCIuL3NpbmdsZXRvblwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0eWxlc2hlZXRTaW5nbGV0b25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNpbmdsZXRvbl8xLnN0eWxlc2hlZXRTaW5nbGV0b247IH0gfSk7XG52YXIgaG9va18xID0gcmVxdWlyZShcIi4vaG9va1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0eWxlSG9va1NpbmdsZXRvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaG9va18xLnN0eWxlSG9va1NpbmdsZXRvbjsgfSB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-style-singleton/dist/es5/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-style-singleton/dist/es5/singleton.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es5/singleton.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.stylesheetSingleton = void 0;\nvar get_nonce_1 = __webpack_require__(/*! get-nonce */ \"(ssr)/./node_modules/get-nonce/dist/es5/index.js\");\nfunction makeStyleTag() {\n    if (!document)\n        return null;\n    var tag = document.createElement('style');\n    tag.type = 'text/css';\n    var nonce = (0, get_nonce_1.getNonce)();\n    if (nonce) {\n        tag.setAttribute('nonce', nonce);\n    }\n    return tag;\n}\nfunction injectStyles(tag, css) {\n    // @ts-ignore\n    if (tag.styleSheet) {\n        // @ts-ignore\n        tag.styleSheet.cssText = css;\n    }\n    else {\n        tag.appendChild(document.createTextNode(css));\n    }\n}\nfunction insertStyleTag(tag) {\n    var head = document.head || document.getElementsByTagName('head')[0];\n    head.appendChild(tag);\n}\nvar stylesheetSingleton = function () {\n    var counter = 0;\n    var stylesheet = null;\n    return {\n        add: function (style) {\n            if (counter == 0) {\n                if ((stylesheet = makeStyleTag())) {\n                    injectStyles(stylesheet, style);\n                    insertStyleTag(stylesheet);\n                }\n            }\n            counter++;\n        },\n        remove: function () {\n            counter--;\n            if (!counter && stylesheet) {\n                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);\n                stylesheet = null;\n            }\n        },\n    };\n};\nexports.stylesheetSingleton = stylesheetSingleton;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXM1L3NpbmdsZXRvbi5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwyQkFBMkI7QUFDM0Isa0JBQWtCLG1CQUFPLENBQUMsbUVBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwyQkFBMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rd2lrcy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdHlsZS1zaW5nbGV0b24vZGlzdC9lczUvc2luZ2xldG9uLmpzPzgxNzYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0eWxlc2hlZXRTaW5nbGV0b24gPSB2b2lkIDA7XG52YXIgZ2V0X25vbmNlXzEgPSByZXF1aXJlKFwiZ2V0LW5vbmNlXCIpO1xuZnVuY3Rpb24gbWFrZVN0eWxlVGFnKCkge1xuICAgIGlmICghZG9jdW1lbnQpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHRhZy50eXBlID0gJ3RleHQvY3NzJztcbiAgICB2YXIgbm9uY2UgPSAoMCwgZ2V0X25vbmNlXzEuZ2V0Tm9uY2UpKCk7XG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuICAgIH1cbiAgICByZXR1cm4gdGFnO1xufVxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzKHRhZywgY3NzKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICh0YWcuc3R5bGVTaGVldCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRhZy5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVUYWcodGFnKSB7XG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgaGVhZC5hcHBlbmRDaGlsZCh0YWcpO1xufVxudmFyIHN0eWxlc2hlZXRTaW5nbGV0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIHZhciBzdHlsZXNoZWV0ID0gbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgICBhZGQ6IGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICgoc3R5bGVzaGVldCA9IG1ha2VTdHlsZVRhZygpKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmplY3RTdHlsZXMoc3R5bGVzaGVldCwgc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRTdHlsZVRhZyhzdHlsZXNoZWV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY291bnRlci0tO1xuICAgICAgICAgICAgaWYgKCFjb3VudGVyICYmIHN0eWxlc2hlZXQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZXNoZWV0LnBhcmVudE5vZGUgJiYgc3R5bGVzaGVldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlc2hlZXQpO1xuICAgICAgICAgICAgICAgIHN0eWxlc2hlZXQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG59O1xuZXhwb3J0cy5zdHlsZXNoZWV0U2luZ2xldG9uID0gc3R5bGVzaGVldFNpbmdsZXRvbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-style-singleton/dist/es5/singleton.js\n");

/***/ })

};
;