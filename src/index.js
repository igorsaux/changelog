"use strict";
exports.__esModule = true;
var App_1 = require("./components/App");
require("./styles/index.css");
var preact_1 = require("preact");
console.log('%cOnyx', "\n  color: #F34160;\n  font-weight: bold;\n  font-size: 12ch;\n  text-shadow: 0px 1px black, 0 2px black, 0 3px black, 0 4px black;\n  font-style: italic;\n");
(0, preact_1.render)(<App_1["default"] />, document.body);
