﻿!function () {
    "use strict";

    angular.module("angularLoad", []).service("angularLoad", ["$document", "$q", "$timeout", function (a, b, c) { this.loadScript = function (d) { var e = b.defer(), f = a[0].createElement("script"); return f.onload = f.onreadystatechange = function (a) { c(function () { e.resolve(a) }) }, f.onerror = function (a) { c(function () { e.reject(a) }) }, f.src = d, a[0].body.appendChild(f), e.promise }, this.loadCSS = function (d) { var e = b.defer(), f = a[0].createElement("link"); return f.rel = "stylesheet", f.type = "text/css", f.href = d, f.onload = f.onreadystatechange = function (a) { c(function () { e.resolve(a) }) }, f.onerror = function (a) { c(function () { e.reject(a) }) }, a[0].head.appendChild(f), e.promise } }])
}();
//# sourceMappingURL=angular-load.min.js.map
