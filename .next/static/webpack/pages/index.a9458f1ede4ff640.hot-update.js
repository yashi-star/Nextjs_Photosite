"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/PhotoSphere.jsx":
/*!****************************************!*\
  !*** ./src/components/PhotoSphere.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst PhotoSphere = ()=>{\n    _s();\n    const globeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const images = [\n            \"/images/a1.jpg\",\n            \"/images/a2.jpg\",\n            \"/images/a3.jpg\",\n            \"/images/a4.jpg\",\n            \"/images/a5.jpg\",\n            \"/images/a6.jpg\",\n            \"/images/a7.jpg\",\n            \"/images/a8.jpg\",\n            \"/images/a9.jpg\",\n            \"/images/a10.jpg\",\n            \"/images/a11.jpg\",\n            \"/images/a12.jpg\",\n            \"/images/a13.jpg\",\n            \"/images/a14.jpg\",\n            \"/images/a15.jpg\"\n        ];\n        const radius = 200; // Radius of the spherical layout\n        const imageGroup = globeRef.current;\n        // Load images and arrange them on a spherical layout\n        images.forEach((src, index)=>{\n            const img = document.createElement(\"img\");\n            img.src = src;\n            img.style.width = \"100px\";\n            img.style.height = \"100px\";\n            img.style.position = \"absolute\";\n            img.style.borderRadius = \"5%\";\n            // Calculate spherical coordinates\n            const phi = Math.acos(-1 + 2 * index / images.length); // Latitude\n            let theta = Math.sqrt(images.length * Math.PI) * phi; // Longitude\n            if (index === 0) {\n                theta += 0.01; // Add a small offset to the first image\n            }\n            // Convert spherical to Cartesian coordinates\n            const x = radius * Math.sin(phi) * Math.cos(theta);\n            const y = radius * Math.cos(phi);\n            const z = radius * Math.sin(phi) * Math.sin(theta);\n            // Set the image position\n            img.style.left = \"\".concat(x + 100, \"px\"); // Shift the image to the left\n            img.style.top = \"\".concat(y + window.innerHeight / 2, \"px\");\n            // Add the image to the group\n            imageGroup.appendChild(img);\n        });\n        // Animate the globe\n        let angle = 0;\n        const animate = ()=>{\n            requestAnimationFrame(animate);\n            angle += 0.01;\n            images.forEach((src, index)=>{\n                const img = imageGroup.children[index];\n                const phi = Math.acos(-1 + 2 * index / images.length); // Latitude\n                let theta = Math.sqrt(images.length * Math.PI) * phi; // Longitude\n                if (index === 0) {\n                    theta += 0.01; // Add a small offset to the first image\n                }\n                const x = radius * Math.sin(phi) * Math.cos(theta + angle);\n                const y = radius * Math.cos(phi);\n                const z = radius * Math.sin(phi) * Math.sin(theta + angle);\n                img.style.left = \"\".concat(x + 100, \"px\"); // Shift the image to the left\n                img.style.top = \"\".concat(y + window.innerHeight / 2, \"px\");\n            });\n        };\n        animate();\n        // Clean up when the component unmounts\n        return ()=>{\n            imageGroup.innerHTML = \"\";\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: globeRef,\n        style: {\n            left: \"20%\",\n            bottom: \"15%\",\n            position: \"relative\",\n            transform: \"scale(1.2)\",\n            transformStyle: \"preserve-3d\"\n        },\n        className: \"flex justify-center\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\panty\\\\OneDrive\\\\Desktop\\\\MYNEXT\\\\nextjs\\\\src\\\\components\\\\PhotoSphere.jsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PhotoSphere, \"RnDsAY9k2/HDGJbJqxvzVF3XlM4=\");\n_c = PhotoSphere;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoSphere);\nvar _c;\n$RefreshReg$(_c, \"PhotoSphere\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsR0FBRyxHQUE4QixPQUEzQkgsSUFBSUksT0FBT0MsV0FBVyxHQUFHLEdBQUU7WUFDaEQ7UUFDRjtRQUVBRztRQUVBLHVDQUF1QztRQUN2QyxPQUFPO1lBQ0wvQixXQUFXa0MsU0FBUyxHQUFHO1FBQ3pCO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNDO1FBQ0RDLEtBQUt2QztRQUNMVyxPQUFPO1lBQUdpQixNQUFNO1lBQ1pZLFFBQVE7WUFDUjFCLFVBQVU7WUFDVjJCLFdBQVc7WUFDWEMsZ0JBQWdCO1FBQ3BCO1FBQ0FDLFdBQVU7Ozs7OztBQUdkO0dBN0ZNNUM7S0FBQUE7QUErRk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGhvdG9TcGhlcmUuanN4PzcyNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUGhvdG9TcGhlcmUgPSAoKSA9PiB7XHJcbmNvbnN0IGdsb2JlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuICBjb25zdCBpbWFnZXMgPSBbXHJcbiAgICAnL2ltYWdlcy9hMS5qcGcnLFxyXG4gICAgJy9pbWFnZXMvYTIuanBnJyxcclxuICAgICcvaW1hZ2VzL2EzLmpwZycsXHJcbiAgICAnL2ltYWdlcy9hNC5qcGcnLFxyXG4gICAgJy9pbWFnZXMvYTUuanBnJyxcclxuICAgICcvaW1hZ2VzL2E2LmpwZycsXHJcbiAgICAnL2ltYWdlcy9hNy5qcGcnLFxyXG4gICAgJy9pbWFnZXMvYTguanBnJyxcclxuICAgICcvaW1hZ2VzL2E5LmpwZycsXHJcbiAgICAnL2ltYWdlcy9hMTAuanBnJyxcclxuICAgICcvaW1hZ2VzL2ExMS5qcGcnLFxyXG4gICAgJy9pbWFnZXMvYTEyLmpwZycsXHJcbiAgICAnL2ltYWdlcy9hMTMuanBnJyxcclxuICAgICcvaW1hZ2VzL2ExNC5qcGcnLFxyXG4gICAgJy9pbWFnZXMvYTE1LmpwZycsXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgcmFkaXVzID0gMjAwOyAvLyBSYWRpdXMgb2YgdGhlIHNwaGVyaWNhbCBsYXlvdXRcclxuICBjb25zdCBpbWFnZUdyb3VwID0gZ2xvYmVSZWYuY3VycmVudDtcclxuXHJcbiAgLy8gTG9hZCBpbWFnZXMgYW5kIGFycmFuZ2UgdGhlbSBvbiBhIHNwaGVyaWNhbCBsYXlvdXRcclxuICBpbWFnZXMuZm9yRWFjaCgoc3JjLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc3JjID0gc3JjO1xyXG4gICAgaW1nLnN0eWxlLndpZHRoID0gJzEwMHB4JztcclxuICAgIGltZy5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xyXG4gICAgaW1nLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGltZy5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNSUnO1xyXG4gICAgLy8gQ2FsY3VsYXRlIHNwaGVyaWNhbCBjb29yZGluYXRlc1xyXG4gICAgY29uc3QgcGhpID0gTWF0aC5hY29zKC0xICsgKDIgKiBpbmRleCkgLyBpbWFnZXMubGVuZ3RoKTsgLy8gTGF0aXR1ZGVcclxuICAgIGxldCB0aGV0YSA9IE1hdGguc3FydChpbWFnZXMubGVuZ3RoICogTWF0aC5QSSkgKiBwaGk7IC8vIExvbmdpdHVkZVxyXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgIHRoZXRhICs9IDAuMDE7IC8vIEFkZCBhIHNtYWxsIG9mZnNldCB0byB0aGUgZmlyc3QgaW1hZ2VcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb252ZXJ0IHNwaGVyaWNhbCB0byBDYXJ0ZXNpYW4gY29vcmRpbmF0ZXNcclxuICAgIGNvbnN0IHggPSByYWRpdXMgKiBNYXRoLnNpbihwaGkpICogTWF0aC5jb3ModGhldGEpO1xyXG4gICAgY29uc3QgeSA9IHJhZGl1cyAqIE1hdGguY29zKHBoaSk7XHJcbiAgICBjb25zdCB6ID0gcmFkaXVzICogTWF0aC5zaW4ocGhpKSAqIE1hdGguc2luKHRoZXRhKTtcclxuXHJcbiAgICAvLyBTZXQgdGhlIGltYWdlIHBvc2l0aW9uXHJcbiAgICBpbWcuc3R5bGUubGVmdCA9IGAke3ggKyAxMDB9cHhgOyAvLyBTaGlmdCB0aGUgaW1hZ2UgdG8gdGhlIGxlZnRcclxuICAgIGltZy5zdHlsZS50b3AgPSBgJHt5ICsgd2luZG93LmlubmVySGVpZ2h0IC8gMn1weGA7XHJcblxyXG4gICAgLy8gQWRkIHRoZSBpbWFnZSB0byB0aGUgZ3JvdXBcclxuICAgIGltYWdlR3JvdXAuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICB9KTtcclxuXHJcbiAgLy8gQW5pbWF0ZSB0aGUgZ2xvYmVcclxuICBsZXQgYW5nbGUgPSAwO1xyXG4gIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICBhbmdsZSArPSAwLjAxO1xyXG4gICAgaW1hZ2VzLmZvckVhY2goKHNyYywgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgaW1nID0gaW1hZ2VHcm91cC5jaGlsZHJlbltpbmRleF07XHJcbiAgICAgIGNvbnN0IHBoaSA9IE1hdGguYWNvcygtMSArICgyICogaW5kZXgpIC8gaW1hZ2VzLmxlbmd0aCk7IC8vIExhdGl0dWRlXHJcbiAgICAgIGxldCB0aGV0YSA9IE1hdGguc3FydChpbWFnZXMubGVuZ3RoICogTWF0aC5QSSkgKiBwaGk7IC8vIExvbmdpdHVkZVxyXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICB0aGV0YSArPSAwLjAxOyAvLyBBZGQgYSBzbWFsbCBvZmZzZXQgdG8gdGhlIGZpcnN0IGltYWdlXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeCA9IHJhZGl1cyAqIE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSArIGFuZ2xlKTtcclxuICAgICAgY29uc3QgeSA9IHJhZGl1cyAqIE1hdGguY29zKHBoaSk7XHJcbiAgICAgIGNvbnN0IHogPSByYWRpdXMgKiBNYXRoLnNpbihwaGkpICogTWF0aC5zaW4odGhldGEgKyBhbmdsZSk7XHJcbiAgICAgIGltZy5zdHlsZS5sZWZ0ID0gYCR7eCArIDEwMH1weGA7IC8vIFNoaWZ0IHRoZSBpbWFnZSB0byB0aGUgbGVmdFxyXG4gICAgICBpbWcuc3R5bGUudG9wID0gYCR7eSArIHdpbmRvdy5pbm5lckhlaWdodCAvIDJ9cHhgO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgYW5pbWF0ZSgpO1xyXG5cclxuICAvLyBDbGVhbiB1cCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgaW1hZ2VHcm91cC5pbm5lckhUTUwgPSAnJztcclxuICB9O1xyXG59LCBbXSk7XHJcblxyXG5yZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgcmVmPXtnbG9iZVJlZn1cclxuICAgIHN0eWxlPXt7ICBsZWZ0OiAnMjAlJyxcclxuICAgICAgICBib3R0b206ICcxNSUnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMiknLCBcclxuICAgICAgICB0cmFuc2Zvcm1TdHlsZTogJ3ByZXNlcnZlLTNkJyxcclxuICAgIH19IFxyXG4gICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiIFxyXG4gIC8+XHJcbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaG90b1NwaGVyZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJQaG90b1NwaGVyZSIsImdsb2JlUmVmIiwiaW1hZ2VzIiwicmFkaXVzIiwiaW1hZ2VHcm91cCIsImN1cnJlbnQiLCJmb3JFYWNoIiwic3JjIiwiaW5kZXgiLCJpbWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJwaGkiLCJNYXRoIiwiYWNvcyIsImxlbmd0aCIsInRoZXRhIiwic3FydCIsIlBJIiwieCIsInNpbiIsImNvcyIsInkiLCJ6IiwibGVmdCIsInRvcCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiYXBwZW5kQ2hpbGQiLCJhbmdsZSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjaGlsZHJlbiIsImlubmVySFRNTCIsImRpdiIsInJlZiIsImJvdHRvbSIsInRyYW5zZm9ybSIsInRyYW5zZm9ybVN0eWxlIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PhotoSphere.jsx\n"));

/***/ })

});