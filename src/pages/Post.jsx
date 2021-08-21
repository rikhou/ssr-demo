import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fetchData from '../helpers/fetchData'
import {DataContext} from '../DataProvider'

export default class Post extends Component {
  // static async getInitialProps() {
  //   const data = await fetchData()
  //   return data
  // }
  static contextType = DataContext

  constructor(props, context) {
    super(props)
    if (props.staticContext && props.staticContext.data) {
      console.log('server side render')
      this.state = {post: props.staticContext.data}
    } else {
      console.log('client side render')
      this.state = {post: context}
    }
  }

  componentDidMount() {
    if (Object.keys(this.state.post).length === 0) {
      Post.getInitialProps().then((data) => {
        this.setState({post: data})
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

Post.getInitialProps = async () => {
  const data = await fetchData()
  return data
}
