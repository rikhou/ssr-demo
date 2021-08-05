import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fetchData from '../helpers/fetchData'

export default class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    fetchData().then((data) => {
      this.setState({
        post: data
      })
    })
  }
  render() {
    const post = this.state.post
    return (
      <div>
        <h1>Page Post</h1>
        <Link to='/'>Link to Home</Link>
        <h2>Title: {post.title}</h2>
        <p>By: {post.author}</p>
        <p>
          Link:{' '}
          <a href={post.url} target='_blank'>
            {post.url}
          </a>
        </p>
      </div>
    )
  }
}
