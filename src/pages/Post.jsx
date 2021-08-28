import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, shallowEqual} from 'react-redux'
import {setPost} from '../store/post/createActions'

const Post = () => {
  const post = useSelector((state) => state.post.data, shallowEqual)
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

Post.getInitialProps = (store) => store.dispatch(setPost())

// Post.getInitialProps = async (store) => setPost(store.dispatch)

export default Post
