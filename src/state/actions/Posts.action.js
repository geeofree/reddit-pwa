import {createAction} from 'state/utils'

const requestPosts = createAction('REQUEST_SUBREDDIT_POSTS')

const receivePosts = createAction('RECEIVE_SUBREDDIT_POSTS', (subreddit, posts) => ({subreddit, posts}))

const fetchPosts = (subreddit) => (dispatch) => {
  dispatch(requestPosts())
  window.fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json.data.children)))
}

export default {fetchPosts}
