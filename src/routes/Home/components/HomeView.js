import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import PostItem from './PostItem'

class HomeView extends React.Component {
  componentDidMount() {
    this.props.loadPosts()
  }

  render () {
    const posts = this.props.homepage.posts.map((p) => PostItem(p))

    return (
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          { posts }
        </div>
      </div>
    )
  }
}

export default HomeView
