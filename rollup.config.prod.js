import { uglify } from 'rollup-plugin-uglify'
import baseConfig from './rollup.config.base'

baseConfig.output = {
  file: 'dist/{{ fileName }}.min.js',
  format: '{{ prodFormat }}',
  name: '{{ expose }}'
}

baseConfig.plugins.push(uglify())

export default baseConfig
