(function(e){"function"==typeof define&&define.amd?define(["underscore"],e):"object"==typeof exports?module.exports=e(require("underscore")):e(window._)})(function(e){function n(n){var r=e.tail(arguments),t=n.replace(/%s/g,function(){return r.shift()});throw Error(t)}var r=window.Role={};return r.roles={},r.merge=function(){var n={};return e.chain([arguments]).flatten().each(function(r){e.each(r,function(r,t){r===!1||null===r?delete n[t]:n[t]=e.extend(n[t]||{},r)})}),n},r.define=function(t){r.roles[t]&&n("Role %s already exists",t);var o=e.chain(arguments).tail().map(function(n){return e.isObject(n)?n:r.roles[n]}).value();r.roles[t]=r.merge(o)},r.reset=function(){r.current=[],r.roles={}},r.can=function(n,t){var o=e.result(r,"current"),u=e.toArray(arguments).slice(2);return e.chain([o]).flatten().any(function(o){var i=r.roles[o],a=i&&i[t]&&i[t][n];return e.isFunction(a)&&(a=a.apply(null,u)),!!a}).value()},r});