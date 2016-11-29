import { Base64 } from 'js-base64'
import marked from 'marked'

marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

export const POST_LOADED = 'POST_LOADED'

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
  }
}

export const actions = {
  loadPost
}

const ACTION_HANDLERS = {
  [POST_LOADED] : (state, action) => {
    return {
      ...state,
      blogPost: action.post
    }
  }
}

const initialState = {
  blogPost: {}
}

export default function postReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
