import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: "post/:postName",

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Post = require('./containers/PostContainer').default
      const reducer = require('./modules/post').default

      injectReducer(store, { key: 'post', reducer })

      cb(null, Post)
    }, 'post')
  }
})
