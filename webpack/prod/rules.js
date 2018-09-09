import MiniCssExtractPlugin from 'mini-css-extract-plugin'
const rules = () => {
  return [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader']
    },
    {
      test: /\.(css|scss)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }
  ]
}
export default rules()
