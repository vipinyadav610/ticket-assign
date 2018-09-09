import path from 'path'
import devServer from './devServer'
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
  mode: 'development',
  module: {
    rules
  },
  optimization,
  resolve: {
    extensions: ['.js', '.jsx'],
    alias
  },
  plugins,
  devServer
}
