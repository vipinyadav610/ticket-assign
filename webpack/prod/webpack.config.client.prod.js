import path from 'path'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import plugins from './plugins'
import rules from './rules'
import optimization from '../common/optimization'
import alias from '../common/alias'

const sourcePath = path.join(__dirname, '../../src/client')

export default {
  entry: {
    vendor: ['react', 'react-dom'],
    main: path.resolve(sourcePath, 'index.js')
  },
  output: {
    path: path.join(__dirname, '../../dist/'),
    filename: '[name].[hash].js'
  },
  mode: 'production',
  module: {
    rules
  },
  optimization: {
    ...optimization,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias
  },
  plugins
}
