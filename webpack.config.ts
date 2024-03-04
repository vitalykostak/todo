import path from 'node:path'

import { type Configuration } from 'webpack'

import { buildWebpackConfig } from './config/build/build-webpack-config'
import {
  BuildMode,
  type BuildOptions,
  type Env,
} from './config/build/types/build-options'

export default (env: Env): Configuration => {
  const mode = env.mode || BuildMode.DEVELOPMENT
  const isDev = mode === BuildMode.DEVELOPMENT
  const PORT = Number(env.port)

  const options: BuildOptions = {
    'paths': {
      'entry': path.resolve(__dirname, 'src', 'index.tsx'),
      'output': path.resolve(__dirname, 'dist'),
      'src': path.resolve(__dirname, 'src'),
      'htmlTemplate': path.resolve(__dirname, 'public', 'index.html'),
    },
    isDev,
    'port': PORT,
    'mode': isDev ? BuildMode.DEVELOPMENT : BuildMode.PRODUCTION,
  }

  console.log(options)

  return buildWebpackConfig(options)
}
