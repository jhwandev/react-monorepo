const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // 엔트리 파일 경로
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // 지원할 파일 확장자
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // TypeScript 파일을 처리
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
