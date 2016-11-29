import React from 'react'

export const PostItem = (props) => {
  const date = props.name.slice(0, 10)
  const title = props.name.slice(11).replace(/_/g, ' ')
  const target = `/post/${props.name}`

  return (
    <div>
      <div className="post-preview">
        <a href={target}>
          <h2 className="post-title">{title}</h2>
          <div><small>{date}</small></div>
        </a>
      </div>
      <hr />
    </div>
  )
}

export default PostItem
