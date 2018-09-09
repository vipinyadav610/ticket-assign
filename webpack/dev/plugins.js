import path from 'path'
import webpack from 'webpack'
// import webpackDashboard from "webpack-dashboard/plugin";
import OpenBrowserPlugin from 'open-browser-webpack-plugin'
// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
// import WorkboxPlugin from 'workbox-webpack-plugin'

const plugins = () => {
  return [
    new webpack.HotModuleReplacementPlugin(),
    // new webpackDashboard(),
    new OpenBrowserPlugin({ url: 'http://localhost:3001' }),
    // new BundleAnalyzerPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../../public/index.html'),
      filename: './index.html'
    })
    // new WorkboxPlugin.GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true
    // })
  ]
}
export default plugins()
