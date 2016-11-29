export const POSTS_LOADED = 'POSTS_LOADED'

export const loadPosts = () => {
  return (dispatch, getState) => {
    return fetch('https://api.github.com/repos/YoEight/website-posts/contents/')
      .then((response) => response.json())
      .then((posts) => {
        dispatch({
          type: POSTS_LOADED,
          posts: posts.reverse()
        })
      })
  }
}

export const actions = {
  loadPosts
}

const ACTION_HANDLERS = {
  [POSTS_LOADED] : (state, action) => {
    return {
      ...state,
      posts: action.posts
    }
  }
}

const initialState = {
  posts: []
}

export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
