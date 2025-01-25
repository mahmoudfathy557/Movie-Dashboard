const { transform } = require("@babel/core");

module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
