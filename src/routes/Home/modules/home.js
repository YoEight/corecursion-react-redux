import 'whatwg-fetch'

export const POSTS_LOADED = 'POSTS_LOADED'
export const POSTS_LOADING_FAILED = 'POSTS_LOADING_FAILED'

export const loadPosts = () => {
  return (dispatch, getState) => {
    return fetch('https://api.github.com/repos/YoEight/website-posts/contents/')
      .then((response) => response.json())
      .then((posts) => {
        dispatch({
          type: POSTS_LOADED,
          posts: posts.reverse().map((p) => ({ name: p.name }))
        })
      })
      .catch(() => {
        dispatch({
          type: POSTS_LOADING_FAILED
        })
      })
  }
}

export const actions = {
  loadPosts
}

const ACTION_HANDLERS = {
  [POSTS_LOADED] : (state, action) => ({
    posts: action.posts
  }),
  [POSTS_LOADING_FAILED] : (state, action) => ({
    loadingFailed: true
  })
}

const initialState = {
  notLoaded: true
}

export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
