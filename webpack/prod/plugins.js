import path from 'path'
// import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WorkboxPlugin from 'workbox-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
const plugins = () => {
  return [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../../public/index.html'),
      filename: './index.html'
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ]
}
export default plugins()
