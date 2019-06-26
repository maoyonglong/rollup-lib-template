import { uglify } from 'rollup-plugin-uglify'
import baseConfig from './rollup.config.base'

baseConfig.output = {
  file: 'dist/example.min.js',
  format: 'umd',
  name: 'Example'
}

baseConfig.plugins.push(uglify())

export default baseConfig
