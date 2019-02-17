import { createApp } from './main'

export default (context) => {
  return new Promise((resolve, reject) => {
    console.log('=============> IN ENTRY SERVER PROMISE <================')
    console.log('context ===> ', context)
    const { app, router } = createApp()

    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()

      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }

      console.log('app ===> ', require('util').inspect(app, { colors: true, depth: 0 }))
      resolve(app)
    }, reject)
  })
}
