import { type Configuration as WebpackDevServerConfiguration }
  from 'webpack-dev-server'

import { type BuildOptions } from './types/build-options'

export const buildWebServer = (
  opts: BuildOptions,
): WebpackDevServerConfiguration => {
  const { port } = opts

  return {
    port,
    'hot': true,
    'historyApiFallback': true,
    'open': true,
  }
}
