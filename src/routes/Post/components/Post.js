import React from 'react'
import './Post.scss'

class Post extends React.Component {
  componentDidMount() {
    this.props.loadPost(this.props.params.postName)
  }

  render () {

    if (this.props.post.notLoaded) {
      return (
        <div>
          Loading…
        </div>
      )
    } else if (this.props.post.loadingFailed) {
      return (
        <div>
          Failed to retrieve posts from server.
        </div>
      )
    } else {
      const post = this.props.post.blogPost
      const date = post.name ? post.name.slice(0, 10) : '-'
      const title = post.name ? post.name.slice(11).replace(/_/g, ' ') : '-'
      const generate = () => ({
        __html: post.content
      })

      return (
        <div className="pageHeader">
          <h1>{title}</h1>
          <div><small>{date}</small></div>
          <div className="post-content" dangerouslySetInnerHTML={generate()} />
        </div>
      )
    }
  }
}

export default Post
