import { type RuleSetRule } from 'webpack'

export const buildLoaders = (): RuleSetRule[] => {
  const styleLoader = 'style-loader'

  return [
    {
      'test': /\.(ts|tsx)$/iu,
      'loader': 'ts-loader',
      'exclude': ['/node_modules/'],
    },
    {
      'test': /\.css$/iu,
      'use': [styleLoader, 'css-loader'],
    },
    {
      'test': /\.s[ac]ss$/iu,
      'use': [styleLoader, 'css-loader', 'sass-loader'],
    },
    {
      'test': /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/iu,
      'type': 'asset',
    },
  ]
}
