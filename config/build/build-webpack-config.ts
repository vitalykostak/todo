import { type Configuration } from 'webpack'

import { buildWebServer } from './build-dev-server'
import { buildLoaders } from './build-loaders'
import { buildPlugins } from './build-plugins'
import { buildResolvers } from './build-resolvers'
import { type BuildOptions } from './types/build-options'

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev } = options

  return {
    mode,
    'entry': paths.entry,
    'output': {
      'path': paths.output,
      'clean': true,
      'publicPath': '/',
    },
    'devServer': isDev ? buildWebServer(options) : undefined,
    'plugins': buildPlugins(options),
    'module': {
      'rules': buildLoaders(),
    },
    'resolve': buildResolvers(options),
  }
}
