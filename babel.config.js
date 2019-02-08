// module.exports = {
//   presets: [
//     '@vue/app'
//   ],
//   plugins: [
//     [
//       {
//         libraryName: 'element-ui'
//       }
//     ]
//   ]
// }

module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}
