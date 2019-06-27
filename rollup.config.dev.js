import baseConfig from './rollup.config.base'

baseConfig.output = {
  file: 'dist/{{ fileName }}.js',
  format: '{{ devFormat }}',
  name: '{{ expose }}'
}

export default baseConfig
