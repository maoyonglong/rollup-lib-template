import baseConfig from './rollup.config.base'

baseConfig.output = {
  file: 'dist/example.js',
  format: 'umd',
  name: 'Example'
}

export default baseConfig
