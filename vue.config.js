const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const nodeExternals = require('webpack-node-externals')
const merge = require('lodash.merge')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const path = require('path')
const globby = require('globby')
// const fs = require('fs')

const TARGET_NODE = process.env.WEBPACK_TARGET === 'node'

const createApiFile = TARGET_NODE
  ? './create-api-server.js'
  : './create-api-client.js'

const target = TARGET_NODE
  ? 'server'
  : 'client'

const prod = process.env.NODE_ENV === 'production'
const pathToIcons = './src/assets/images/icons/**'

const iconsEntries = globby.sync(pathToIcons)

console.log('iconsEntries ===> ', require('util').inspect(iconsEntries, { colors: true, depth: 2 }))

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  css: {
    extract: prod
  },
  configureWebpack: () => ({
    entry: [
      ...iconsEntries,
      `./src/entry-${target}`
    ],
    target: TARGET_NODE ? 'node' : 'web',
    node: TARGET_NODE ? undefined : false,
    plugins: [
      new SpriteLoaderPlugin(),
      TARGET_NODE
        ? new VueSSRServerPlugin()
        : new VueSSRClientPlugin()
    ],
    externals: TARGET_NODE ? nodeExternals({
      whitelist: /\.css$/
    }) : undefined,
    output: {
      libraryTarget: TARGET_NODE
        ? 'commonjs2'
        : undefined
    },
    optimization: {
      splitChunks: undefined
    },
    resolve: {
      alias: {
        'create-api': createApiFile
      }
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          options: {
            // extract: process.env.NODE_ENV === 'production',
            extract: true,
            spriteFilename: (path) => {
              console.log('path ===> ', path)
              return prod
                ? './sprite-[hash:6].svg'
                : './sprite.svg'
            }
          }
        }
      ]
    }
  }),
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options =>
        merge(options, {
          optimizeSSR: false
        })
      )

    config.module
      .rule('svg')
      .test(() => false)
      .use('file-loader')
  }
}
