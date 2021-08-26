import React from 'react'
import {Link} from 'react-router-dom'
import fetchData from '../helpers/fetchData'

const Post = (props) => {
  const post = props.data
  return (
    <div>
      <h1>Page Post</h1>
      <Link to='/'>Link to Home</Link>
      <h2>Title: {post.title}</h2>
      <p>By: {post.author}</p>
      <p>
        Link:
        <a href={post.url} target='_blank'>
          {post.url}
        </a>
      </p>
    </div>
  )
}

Post.getInitialProps = async () => {
  const data = await fetchData()
  return data
}

export default Post
