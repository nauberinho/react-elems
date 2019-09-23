module.exports = {
  presets: [
    [
      "@babel/preset-typescript",
      {
        modules: false,
        useBuiltIns: "usage"
      }
    ],
    "@babel/react"
  ]
};
