import path from 'path'
export default {
  components: path.join(__dirname, '../../src/client/components'),
  actions: path.join(__dirname, '../../src/client/redux/actions'),
  constants: path.join(__dirname, '../../src/client/redux/constants'),
  middlewares: path.join(__dirname, '../../src/client/redux/middlewares'),
  reducers: path.join(__dirname, '../../src/client/redux/reducers'),
  selectors: path.join(__dirname, '../../src/client/redux/selectors'),
  store: path.join(__dirname, '../../src/client/redux/store'),
  service: path.join(__dirname, '../../src/client/redux/api/service'),
  initialState: path.join(__dirname, '../../src/client/redux/initialState'),
  hoc: path.join(__dirname, '../../src/client/hoc'),
  assets: path.join(__dirname, '../../src/client/assets'),
  constants: path.join(__dirname, '../../src/client/redux/constants'),
  routes: path.join(__dirname, '../../src/client/routes'),
  containers: path.join(__dirname, '../../src/client/containers')
}
