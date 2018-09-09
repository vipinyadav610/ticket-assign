import path from 'path'
const devServer = () => {
  return {
    contentBase: [path.join(__dirname, '../../dist/')],
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3001,
    hot: true,
    quiet: true,
    watchContentBase: true
  }
}
export default devServer()
