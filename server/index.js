require("ignore-styles");

require("@babel/register")({
  ignore: [/(node_module)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-proposal-class-properties"
  ]
});

require("./server");
