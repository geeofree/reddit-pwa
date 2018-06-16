import React from 'react'
import {connect} from 'react-redux'
import pt from 'prop-types'
import PostsAction from 'state/actions/Posts.action'

class PostsPage extends React.Component {
  static propTypes = {
    Posts: pt.object.isRequired,
    fetchPosts: pt.func.isRequired
  }

  setSubreddit = (event) => {
    this.props.fetchPosts(event.target.value)
  }

  render () {
    const {Posts} = this.props

    const {busyState, posts, subreddits} = Posts

    return (
      <div>
        <select onChange={this.setSubreddit}>
          {subreddits.map(subreddit => (
            <option
              value={subreddit}
              key={subreddit}
            >
              {subreddit}
            </option>
          ))}
        </select>

        {busyState && <p>Fetching...</p>}

        <div>
          <h3>Posts</h3>
          {posts.length ? posts.map(post => (
            <p key={post.data.title}>{post.data.title}</p>
          )) : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({Posts}) => ({Posts})

const mapDispatchToProps = (dispatch) => ({
  fetchPosts (subreddit) {
    dispatch(PostsAction.fetchPosts(subreddit))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage)
