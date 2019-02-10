import { createApp } from './app'

export default context => {
  return new Promise((resolve, reject) => {
    console.log('=============> IN ENTRY SERVER <================')
    const { app, router } = createApp()

    router.push(context.url)

    console.log('=============> BEFORE ON READY <================')
    router.onReady(() => {
      // const matchedComponents = router.getMatchedComponents()

      // if (!matchedComponents.length) {
      //   return reject({ code: 404 })
      // }

      console.log('app ===> ', require('util').inspect(app, { colors: true, depth: 0 }))
      resolve(app)
    }, reject)
  })
}
