import {createReducer} from 'state/utils'

const initState = {
  busyState: '',
  subreddit: null,
  subreddits: ['dota2', 'hiphopheads', 'videos', 'me_irl'],
  posts: []
}

export default createReducer(initState, {
  REQUEST_SUBREDDIT_POSTS (state, payload) {
    return {
      ...state,
      busyState: 'REQUEST_SUBREDDIT_POSTS'
    }
  },

  RECEIVE_SUBREDDIT_POSTS (state, payload) {
    return {
      ...state,
      busyState: initState.busyState,
      subreddit: payload.subredd,
      posts: payload.posts
    }
  }
})
