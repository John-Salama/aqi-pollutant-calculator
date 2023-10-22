// CommonJS export (Node.js require)
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = require("./lib/AQI");
}

// ESM export (JavaScript import)
if (typeof exports !== "undefined") {
  const AQI = require("./lib/AQI");
  exports.default = AQI;
}
