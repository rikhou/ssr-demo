import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fetchData from '../helpers/fetchData'

export default class Post extends Component {
  constructor(props) {
    super(props)
    if (props.staticContext && props.staticContext.data) {
      console.log('server side render')
      this.state = {
        post: props.staticContext.data
      }
    } else {
      if (window.__ROUTE_DATA__) {
        console.log('client side render raised by SSR')
        this.state = {
          post: window.__ROUTE_DATA__
        }
        delete window.__ROUTE_DATA__
      } else {
        console.log('client side render')
        this.state = {
          post: {}
        }
      }
    }
  }

  componentDidMount() {
    if (!window.__ROUTE_DATA__) {
      fetchData().then((data) => {
        this.setState({
          post: data
        })
      })
    }
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
          Link:
          <a href={post.url} target='_blank'>
            {post.url}
          </a>
        </p>
      </div>
    )
  }
}
