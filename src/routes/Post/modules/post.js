import { Base64 } from 'js-base64'
import marked from 'marked'

export const POST_LOADED = 'POST_LOADED'
export const POST_LOADING_FAILED = 'POST_LOADING_FAILED'

export const loadPost = (name) => {
  return (dispatch, getState) => {
    return fetch(`https://api.github.com/repos/YoEight/website-posts/contents/${name}`)
      .then((response) => response.json())
      .then((post) => {
        const decoded = Base64.decode(post.content)
        const content = marked(decoded)

        dispatch({
          type: POST_LOADED,
          post: {
            name: post.name,
            content: content
          }
        })
      })
      .catch(() => {
        dispatch({
          type: POST_LOADING_FAILED
        })
      })
  }
}

export const actions = {
  loadPost
}

const ACTION_HANDLERS = {
  [POST_LOADED] : (state, action) => ({
    blogPost: action.post
  }),
  [POST_LOADING_FAILED] : (state, action) => ({
    loadingFailed: true
  })
}

const initialState = {
  notLoaded: true
}

export default function postReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
