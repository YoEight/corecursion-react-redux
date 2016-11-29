import React from 'react'

export const PostItem = (props) => {
  const date = props.name.slice(0, 11)
  const title = props.name.slice(13)

  return (
    <div className="post-preview">
      <a href="#">
        <h2 className="post-title">
          {title}
          <small>{date}</small>
        </h2>
      </a>
    </div>
  )
}
