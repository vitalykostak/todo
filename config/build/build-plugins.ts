import { type WebpackPluginInstance } from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'

import { type BuildOptions } from './types/build-options'

export const buildPlugins =
(options: BuildOptions): WebpackPluginInstance[] => {
  return [
    new HtmlWebPackPlugin({
      'template': options.paths.htmlTemplate,
    }),
  ]
}
